import yup from './validators'

export const sellerSchema = yup.object({
  name: yup.string().label('Nimi').defined().required().max(320),
  email: yup.string().label('Sähköposti').defined().required().max(320),
  description: yup.string().label('Lisätietoja').defined().required().max(2000),
  isExperience: yup.boolean().label('Aikaisempi wappulehtikokemus').defined().required()
})

export type Seller = yup.InferType<typeof sellerSchema>
