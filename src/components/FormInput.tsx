import React from 'react'
import { FieldErrors, FieldValues, get, Path, UseFormRegister } from 'react-hook-form'

import Label from './Label'

export type FormInputProps<TFieldValues extends FieldValues> = {
  label: string,
  name: Path<TFieldValues>,
  errors: FieldErrors,
  register: UseFormRegister<TFieldValues>,
  placeholder?: string
}

const FormInput= <T extends FieldValues>({ label, name, errors, register, placeholder }: FormInputProps<T>) => {
  return (
    <div className='form-control'>
      <Label
        label={label}
        errors={errors}
        name={name}
      />
      <input 
        id={name}
        {...register(name)}
        type='text'
        className={`input input-bordered input-primary
          ${get(errors, name) ? 'input-error' : ''}`}
        placeholder={placeholder}
      />
    </div>
  )
}

export default FormInput
