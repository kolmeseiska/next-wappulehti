import * as gDrive from '@googleapis/drive'
import * as gSheets from '@googleapis/sheets'
import * as auth from 'google-auth-library'
import stream from 'stream'

import { Participation } from './participation'

const credentials = {
  'private_key': process.env.GA_PRIVATE_KEY?.replace(/\\n/gm, '\n'),
  'client_email': 'wappulehti@wappulehti-344418.iam.gserviceaccount.com',
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
    if(uploadedFile?.webViewLink) {
      filenames.push(uploadedFile.webViewLink)
    }
    console.log(`Uploaded file ${uploadedFile.name} ${uploadedFile.id} ${uploadedFile.webViewLink}`)
  }
  return filenames
}

type ParticipationSheetData = Omit<Participation, 'files'> & 
  { 
    filename:string
  }

type ParticipationSheetArray = [
  createdAt:Date,
  joke:string,
  email:string,
  guild:string,
  filename:string,
  isFuksi:boolean
]

export const uploadToSheets = async (data:ParticipationSheetData, config: GoogleConfigSheets):Promise<string> => {
  const columns = parseToSheets(data)
  return await appendSheet(columns, config)
}

const parseToSheets = (data:ParticipationSheetData):ParticipationSheetArray => {
  return [
    new Date(),
    data.joke,
    data.email,
    data.guild,
    data.filename,
    data.isFuksi,
  ]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const appendSheet = <TSheet extends any[]>(row:TSheet, config: GoogleConfigSheets) => {
  const jwt = getJwt('spreadsheets')
  const range = 'A2' // First is header
  return appendSheetRow(jwt, config.apiKey, config.spreadsheetId, range, row)
}

const getJwt = (googleService: 'spreadsheets'|'drive') => {
  return new auth.JWT(
    credentials.client_email, 
    undefined, 
    credentials.private_key,
    [`https://www.googleapis.com/auth/${googleService}`]
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const appendSheetRow = async <TSheet extends any[]  >(jwt: auth.JWT, apiKey: string, spreadsheetId: string, range: string, row:TSheet) => {
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
    return result.data.updates?.updatedRange || 'Nothing updated'
  } catch (error) {
    console.dir(error, { depth: null })
    throw error
  }
}
