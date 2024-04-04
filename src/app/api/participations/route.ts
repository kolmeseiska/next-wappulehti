import { appendSheet, GoogleConfigDrive, GoogleConfigSheets, uploadFiles } from '@/google'

export async function POST(req: Request) {
  const formData = await req.formData()

  const joke = formData.get('joke')
  const email = formData.get('email')
  const guild = formData.get('guild')
  const isFuksi = formData.get('isFuksi')
  const files = formData.getAll('files') as File[]

  if(!process.env.SPREADSHEET_ID_PARTICIPATION || !process.env.API_KEY) {
    return Response
      .json(
        { message: 'Ongelmia palvelimella. Ota yhteyttä Pönkeleihin' },
        { status: 500 }
      )
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

  let filenames = null
  if(files?.length && !process.env.SKIP_FILE_UPLOAD) {
    filenames = await uploadFiles(files, configDrive)
  }

  const columns = [
    new Date(),
    joke,
    email,
    guild,
    filenames?.join('\n'),
    isFuksi,
  ]

  const sheet = await appendSheet(columns, configSheets)
  console.log('Updated sheet', sheet)

  return Response.json({ Message: 'Success', status: 201 })
}
