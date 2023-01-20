import React, { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Participation, participationSchema } from '../src/participation'
import FileInput from './FileInput'
import LoadingIcon from './LoadingIcon'

const defaultValues = {
  joke: '',
  files: [],
  email: '',
  guild: '',
  isFuksi: false
}

type LabelProps = {
  label:ReactNode,
  errors:Record<string, { message: string}>,
  name:string
}

const Label = ({ label, name, errors }:LabelProps) => {
  const error = errors[name]?.message
  return (
    <label
      htmlFor={name}
      className={`label ${error ? 'tooltip tooltip-error tooltip-left tooltip-open' : ''}`}
      data-tip={error}
    >
      <span className='label-text'>{label}</span>
    </label> 
  )
}

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
    const result = (await fetch('/api/participation', {
      body:  formData,
      method: 'POST',
    }))
      .json()
    return result
  } catch (error) {
    console.log(error)
  }
}
const Form = () => {
  const { register, handleSubmit, formState, setValue, reset } = useForm({ 
    resolver: yupResolver(participationSchema),
    defaultValues
  })

  const onSubmit = async (participation:Participation) => {
    // TODO: show success notification
    await upload(participation)
    reset(defaultValues)
  }
  
  const { isSubmitting, isDirty, isSubmitted, errors } = formState
  const isBusy = isSubmitting || !isDirty
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form-control'>
        <Label
          label='Kirjoita vitsi, juttu tai tarina'
          errors={errors}
          name='joke'
        />
        <textarea
          id='joke'
          {...register('joke')}
          className={`textarea textarea-bordered h-24 textarea-primary
            ${errors.joke ? 'textarea-error' : ''}`}
        ></textarea>
      </div>
      <FileInput
        setValue={setValue}
        isSubmitted={isSubmitted}
        error={errors.files}
      />
      <div className='form-control'>
        <Label
          label='Sähköposti'
          errors={errors}
          name='email'
        />
        <input 
          id='email'
          {...register('email')}
          type='text'
          className={`input input-bordered input-primary
            ${errors.email ? 'input-error' : ''}`}
        />
      </div>
      <div className='form-control'>
        <Label
          label='Kilta'
          errors={errors}
          name='guild'
        />
        <input 
          id='guild'
          {...register('guild')}
          type='text'
          className={`input input-bordered input-primary
            ${errors.guild ? 'input-error' : ''}`}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='isFuksi' className='label cursor-pointer'>
          <span className='label-text'>Olen fuksi</span> 
          <input
            id='isFuksi'
            type='checkbox'
            {...register('isFuksi')}
            className='checkbox checkbox-primary'
          />
        </label>
      </div>
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
