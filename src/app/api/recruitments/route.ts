import { appendSheet, GoogleConfigSheets } from '@/google'
import { Recruitment } from '@/recruitment'

export async function POST(req: Request) {
  if(!process.env.SPREADSHEET_ID_RECRUITMENT || !process.env.API_KEY) {
    return Response
      .json(
        { message: 'Ongelmia palvelimella. Ota yhteyttä Pönkeleihin' },
        { status: 200 }
      )
  }

  const configSheets = {
    apiKey: process.env.API_KEY,
    spreadsheetId: process.env.SPREADSHEET_ID_RECRUITMENT
  } as GoogleConfigSheets

  const data: Recruitment = await req.json()
  const columns = [
    new Date(),
    data.name,
    data.email,
    data.telegram,
    data.description,
  ]

  const sheet = await appendSheet(columns, configSheets)

  console.log('Updated sheet', sheet)
  return Response.json({ message: 'Got it!' })
}
