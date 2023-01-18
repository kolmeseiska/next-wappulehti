import React from 'react'
import FileInput from './FileInput'

const Form = () => {
  return (
    <>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>Kirjoita vitsi, juttu tai tarina</span>
        </label> 
        <textarea className='textarea textarea-bordered h-24 textarea-primary'></textarea>
      </div>
      <FileInput />
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>Sähköposti</span>
        </label>
        <input type='text' className='input input-bordered input-primary' />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>Kilta</span>
        </label>
        <select name='guild' className='select select-primary w-full max-w-xs'>
          <option hidden value=''>Valitse</option>
          <option value='Adamas'>Adamas</option>
          <option value='Digit'>Digit</option>
          <option value='Machina'>Machina</option>
          <option value='Nucleus'>Nucleus</option>
          <option value='Muu'>Muu</option>
        </select>
      </div>
      <div className='form-control mt-6'>
        <button className='btn btn-primary'>Lähetä</button>
      </div>
    </>
  )
}

export default Form
