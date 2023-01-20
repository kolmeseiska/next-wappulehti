import * as gDrive from '@googleapis/drive'
import * as gSheets from '@googleapis/sheets'
import * as auth from 'google-auth-library'
import stream from 'stream'

import { Participation } from './participation'

const credentials = {
  'type': 'service_account',
  'project_id': 'wappulehti-344418',
  'private_key_id': process.env.GA_PRIVATE_KEY_ID,
  'private_key': process.env.GA_PRIVATE_KEY,
  'client_email': 'wappulehti@wappulehti-344418.iam.gserviceaccount.com',
  'client_id': process.env.GA_CLIENT_ID,
  'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
  'token_uri': 'https://oauth2.googleapis.com/token',
  'auth_provider_x509_cert_url': 'https://www.googleapis.com/oauth2/v1/certs',
  'client_x509_cert_url': 'https://www.googleapis.com/robot/v1/metadata/x509/wappulehti%40wappulehti-344418.iam.gserviceaccount.com'
}

export type GoogleConfigSheets = {
  apiKey: string,
  spreadsheetId: string,
}

export type GoogleConfigDrive = {
  driveFolderId: string
}

export const uploadFiles = async (files: Express.Multer.File[], config: GoogleConfigDrive, description?:string):Promise<string[]> => {
  const jwt = getJwt('drive')
  const uploadFile = async (file:Express.Multer.File) => {
    const bufferStream = new stream.PassThrough()
    bufferStream.end(file.buffer)
    const safeName = encodeURI(file.originalname.replaceAll(' ', '_'))
    const { data } = await gDrive
      .drive({ version: 'v3' })
      .files
      .create({
        auth: jwt,
        media: {
          mimeType: file.mimetype,
          body: bufferStream,
        },
        requestBody: {
          name: safeName,
          parents: [config.driveFolderId],
          description
        },
        fields: 'id,name,webViewLink',
      })
    return data
  }

  const filenames:string[] = []
  for(const file of files) {
    const uploadedFile = await uploadFile(file)
    console.log(uploadedFile)
    if(uploadedFile?.webViewLink) {
      filenames.push(uploadedFile.webViewLink)
    }
    console.log(`Uploaded file ${uploadedFile.name} ${uploadedFile.id} ${uploadedFile.webViewLink}`)
  }
  return filenames
}

type SheetData = Omit<Participation, 'files'> & 
  { 
    filename:string
  }

export const uploadToSheets = async (data:SheetData, config: GoogleConfigSheets):Promise<string> => {
  const columns = parseToSheets(data)
  return await appendSheet(columns, config)
}

const parseToSheets = (data:SheetData):Array<any> => {
  return [
    new Date(),
    data.joke,
    data.email,
    data.guild,
    data.filename,
    data.isFuksi,
  ]
}

const appendSheet = (columns:Array<undefined>, config: GoogleConfigSheets) => {
  const jwt = getJwt('spreadsheets')
  const range = 'A2' // First is header
  return appendSheetRow(jwt, config.apiKey, config.spreadsheetId, range, columns)
}

const getJwt = (googleService: 'spreadsheets'|'drive') => {
  return new auth.JWT(
    credentials.client_email, 
    undefined, 
    credentials.private_key,
    [`https://www.googleapis.com/auth/${googleService}`]
  )
}

const appendSheetRow = async (jwt: auth.JWT, apiKey: string, spreadsheetId: string, range: string, row:Array<undefined>) => {
  const sheets = gSheets.sheets({ version: 'v4' })
  try {
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range,
      auth: jwt,
      key: apiKey,
      valueInputOption: 'RAW',
      requestBody: {
        values: [row]
      }
    })
    console.log('Updated sheet: ' + result.data.updates?.updatedRange)
    return result.data.updates?.updatedRange || 'Nothing updated'
  } catch (error) {
    console.dir(error, { depth: null })
    throw error
  }

}
