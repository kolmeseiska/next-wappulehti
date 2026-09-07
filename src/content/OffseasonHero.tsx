'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

import ColorWall from '@/components/ColorWall'
import DownCaretIcon from '@/components/DownCaretIcon'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'

const contentType: keyof ReturnType<typeof useContents> = 'release'

const useContents = () => {
  const t = useTranslations('home')

  return {
    recruitment: (
      <>
        <h3 className='text-4xl font-bold mb-8'>
          {t('recruitment.title')}
        </h3>
        <div className='motion-safe:animate-bounce'>
          <DownCaretIcon />
        </div>
        <Link
          href={'/rekry'}
          role='button'
          className='btn btn-primary mt-5 btn-outline bg-red-50'
        >
          {t('recruitment.cta')}
        </Link>
      </>
    ),
    sellers: (
      <>
        <h3 className='text-4xl font-bold mb-8'>
          {t('sellers.title')}
        </h3>
        <p className='text-xl italic mb-5'>
          {t('sellers.subtitle')}
        </p>
        <div className='motion-safe:animate-bounce'>
          <DownCaretIcon />
        </div>
        <Link
          href={'/myyjarekry'}
          role='button'
          className='btn btn-accent mt-5 btn-outline bg-red-50 text-xl'
        >
          {t('sellers.cta')}
        </Link>
      </>
    ),
    competition: (
      <>
        <h3 className='text-4xl font-bold mb-8'>
          {t('competition.title')}
        </h3>
        <p className='text-xl italic mb-5'>
          {t('competition.subtitle')}
        </p>
        <div className='motion-safe:animate-bounce'>
          <DownCaretIcon />
        </div>
        <Link
          href={'/kisa'}
          role='button'
          className='btn btn-primary mt-5 btn-outline bg-red-50'
        >
          {t('competition.cta')}
        </Link>
      </>
    ),
    feedback: (
      <>
        <h3 className='text-3xl font-bold mb-8'>
          {t('feedback.title')}
        </h3>
        <p className='text-xl italic mb-5'>
          {t('feedback.subtitle')}
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
          {t('feedback.cta')}
        </Link>
      </>
    ),
    release: (
      <>
        <h2 className='text-4xl font-bold mb-8'>{t('release.title')}</h2>
        <p className='text-2xl font-semibold'>{t('release.subtitle')}</p>
        <Button
          asChild
          size='lg'
          className='mt-5 btn-outline bg-orange-300 hover:bg-sky-500 text-slate-800 transition transition-colors'
        >
          <Link
            href={'/sportti'}
            role='button'
          >
            {t('release.cta')}
          </Link>
        </Button>
      </>
    )
  }
}

const OffseasonHero = () => {
  const t = useTranslations('home')
  const contents = useContents()

  return (
    <div className='hero relative h-full'>
      <ColorWall />
      <div className='hero-content text-center text-slate-100 py-32'>
        <div className='max-w-md'>
          <h2 className='text-xl font-bold'>{t('eyebrow')}</h2>
          <h1 className='text-8xl font-bold uppercase mb-8 fill-slate-50'>
            <Logo className='h-48 max-w-full' />
          </h1>
          <h3>{t('intro')}</h3>
          { /* contents[contentType] ?? <h3>{t('intro')}</h3> */ }
        </div>
      </div>
    </div>
  )
}

export default OffseasonHero
