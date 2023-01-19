import * as gSheets from '@googleapis/sheets'
import * as auth from 'google-auth-library'

import { Participation } from './participation'

export type GoogleConfig = {
  apiKey: string,
  spreadsheetId: string
}

export const uploadFiles = async (files: File[], config: GoogleConfig):Promise<string[]> => {
  return Promise.resolve(['yeah'])
}

type SheetData = Omit<Participation, 'files'> & 
  { 
    filename:string
  }

export const uploadToSheets = async (data:SheetData, config: GoogleConfig):Promise<string> => {
  const columns = parseToSheets(data)
  await appendSheet(columns, config)
  return 'sheet'
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

const appendSheet = (columns:Array<undefined>, config: GoogleConfig) => {
  const jwt = getJwt()
  const range = 'A2' // First is header
  return appendSheetRow(jwt, config.apiKey, config.spreadsheetId, range, columns)
}

const getJwt = () => {
  const credentials = {
    'type': 'service_account',
    'project_id': 'wappulehti-344418',
    'private_key_id': '0059c178552d0df5d0c5871b4458e2b925640d70',
    'private_key': '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDWIVNLn8rFDo8r\n28A5w4bf196Y+fnfNPkuVmh/ADC3WGBVqqVAKHTDw8FWpliTwZ/m43dVlUYHUFVH\nal7S6zQ5aM0qm3QhUjj4fuIiRk4T6rr8bLfYFdD4zLhAK98GfKMeURXg7ZLBaiLF\nyZySPXnZ0djIzh20Xgukz4PNBcicst03KyoWExyv4MxgNmZzJLy8PKWgKT/1nYfN\nlVlvEqmeStDgtgl/z06C93L8rktL/AhmZGModVZ0bnirPtlupwFphp0Xd+0PKbWN\nVYpAG1teztJLQ4dy4+P3Lz8T3wgNnZ/G5+077aJTokkJqj07QjUd427SojENrTEG\nxlQQHO4XAgMBAAECggEAGkSBStQh1DWag5dUB+IAACKjmGGF8Qc3ECOicv3re/pX\n6vphhjLQTBmN9Jq4X/vPKUw7HeEPc6M7quSWGEqpH+fGz1S9lL7Y5UbvZ6P3PQM9\nB+0wSk420eaPLbQUCmAsxHHO/MY4DAkAlgHK9rea5IkVDmEWjMNCq2eXdAWjG/Gt\ni9EuOGqWXK0v3EqCdmpt1AmHWEexzDoKueN2teCxBL2BJ6SlTYzK+5No8VKat3Tw\nz1kFy7V7bbILf73NmZo/OUgPaKZdQAQJsvRX5Z/zOgEZPrhwtHFUU8ChOZT/ppoP\niv0O/EawjEk1BchBt8NOJx1cXXdKXw94mxlHAVwpoQKBgQD8xk5/KFcCcF923fWI\nNQbHGqnezCYS8cK1MIgo11O9f+REfAR1QDZZvCYcDPU3SZJChAyBuYsYhKewyUYH\nPxE0DiyVC96PI5eHfl5+jSFVGt6aH0Ihi/cQpdlo6GIs1tJ3K4SDCppyaqPrK1V0\ndVKPOO3h5+ING7CkjRLO7BkSNwKBgQDY3MktwGmnGJ+lrHcSh+ZzI/lcp48Cy0Z3\n/bxu8iqeL4wUFiz8zEacFS+sWOXtbhGPXDHrYHMU9xnmcVGKQYyjEZhDF078Pw25\nGaWczsOscDinX2TQRs13uCgw0cugv1xLG2izmHVHywFp69sAZuJ71SYYbPuISV48\nsOubmfSTIQKBgDs+PyeOTNZFgBpb6zABPZVsqmONdV77SqcsuLzZusavMtDaQDE6\n24IslsH8R3ytwZnVWRkOY4tbi/HjOoZ4QY/xwoEsRv1FWj5nX75JVYacxY9ZxCYY\np88/D7WGwXvA3ZMQn/4WfhxS4hg8D8s7tB3dOeO4dUKdOslWRxI4Q6gBAoGAf/Zv\no1aJQTcPZQQKUt3sBn7wslKQ2XY3A7CuUs0EhsjJoEShkR28gHcj5U+jhOFQ7UXa\nkugboABawRaWpb0eDk7giJ4lVkSihVlz1r5Oyd6CH4jzhM5yiTUaSgxRWm3wOMVY\nl7jbY1yPXf/0/xy2gZl5XCpalcWtHKTMsck7fuECgYBtBXVn74uh7n/gUegajuNv\n8EHdKZTvkKca98xEJo2vbDek4FVymlGHV5Zw12EC2P2XxOUdpJPZNh50qsqQSxAO\nV0M9U7zP99nggGknUaobi5malqqRPRD0KzerVwkkrlASydAPLdumQzaIgNfHwY2F\nTsI80Rd/n4hiGIbZp7Si9w==\n-----END PRIVATE KEY-----\n',
    'client_email': 'wappulehti@wappulehti-344418.iam.gserviceaccount.com',
    'client_id': '109944329369622008308',
    'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
    'token_uri': 'https://oauth2.googleapis.com/token',
    'auth_provider_x509_cert_url': 'https://www.googleapis.com/oauth2/v1/certs',
    'client_x509_cert_url': 'https://www.googleapis.com/robot/v1/metadata/x509/wappulehti%40wappulehti-344418.iam.gserviceaccount.com'
  }
  
  return new auth.JWT(
    credentials.client_email, 
    undefined, 
    credentials.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
  )
}

const appendSheetRow = (jwt: any, apiKey: string, spreadsheetId: string, range: string, row:Array<undefined>) => {
  return new Promise((resolve, reject) => {
    const sheets = gSheets.sheets({ version: 'v4' })
    sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range,
      auth: jwt,
      key: apiKey,
      valueInputOption: 'RAW',
      requestBody: {
        values: [row]
      }
    }, (err, result) => {
      if(err) {
        console.dir(err, { depth: null })
        reject(err)
      }
      else {
        if(!result?.data?.updates) {
          return reject('Failed to upload sheet')
        }
        console.log('Updated sheet: ' + result.data.updates.updatedRange)
        return resolve(result.data)
      }
    })
  })
}
