import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { participationSchema } from '../src/participation'
import FileInput from './FileInput'
import LoadingIcon from './LoadingIcon'

const defaultValues = {
  joke: '',
  files: [],
  email: '',
  guild: ''
}
const Form = () => {

  const { register, handleSubmit, formState, setValue, reset } = useForm({ 
    resolver: yupResolver(participationSchema),
    defaultValues
  })

  const onSubmit = (things:unknown) => {
    console.log(things)
    reset(defaultValues)
  }
  
  const { isSubmitting, isDirty, errors } = formState
  console.log(errors)
  
  const isBusy = isSubmitting || !isDirty
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form-control'>
        <label htmlFor='joke' className='label'>
          <span className='label-text'>Kirjoita vitsi, juttu tai tarina</span>
        </label> 
        <textarea
          id='joke'
          {...register('joke')}
          className='textarea textarea-bordered h-24 textarea-primary'
        ></textarea>
      </div>
      <FileInput setValue={setValue} />
      <div className='form-control'>
        <label htmlFor='email' className='label'>
          <span className='label-text'>Sähköposti</span>
        </label>
        <input 
          id='email'
          {...register('email')}
          type='text'
          className='input input-bordered input-primary'
        />
      </div>
      <div className='form-control'>
        <label htmlFor='guild' className='label'>
          <span className='label-text'>Kilta</span>
        </label>
        <input 
          id='guild'
          {...register('guild')}
          type='text'
          className='input input-bordered input-primary'
        />
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
