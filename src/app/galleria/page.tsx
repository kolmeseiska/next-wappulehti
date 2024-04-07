import { Metadata } from 'next'

import History from '../(main)/historia/page'

export const metadata: Metadata = {
  title: `Pönkeli ${new Date().getFullYear()}`,
}

const Gallery = () => {
  return (
    <div className='bg-base-200'>
      <History />
    </div>
  )
}

export default Gallery
