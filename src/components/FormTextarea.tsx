import React from 'react'
import { FieldValues, get } from 'react-hook-form'

import { FormInputProps } from './FormInput'
import Label from './Label'

const FormTextarea = <T extends FieldValues>({ label, name, errors, register, placeholder }: FormInputProps<T>) => {
  return (
    <div className='form-control'>
      <Label
        label={label}
        errors={errors}
        name={name}
      />
      <textarea
        id={name}
        {...register(name)}
        className={`textarea textarea-bordered h-24 focus-within:textarea-accent
          ${get(errors, name) ? 'textarea-error' : ''}`}
        placeholder={placeholder}
      />
    </div>
  )
}

export default FormTextarea
