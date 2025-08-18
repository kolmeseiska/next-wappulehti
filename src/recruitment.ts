import yup from './validators'

export const recruitmentSchema = yup.object({
  name: yup.string().label('Nimi').defined().required().max(320),
  email: yup.string().email().label('Sähköposti').defined().optional().max(320),
  year: yup.string().label('Vuosikurssi').defined().optional().max(320),
  fieldOfStudy: yup.string().label('Mitä opiskelet').defined().optional().max(320),
  telegram: yup.string().label('Telegram-nimimerkki').defined().max(320),
  description: yup.string().label('Kuvaus').defined().max(2000),
})

export type Recruitment = yup.InferType<typeof recruitmentSchema>
