import { ReactNode } from 'react'

type Props = {
  header: ReactNode,
  side: ReactNode,
  form: ReactNode,
  details: ReactNode
}

const CardFormPage = ({ header, side, form, details }:Props) => {
  return (
    <div className='py-16'>
      <div className='prose prose-xl text-center mx-auto mb-10'>
        {header}
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mb-20'>
        <div className='max-w-md'>
          <article className='prose prose-invert prose-xl prose-ponkeli pb-10 px-5 md:px-5 '>
            {side}
          </article>
        </div>
        <div className='card w-full max-w-md shadow-2xl bg-base-100 mx-5 md:mx-5'>
          <div className='card-body'>
            {form}
          </div>
        </div>
      </div>
      <div>
        <article className='prose prose-xl mx-auto pb-10 px-5 md:px-5'>
          {details}
        </article>
      </div>
    </div>
  )
}

export default CardFormPage
