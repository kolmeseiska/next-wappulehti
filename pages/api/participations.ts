/* eslint-disable @typescript-eslint/no-explicit-any */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import multer from 'multer'
import type { NextApiRequest, NextApiResponse, PageConfig } from 'next'

import { appendSheet, GoogleConfigDrive, GoogleConfigSheets, uploadFiles } from '../../src/google'
import { Participation } from '../../src/participation'

const storage = multer.memoryStorage()

const runMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: (...args: any[]) => void
): Promise<any> => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if(result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest & Participation,
  res: NextApiResponse<ApiSuccess | ApiError>
) {
  if(req.method === 'POST') {
    const multerUpload = multer({ dest: 'files/', storage })
    await runMiddleware(req, res, multerUpload.array('files'))
    const files = req.files as Express.Multer.File[]

    let filenames = null

    if(!process.env.SPREADSHEET_ID_PARTICIPATION || !process.env.API_KEY) {
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
      spreadsheetId: process.env.SPREADSHEET_ID_PARTICIPATION,
      tabIndex: 0
    } as GoogleConfigSheets

    if(files?.length && !process.env.SKIP_FILE_UPLOAD) {
      filenames = await uploadFiles(files, configDrive)
    }

    const data: Participation = req.body
    const columns = [
      new Date(),
      data.joke,
      data.email,
      data.guild,
      filenames?.join('\n'),
      data.isFuksi,
    ]

    const sheet = await appendSheet(columns, configSheets)
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
