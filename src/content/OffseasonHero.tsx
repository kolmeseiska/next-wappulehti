'use client'

import Link from 'next/link'

import ColorWall from '@/components/ColorWall'
import DownCaretIcon from '@/components/DownCaretIcon'
import Logo from '@/components/Logo'

const OffseasonHero = () => {
  return (
    <div className='hero relative h-full'>
      <ColorWall />
      <div className='hero-content text-center text-slate-100 py-32'>
        <div className='max-w-md'>
          <h2 className='text-xl font-bold'>Turun Yliopiston<br />teekkareiden Wappulehti</h2>
          <h1 className='text-8xl font-bold uppercase mb-8 fill-slate-50'>
            <Logo className='h-48 max-w-full' />
          </h1>
          <h3 className='text-4xl font-bold mb-8'>
            Ilmoittaudu mukaan Pönkelin myyjäksi!
          </h3>
          <div className='motion-safe:animate-bounce'>
            <DownCaretIcon />
          </div>
          {/* <Link
            href='https://forms.gle/gL9HVsmReAeWwujK8'
            role='button'
            className='btn btn-primary mt-5 btn-outline bg-red-50'
            target='_blank'
            rel='noopener noreferrer'
          >
            Anna palautetta Pönkelistä 2023
          </Link> */}
          {/* <Link
            href={'/kisa'}
            role='button'
            className='btn btn-primary mt-5 btn-outline bg-red-50'
          >
            Osallistu kisaan!
          </Link> */}
          <Link
            href={'/myyjarekry'}
            role='button'
            className='btn btn-primary mt-5 btn-outline bg-red-50'
          >
            Myyjärekry!
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OffseasonHero
