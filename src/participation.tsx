import yup from './validators'

const MAX_FILE_SIZE = 1024 * 5

export const supportedFileTypes = [
  'application/pdf',
  'audio/mpeg',
  'audio/wav',
  'image/gif',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'image/webp',
  'text/css',
  'text/plain',
  'video/mp4',
]

export const schema = yup.object().shape({
  joke: yup.string().label('Kontsa')
    .when('files', {
      is: (files: []) => files.length,
      then: schema => schema,
      otherwise: schema => schema.required('Vitsi tai tiedosto vaaditaan')
    }),
  files: yup.array(yup.mixed()
    .test('fileSize', 'Liite on liian iso', (value: File[]) => {
      console.log('filesize', value?.reduce((acc, file) => acc + file.size, 0))
      return value?.reduce((acc, file) => acc + file.size, 0) <= MAX_FILE_SIZE
    })
    .test('type', 'Virheellinen tiedostotyyppi', (value:File[]) => {
      return value?.every(file => supportedFileTypes.includes(file.type))
    }))
    .when('joke', { 
      is: true,
      then: schema => schema,
      otherwise: schema => schema.required('Tiedosto tai vitsi vaaditaan').min(1, 'Vähintään 1 tiedosto vaaditaan')
    }).label('Liitteet'),
  email: yup.string().label('Sähköposti').nullable(),
  guild: yup.string().label('Kilta').nullable(),
}, [['joke', 'files']])

export type Participation = yup.InferType<typeof schema>
