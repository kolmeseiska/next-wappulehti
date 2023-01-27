import React, { ReactNode } from 'react'
import { FieldErrors, get, Path } from 'react-hook-form'

type LabelProps = {
  label:ReactNode,
  errors:FieldErrors,
  name:Path<string>
}

const Label = ({ label, name, errors }:LabelProps) => {
  const error = get(errors, (name as string))?.message
  return (
    <label
      htmlFor={(name as string)}
      className={`label ${error ? 'tooltip tooltip-error tooltip-left tooltip-open flex' : ''}`}
      data-tip={error}
    >
      <span className='label-text'>{label}</span>
    </label> 
  )
}
export default Label
