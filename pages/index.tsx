import Head from 'next/head'
import Link from 'next/link'

import Logo from '../components/Logo'

export default function Page() {
  return (
    <>
      <Head>
        <title>Wappulehti Pönkeli</title>
      </Head>
      <svg className='w-full h-full absolute'>
        <defs>
          <linearGradient id='logo-gradient' x1='50%' y1='0%' x2='50%' y2='100%'>
            <stop offset='0%' stopColor='#B2A4FF'>
              <animate
                attributeName='stop-color'
                values='#B2A4FF;#FFB4B4;#B2A4FF;#f2b880;#FFDEB4;#DBF9F4;#B2A4FF'
                dur='10s'
                repeatCount='indefinite'
              ></animate>
            </stop>
            <stop offset='100%' stopColor='#A85751'>
              <animate
                attributeName='stop-color'
                values='#A85751;#A85751;#B2A4FF;#DBF9F4;#f2b880;#FFB4B4;#FFDEB4;#A85751'
                dur='10s'
                repeatCount='indefinite'
              ></animate>
            </stop>
          </linearGradient>
        </defs>
        <g>
          <rect
            x='0'
            y='0'
            width='100%'
            height='100%' 
            fill="url('#logo-gradient')"
          />
        </g>
      </svg>
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
