
'use client'
import type { ReactNode } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import CardFormPage from '@/components/CardFormPage'
import SellerForm from '@/components/SellerForm'

const myyjarekry = () => {
  const t = useTranslations('pages.myyjarekry')
  const bold = { b: (chunks: ReactNode) => <b>{chunks}</b> }

  return (
    <div>
      <CardFormPage
        header={(
          <h1>{t('header')}</h1>
        )}
        side={(
          <>
            <h2 className='text-3xl'>{t('whyTitle')}</h2>
            <p className='mb-3'>
              {t.rich('whyBody1', bold)}
            </p>
            <p className='mb-3'>
              {t('whyBody2')}
            </p>
          </>
        )}
        form={(
          <SellerForm />
        )}
        details={(
          <>
            <h2 className='text-3xl'>
              {t('howTitle')}
            </h2>
            <p className='mb-3'>
              {t.rich('howBody1', bold)}
            </p>
            <p className='mb-3'>
              {t('howBody2')}
            </p>
            <p>{t.rich('vipBody1', bold)}</p>
            <p>{t('vipBody2')}</p>
            <h2>{t('scaredTitle')}</h2>
            <p className='mb-3'>
              {t('scaredBody')}
            </p>
            <Image
              src={'/ponkelijulkkarit40.webp'}
              alt='Julkkarit'
              width={900}
              height={600}
              objectFit='contain'
            />

          </>
        )}
      />
    </div>

  )
}

export default myyjarekry
