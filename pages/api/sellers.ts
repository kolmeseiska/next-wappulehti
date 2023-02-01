import { NextApiRequest, NextApiResponse } from 'next'

import { appendSheet, GoogleConfigSheets } from '../../src/google'
import { Seller } from '../../src/seller'

export default async function handler(
  req: NextApiRequest & Seller,
  res: NextApiResponse<ApiSuccess|ApiError>
) {
  if (req.method === 'POST') {
    if(!process.env.SPREADSHEET_ID_SELLER || !process.env.API_KEY) {
      return res.status(500)
        .json({
          message: 'Ongelmia palvelimella. Ota yhteyttä Pönkeleihin'
        })
    }
  
    const configSheets = {
      apiKey: process.env.API_KEY,
      spreadsheetId: process.env.SPREADSHEET_ID_SELLER
    } as GoogleConfigSheets
    
    const data: Seller = req.body
    const columns =[
      new Date(),
      data.name,
      data.email,
      data.isExperience,
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
