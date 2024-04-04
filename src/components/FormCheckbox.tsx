import { FieldValues, get } from 'react-hook-form'

import { FormInputProps } from './FormInput'

const FormCheckbox= <T extends FieldValues>({ label, name, errors, register }: FormInputProps<T>) => {
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label cursor-pointer'>
        <span className='label-text'>{label}</span> 
        <input
          id={name}
          type='checkbox'
          {...register(name)}
          className={`checkbox checkbox-primary
            ${get(errors, name) ? 'checkbox-error' : ''} `}
        />
      </label>
    </div>
  )
}

export default FormCheckbox
