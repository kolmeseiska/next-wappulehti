import React from 'react'

type File = {
  lastModified: number,
  name: string
}

type Props = {
  files: File[],
  onRemove(filename:string):void
}

const FilePreview = ({ files, onRemove }: Props) => {
  return (
    <div className='ml-3'>
      <ol>
        {files.map((f) => {
          return (
            <li key={f.lastModified} className='flex justify-end items-center text-end mt-2'>
              <div key={f.name} className='text-slate-400 mx-2'>
                {f.name}
              </div>
              <button 
                className='btn btn-ghost focus:outline-primary-focus focus:border-primary hover:border-primary text-slate-200 btn-xs'
                onClick={() => {
                  onRemove(f.name)
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-3 h-3'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18 18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default FilePreview
