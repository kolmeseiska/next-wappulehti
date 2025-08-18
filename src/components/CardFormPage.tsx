import { ReactNode } from 'react'

type Props = {
  header: ReactNode,
  side: ReactNode,
  form: ReactNode,
  details: ReactNode
}

const CardFormPage = ({ header, side, form, details }: Props) => {
  return (
    <div className='py-16 max-w-5xl mx-auto'>
      <div className='prose text-center mx-auto mb-10'>
        {header}
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mb-20'>
        <article className='prose prose-ponkeli pb-10 px-5 md:px-5 '>
          {side}
        </article>
        <div className='card shadow-2xl w-full max-w-md bg-base-100 mx-5 md:mx-5'>
          <div className='card-body'>
            {form}
          </div>
        </div>
      </div>
      <article className='prose max-w-full mx-auto pb-10 px-5 md:px-5'>
        {details}
      </article>
    </div>
  )
}

export default CardFormPage
