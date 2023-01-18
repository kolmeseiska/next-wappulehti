import React from 'react'
import { supportedFileTypes } from '../src/participation'
import FilePreview from './FilePreview'
import SupportedFileTypeHint from './SupportedFileTypeHint'

type Props = {}

const acceptableMimes = supportedFileTypes.join(',')

const FileInput = (props: Props) => {
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text flex items-center gap-1'>
          Tiedosto/tiedostoja
          {' '}
          <SupportedFileTypeHint title={'Max 5 tiedostoa yhteensä 5MB.\n\nTuetut tiedostotyypit:\n'} types={supportedFileTypes} />
        </span>
      </label>
      <input
        type='file'
        name='uploadfile' 
        id='files'
        className='hidden'
        accept={acceptableMimes}
      />
      <label htmlFor='files'>
        <span
          role='button'
          className='input input-primary flex text-slate-400 hover:text-slate-200 items-center justify-center gap-2'
          tabIndex={0}
        >
          Lataa
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5' />
          </svg>
        </span>
      </label>
      <FilePreview
        onRemove={(e: React.MouseEvent<HTMLButtonElement>) => {
          console.log(e.target)
        }}
        files={[
          { lastModified: 1234, name: 'testi.pdf' }
        ]}
      />
    </div>
  )
}

export default FileInput
