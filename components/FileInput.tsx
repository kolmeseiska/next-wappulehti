
import { useEffect } from 'react'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

import { supportedFileTypes } from '../src/participation'
import useFileDrop from '../src/useFileDrop'
import FilePreview from './FilePreview'
import SupportedFileTypeHint from './SupportedFileTypeHint'

const acceptableMimes = supportedFileTypes.join(',')

type Props = {
  setValue: UseFormSetValue<FieldValues>,
  isSubmitted: boolean,
  error?: { message: string}
}

const FileInput = ({ setValue, isSubmitted, error }: Props) => {
  const {
    data,
    fileDropProps,
    fileInputRef,
    actionsRef
  } = useFileDrop()
  
  useEffect(() => {
    setValue('files', data.files)
  }, [setValue, data.files])

  useEffect(() => {
    if(isSubmitted) {
      actionsRef.current.handleClearFiles()
    }
  }, [actionsRef, isSubmitted])

  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text flex items-center gap-1'>
          Tiedosto/tiedostoja
          {' '}
          <SupportedFileTypeHint title={'Max 5 tiedostoa yhteensä 5MB.\n\nTuetut tiedostotyypit:\n'} types={supportedFileTypes} />
        </span>
      </label>
      <div 
        {...fileDropProps}
      >
        <label
          htmlFor='files'
        >
          <input
            ref={fileInputRef}
            type='file'
            name='uploadfile' 
            id='files'
            accept={acceptableMimes}
            multiple
            onChange={actionsRef.current.handleSelectFile}
            tabIndex={-1}
            style={{
              border: 0,
              clip: 'rect(0, 0, 0, 0)',
              height: 1,
              overflow: 'hidden',
              padding: 0,
              position: 'absolute',
              whiteSpace: 'nowrap',
              width: 1,
            }}
          />
          <span
            role='button'
            className={`input input-primary flex text-slate-400 hover:text-slate-200 items-center justify-center gap-2
              ${data.inDropZone ? 'border-dashed bg-primary-' : ''}
              ${error ? 'input-error' : ''}`
            }
            tabIndex={0}
          >
            Lataa
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5' />
            </svg>
          </span>
        </label>
      </div>
      <FilePreview
        onRemove={filename => {
          actionsRef.current.handleRemoveFile(filename)
        }}
        files={data.files}
      />
    </div>
  )
}

export default FileInput
