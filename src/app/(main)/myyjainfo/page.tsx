'use client'
import Link from 'next/link'

const info = () => {
  return (
    <div className='container mx-auto px-4 justify-center py-16'>
      <h1 className='text-6xl font-extrabold pb-10 text-center'>Myyjät</h1>
      <div className='prose prose-xl mx-auto'>
        <h2 className='text-3xl font-extrabold'>
          Kiitos kaikille kevään 2023 Pönkeli-myyjille!
        </h2>
        <p>
          Voit vielä jättää palautetta myyjänä toimimisesta
          {' '}
          <Link
            href='https://forms.gle/35SUnd6F3DHzkdGt6'
            target='_blank'
            rel='noopener noreferrer'
          >
            täällä.
          </Link>
          <br />
          Pönkeli hakee reippaita myyjiä taas keväällä!
        </p>
        <p>
        </p>
      </div>
    </div>
  )
}

export default info
