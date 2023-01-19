import Head from 'next/head'
import Link from 'next/link'

import Logo from '../components/Logo'

export default function Page() {
  return (
    <>
      <Head>
        <title>Wappulehti Pönkeli</title>
      </Head>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h2 className='text-xl font-bold'>Turun Yliopiston<br />teekkareiden Wappulehti</h2>
          <h1 className='text-8xl font-bold uppercase mb-8 fill-slate-50'>
            <Logo className='h-48 max-w-full' />
          </h1>
          <Link href='/kisa' role='button' className='btn btn-primary'>Osallistu Pölkyn Äärelle</Link>
        </div>
      </div>
    </>
  )
}
