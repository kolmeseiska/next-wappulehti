'use client'
import Image from 'next/image'
import Link from 'next/link'

import HeroImage from './hero24.webp'

const ReleaseInfo = () => {
  return (
    <div className='hero relative h-svh bg-accent text-primary text-center'>
      <Image
        src={HeroImage}
        alt='hero'
        className='absolute opacity-70 object h-full
        object-cover
        '
        priority
        sizes='100vw'
        placeholder='blur'
      />
      <div className='relative p-6 text-secondary rounded-md z-0 mx-5 overflow-hidden'>
        <div className='bg-neutral absolute inset-0 opacity-80' />
        <Link href='/galleria' className='cursor-pointer relative'>
          <h1 className='font-display text-5xl'>Pönkeli 2024 on julkaistu!</h1>
          <p className='text-lg pt-5'>
            Astu sisään Galleriaan
          </p>
        </Link>
      </div>
    </div>
  )
}

export default ReleaseInfo
