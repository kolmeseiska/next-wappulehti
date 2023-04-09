import Head from 'next/head'
import Link from 'next/link'

import ColorWall from '../components/ColorWall'
import Logo from '../components/Logo'

export default function Page() {
  return (
    <>
      <Head>
        <title>Wappulehti Pönkeli</title>
      </Head>
      <div className='hero relative h-full'>
        <ColorWall />
        <div className='hero-content text-center text-slate-100 py-32'>
          <div className='max-w-md'>
            <h2 className='text-xl font-bold'>Turun Yliopiston<br />teekkareiden Wappulehti</h2>
            <h1 className='text-8xl font-bold uppercase mb-8 fill-slate-50'>
              <Logo className='h-48 max-w-full' />
            </h1>
            <h3 className='text-4xl font-bold mb-8'>
              Pönkeli 2023
              <br />
              julkistustilaisuus 12.4.
            </h3>
            <Link 
              href='/tapahtumat'
              role='button'
              className='btn btn-primary'
            >
              Lisätietoja tapahtumasta
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
