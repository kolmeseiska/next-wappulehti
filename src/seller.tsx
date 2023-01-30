import yup from './validators'

export const sellerSchema = yup.object({
  name: yup.string().label('Nimi').defined().required().max(320),
  email: yup.string().label('Sähköposti').defined().required().max(320),
  isExperience: yup.boolean().label('Aikaisempi wappulehtikokemus').defined().required(),
  isFuksi: yup.boolean().label('Olen fuksi').defined().required()
})

export type Seller = yup.InferType<typeof sellerSchema>
