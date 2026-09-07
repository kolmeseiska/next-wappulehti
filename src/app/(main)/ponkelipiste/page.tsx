'use client'

import type { ReactNode } from 'react'
import { useTranslations } from 'next-intl'

const page = () => {
  const t = useTranslations('pages.ponkelipiste')
  const bold = { b: (chunks: ReactNode) => <b>{chunks}</b> }

  return (
    <div className='container mx-auto px-4 justify-center py-16 max-w-[75ch]'>
      <h1 className='text-6xl font-extrabold pb-10 text-center'>
        {t('title')}
      </h1>
      <div className='prose mx-auto space-y-5'>
        <p>
          {t('paragraph1')}
        </p>
        <p>
          {t('paragraph2')}
        </p>
        <p>
          {t.rich('paragraph3', bold)}
        </p>
        <p>
          {t('paragraph4')}
        </p>
        <p>
          {t('paragraph5')}
        </p>
      </div>
    </div>
  )
}

export default page
