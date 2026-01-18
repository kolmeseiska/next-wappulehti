'use client'

import Link from 'next/link'

import ColorWall from '@/components/ColorWall'
import DownCaretIcon from '@/components/DownCaretIcon'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'

const contentType: keyof typeof contents = 'sellers'

const contents = {
  recruitment: (
    <>
      <h3 className='text-4xl font-bold mb-8'>
        Hae mukaan Pönkelin toimitukseen!
      </h3>
      <div className='motion-safe:animate-bounce'>
        <DownCaretIcon />
      </div>
      <Link
        href={'/rekry'}
        role='button'
        className='btn btn-primary mt-5 btn-outline bg-red-50'
      >
        Rekry!
      </Link>
    </>
  ),
  sellers: (
    <>
      <h3 className='text-4xl font-bold mb-8'>
        Hae mukaan Pönkelin myyjäksi!
      </h3>
      <p className='text-xl italic mb-5'>
        Luvassa palkintoja sekä uniikkeja myyjätapahtumia.
      </p>
      <div className='motion-safe:animate-bounce'>
        <DownCaretIcon />
      </div>
      <Link
        href={'/myyjarekry'}
        role='button'
        className='btn btn-accent mt-5 btn-outline bg-red-50 text-xl'
      >
        Ilmoittaudu myyjäksi täältä!
      </Link>
    </>
  ),
  competition: (
    <>
      <h3 className='text-4xl font-bold mb-8'>
        Tervetuloa painamaan pönkeliä!
      </h3>
      <p className='text-xl italic mb-5'>
        Pönkelin vitsikilpailu on leikkimielinen vitsi- sekä juttukilpailu, josta sinä tai kiltasi voitte voittaa hienoja palkintoja sekä mainetta!
      </p>
      <div className='motion-safe:animate-bounce'>
        <DownCaretIcon />
      </div>
      <Link
        href={'/kisa'}
        role='button'
        className='btn btn-primary mt-5 btn-outline bg-red-50'
      >
        Osallistu kisaan tästä!
      </Link>
    </>
  ),
  feedback: (
    <>
      <h3 className='text-3xl font-bold mb-8'>
        Kiitos upeasta Wapusta sekä osallistumisesta Pönkelin toimintaan!
      </h3>
      <p className='text-xl italic mb-5'>
        Palaute on meille tärkeää, jotta voimme kehittää Pönkelin toimintaa entistä paremmaksi!
      </p>
      <div className='motion-safe:animate-bounce'>
        <DownCaretIcon />
      </div>
      <Link
        href='https://forms.gle/gL9HVsmReAeWwujK8'
        role='button'
        className='btn btn-primary mt-5 btn-outline bg-red-50'
        target='_blank'
        rel='noopener noreferrer'
      >
        Anna palautetta Pönkelistä 2025
      </Link>
    </>
  ),
  release: (
    <>
      <h2 className='text-4xl font-bold mb-8'>Pönkeli 2025 on saapunut!</h2>
      <p className='text-2xl font-semibold'>Vitsejä, vinkkejä sekä vinhoja tehtäviä lehden täydeltä!</p>
      <Button
        asChild
        size='lg'
        className='mt-5 btn-outline bg-orange-300 hover:bg-sky-500 text-slate-800 transition transition-colors'
      >
        <Link
          href={'/niksi'}
          role='button'
        >
          Lue lisää!
        </Link>
      </Button>
    </>
  )
}

const OffseasonHero = () => {
  return (
    <div className='hero relative h-full'>
      <ColorWall />
      <div className='hero-content text-center text-slate-100 py-32'>
        <div className='max-w-md'>
          <h2 className='text-xl font-bold'>Turun Yliopiston opiskelijoiden Wappulehti</h2>
          <h1 className='text-8xl font-bold uppercase mb-8 fill-slate-50'>
            <Logo className='h-48 max-w-full' />
          </h1>
          {contents[contentType] ?? <h3>Tervetuloa tutustumaan Pönkelin toimintaan. Tutki historiaa sekä osallistu toimintaan sivuiltamme!</h3>}
        </div>
      </div>
    </div>
  )
}

export default OffseasonHero
