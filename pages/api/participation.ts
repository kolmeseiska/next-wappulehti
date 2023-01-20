/* eslint-disable @typescript-eslint/no-explicit-any */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import multer from 'multer'
import type { NextApiRequest, NextApiResponse, PageConfig } from 'next'

import { GoogleConfigDrive, GoogleConfigSheets, uploadFiles, uploadToSheets } from '../../src/google'
import { Participation } from '../../src/participation'

type Success = {
  message: string
}
type Error = {
  message: string,
  error: string
}

const runMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: (...args: any[]) => void
): Promise<any> => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest & Participation,
  res: NextApiResponse<Success|Error>
) {
  if (req.method === 'POST') {
    const multerUpload = multer({ dest: 'files/' })
    await runMiddleware(req, res, multerUpload.array('files'))
    const files = req.files as Express.Multer.File[]
    
    let filenames = null 
    
    if(!process.env.SPREADSHEET_ID || !process.env.API_KEY) {
      return res.status(500)
        .json({
          message: 'Ongelmia palvelimella. Ota yhteyttä Pönkeleihin'
        })
    }
  
    const configDrive = {
      apiKey: process.env.API_KEY,
      driveFolderId: process.env.DRIVE_FOLDER_ID
    } as GoogleConfigDrive
    const configSheets = {
      apiKey: process.env.API_KEY,
      spreadsheetId: process.env.SPREADSHEET_ID
    } as GoogleConfigSheets

    if(files?.length && !process.env.SKIP_FILE_UPLOAD) {
      filenames = await uploadFiles(files, configDrive)
    }
    const sheet = await uploadToSheets({
      ...req.body,
      filename: filenames?.join('\n')
    }, configSheets)

    console.log('Updated sheet', sheet)

    res.status(200).json({
      message: 'Got it!'
    })
  } else {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed`, message: 'error' })
  }
}

export const config: PageConfig = {
  api: {
    bodyParser: false,
    responseLimit: '5mb'
  },
}
