import yup from './validators'

const MAX_FILE_SIZE_MB = 1000 * 1000 * 5

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

export const participationSchema = yup.object({
  joke: yup.string()
    .defined()
    .max(2000)
    .label('Teksti'),
  // .when('files', {
  //   is: (files: []) => files?.length,
  //   then: schema => schema,
  //   otherwise: schema => schema.required('Vitsi tai tiedosto vaaditaan')
  // }),
  files: yup.array()
    .of(yup.mixed()
      .test('fileSize', 'Liite on liian iso', (value: File[]) => {
        const files = Array.isArray(value) ? value : [value]
        return files.reduce((acc, file) => acc + file.size, 0) <= MAX_FILE_SIZE_MB
      })
      .test('type', 'Virheellinen tiedostotyyppi', (value:File[]) => {
        const files = Array.isArray(value) ? value : [value]
        return files.every(file => supportedFileTypes.includes(file.type))
      }))
    .defined()
    // .when('joke', { 
    //   is: (joke: string) => joke.length,
    //   then: schema => schema,
    //   otherwise: schema => schema.required('Tiedosto tai vitsi vaaditaan').min(1, 'Vähintään 1 tiedosto vaaditaan')
    // })
    .label('Liitteet'),
  email: yup.string().label('Sähköposti').defined().max(320),
  guild: yup.string().label('Kilta').defined().max(320),
  isFuksi: yup.boolean().label('Olen fuksi').defined(),
})

export type Participation = yup.InferType<typeof participationSchema>
