import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Seller, sellerSchema } from '../src/seller'
import FormCheckbox from './FormCheckbox'
import FormInput from './FormInput'
import FormTextarea from './FormTextarea'
import LoadingIcon from './LoadingIcon'

const upload = async (seller:Seller) => {
  try {
    const response = await fetch('/api/sellers', {
      body:  JSON.stringify(seller),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const defaultValues: Seller = {
  name: '',
  email: '',
  description: '',
  isExperience: false
}

const SellerForm = () => {
  const { register, handleSubmit, formState, reset } = useForm<Seller>({ 
    resolver: yupResolver(sellerSchema),
    defaultValues
  })

  const onSubmit:SubmitHandler<Seller> = async (seller) => {
    await upload(seller)
    reset(defaultValues)
  }
  
  const { isSubmitting, isDirty, errors } = formState
  const isBusy = isSubmitting || !isDirty
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput<Seller>
        name='name'
        label='Nimi'
        register={register}
        errors={errors}
      />
      <FormInput<Seller>
        name='email'
        label='Sähköposti'
        register={register}
        errors={errors}
      />
      <FormTextarea<Seller>
        name='description'
        label='Kerro vähän itsestäsi?'
        register={register}
        errors={errors}
        placeholder='Aikaisempi myyjäkokemus etc.'
      />
      <FormCheckbox<Seller> 
        name='isExperience'
        label='Minulla on aikaisempaa wappulehtikokemusta'
        register={register}
        errors={errors}
      />
      <div className='form-control mt-6'>
        <button
          type='submit'
          className={`btn btn-primary relative ${isBusy ? 'btn-disabled' : ''} `}
          disabled={isSubmitting || !isDirty}
        >
          {isSubmitting 
            ? <LoadingIcon /> 
            : null}
          {isDirty
            ?'Lähetä'
            :'Ryhdy Pönkelimyyjäksi!'}
        </button>
      </div>
    </form>
  )
}

export default SellerForm
