
import { appendSheet, GoogleConfigSheets } from '@/google'
import { Seller } from '@/seller'

export async function POST(req: Request) {
  if(!process.env.SPREADSHEET_ID_SELLER || !process.env.API_KEY) {
    return Response
      .json(
        { message: 'Ongelmia palvelimella. Ota yhteyttä Pönkeleihin' },
        { status: 200 }
      )
  }

  const configSheets = {
    apiKey: process.env.API_KEY,
    spreadsheetId: process.env.SPREADSHEET_ID_SELLER
  } as GoogleConfigSheets

  const data: Seller = await req.json()
  const columns = [
    new Date(),
    data.name,
    data.email,
    data.isExperience,
    data.isFuksi,
  ]

  const sheet = await appendSheet(columns, configSheets)

  console.log('Updated sheet', sheet)
  return Response.json({ message: 'Got it!' })
}
