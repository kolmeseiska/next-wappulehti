'use client'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const info = () => {
  const t = useTranslations('pages.myyjainfo')

  return (
    <div className='container mx-auto px-4 justify-center py-16'>
      <h1 className='text-6xl font-extrabold pb-10 text-center'>{t('title')}</h1>
      <div className='prose mx-auto'>
        <h2 className='text-3xl font-extrabold'>
          {t('thanksTitle')}
        </h2>
        <p>
          {t.rich('feedbackIntro', {
            link: chunks => (
              <Link
                href='https://forms.gle/35SUnd6F3DHzkdGt6'
                target='_blank'
                rel='noopener noreferrer'
              >
                {chunks}
              </Link>
            )
          })}
          <br />
          {t('wantedAgain')}
        </p>
        <p>
        </p>
      </div>
    </div>
  )
}

export default info
