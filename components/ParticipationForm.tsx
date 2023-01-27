import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Participation, participationSchema } from '../src/participation'
import FileInput from './FileInput'
import FormCheckbox from './FormCheckbox'
import FormInput from './FormInput'
import FormTextarea from './FormTextarea'
import LoadingIcon from './LoadingIcon'

const upload = async (participation:Participation) => {
  const formData = new FormData()

  if(participation.files) {
    Array.from(participation.files).forEach((file) => {
      formData.append('files', file)
    })
  }
  formData.append('joke', participation.joke || '')
  formData.append('email', participation.email || '')
  formData.append('guild', participation.guild || '')
  formData.append('isFuksi', participation.isFuksi == null ? 'false' : participation.isFuksi.toString())
  
  try {
    const response = await fetch('/api/participation', {
      body:  formData,
      method: 'POST'
    })
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const defaultValues: Participation = {
  joke: '',
  files: [],
  email: '',
  guild: '',
  isFuksi: false
}

const Form = () => {
  const { register, handleSubmit, formState, setValue,  setError, reset } = useForm<Participation>({ 
    resolver: yupResolver(participationSchema),
    defaultValues
  })

  const onSubmit:SubmitHandler<Participation> = async (participation) => {
    if(!participation.files.length && !participation.joke.length) {
      setError('joke', { message:'Vitsi tai tiedosto vaaditaan' })
      setError('files.0', { message: 'Vitsi tai tiedosto vaaditaan' })
      return 
    }
    // TODO: show success notification
    await upload(participation)
    reset(defaultValues)
    
  }
  
  const { isSubmitting, isDirty, isSubmitted, errors } = formState
  const isBusy = isSubmitting || !isDirty
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormTextarea<Participation>
        name='joke'
        label='Kirjoita vitsi, juttu tai tarina'
        register={register}
        errors={errors}
      />
      <FileInput
        setValue={setValue}
        isSubmitted={isSubmitted}
        errors={errors}
      />
      <FormInput<Participation>
        name='email'
        label='Sähköposti'
        register={register}
        errors={errors}
      />
      <FormInput<Participation>
        name='guild'
        label='Kilta'
        register={register}
        errors={errors}
      />
      <FormCheckbox<Participation> 
        name='isFuksi'
        label='Olen fuksi'
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
            :'Kirjoita meille'}
        </button>
      </div>
    </form>
  )
}

export default Form
