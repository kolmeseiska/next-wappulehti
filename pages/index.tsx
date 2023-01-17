import Head from 'next/head'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <Head>
        <title>Wappulehti Pönkeli</title>
      </Head>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h2 className='text-xl font-bold mb-2'>Turun Yliopiston<br />teekkareiden Wappulehti</h2>
          <h1 className='text-7xl font-bold uppercase mb-6'>Pönkeli</h1>
          <Link href='/kisa' role='button' className='btn btn-primary'>Osallistu Pölkyn Äärelle</Link>
        </div>
      </div>
    </>
  )
}
