import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import FormInput from './FormInput'
import FormTextarea from './FormTextarea'
import LoadingIcon from './LoadingIcon'
import { Recruitment, recruitmentSchema } from '@/recruitment'

const upload = async (recruitment: Recruitment) => {
  try {
    const response = await fetch('/api/recruitments', {
      body: JSON.stringify(recruitment),
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

const defaultValues: Recruitment = {
  name: '',
  email: '',
  telegram: '',
  description: ''
}

const RecruitmentForm = () => {
  const { register, handleSubmit, formState, reset } = useForm<Recruitment>({
    resolver: yupResolver(recruitmentSchema),
    defaultValues
  })

  const onSubmit: SubmitHandler<Recruitment> = async (recruitment) => {
    await upload(recruitment)
    reset(defaultValues)
  }

  const { isSubmitting, isDirty, errors, isValid } = formState
  const isBusy = isSubmitting || !isDirty
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput<Recruitment>
        name='name'
        label='Nimi'
        register={register}
        errors={errors}
      />
      <FormInput<Recruitment>
        name='year'
        label='Vuosikurssi'
        register={register}
        errors={errors}
      />
      <FormInput<Recruitment>
        name='fieldOfStudy'
        label='Mitä opiskelet'
        register={register}
        errors={errors}
      />
      <FormInput<Recruitment>
        name='telegram'
        label='Telegram-nick'
        register={register}
        errors={errors}
      />
      <FormTextarea<Recruitment>
        name='description'
        label='Lyhyt viesti itsestäsi halutessasi'
        register={register}
        errors={errors}
      />
      <div className='form-control mt-6'>
        <button
          type='submit'
          className={`btn btn-primary relative ${isBusy ? 'btn-disabled' : ''} `}
          disabled={isSubmitting || !isValid}
        >
          {isSubmitting
            ? <LoadingIcon />
            : null}
          {isValid
            ? 'Lähetä'
            : 'Tule mukaan toimintaan!'}
        </button>
      </div>
    </form>
  )
}

export default RecruitmentForm
