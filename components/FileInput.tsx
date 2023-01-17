import React from 'react'
import FilePreview from './FilePreview'

type Props = {}

const FileInput = (props: Props) => {
  return (
    <div className='form-control'>
      <label className='label border-primary-focus'>
        <span className='label-text'>Tiedosto</span>
      </label>
      <input type='file' name='uploadfile' id='attachment' className='hidden' />
      <label htmlFor='attachment' className='input-group'>
        <span className='input-primary' tabIndex={0}>
          Lataa
        </span>
        <div className='input input-primary w-full max-w-xs focus'  />
      </label>
      <label className='label'>
        <span className='label-text-alt'>Max 5 tiedostoa. 2 MB/tiedosto </span>
      </label>
      <FilePreview
        onRemove={(e: React.MouseEvent<HTMLButtonElement>) => {
          console.log(e.target)
        }}
        files={[
          { lastModified: 1234, name: 'testi.pdf' }
        ]} />
    </div>
  )
}

export default FileInput
