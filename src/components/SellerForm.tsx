import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslations } from 'next-intl'

import { Seller, sellerSchema } from '../seller'
import FormCheckbox from './FormCheckbox'
import FormInput from './FormInput'
import LoadingIcon from './LoadingIcon'

const upload = async (seller: Seller) => {
  try {
    const response = await fetch('/api/sellers', {
      body: JSON.stringify(seller),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return await response.json()
  } catch(error) {
    console.error(error)
  }
}

const defaultValues: Seller = {
  name: '',
  email: '',
  isExperience: false,
  isFuksi: false
}

const SellerForm = () => {
  const t = useTranslations('forms.seller')
  const { register, handleSubmit, formState, reset } = useForm<Seller>({
    resolver: yupResolver(sellerSchema),
    defaultValues
  })

  const onSubmit: SubmitHandler<Seller> = async (seller) => {
    await upload(seller)
    reset(defaultValues)
  }

  const { isSubmitting, isDirty, errors } = formState
  const isBusy = isSubmitting || !isDirty
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput<Seller>
        name='name'
        label={t('name')}
        register={register}
        errors={errors}
      />
      <FormInput<Seller>
        name='email'
        label={t('email')}
        register={register}
        errors={errors}
      />
      <FormCheckbox<Seller>
        name='isExperience'
        label={t('isExperience')}
        register={register}
        errors={errors}
      />
      <FormCheckbox<Seller>
        name='isFuksi'
        label={t('isFuksi')}
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
            ? t('submit')
            : t('submitIdle')}
        </button>
      </div>
    </form>
  )
}

export default SellerForm
