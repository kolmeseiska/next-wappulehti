/* eslint-disable @typescript-eslint/no-explicit-any */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import multer from 'multer'
import type { NextApiRequest, NextApiResponse, PageConfig } from 'next'

import { GoogleConfig, uploadFiles, uploadToSheets } from '../../src/google'
import { Participation } from '../../src/participation'

type Success = {
  message: string
}
type Error = {
  message: string,
  error: string
}

const runMiddleware = async (
  req: NextApiRequest & { [key: string]: any },
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
    const files = req.files
    
    let filenames = null 

    const { SPREADSHEET_ID, API_KEY } = process.env
    
    if(!SPREADSHEET_ID || !API_KEY) {
      return res.status(500)
        .json({
          message: 'error'
        })
    }
  
    const config = {
      apiKey: API_KEY,
      spreadsheetId: SPREADSHEET_ID
    } as GoogleConfig
    if(files?.length) {
      filenames = await uploadFiles(files, config)
    }
    const sheet = await uploadToSheets({
      ...req.body,
      filename: filenames?.join(', ')
    }, config)

    console.log('Uploaded sheet', sheet)

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
