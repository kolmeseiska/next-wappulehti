'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const editions = [
  { year: 2026, key: 'y2026', imageSource: '/ponkeli26-og.webp' },
  { year: 2025, key: 'y2025', imageSource: '/historia-25.webp' },
  { year: 2024, key: 'y2024', imageSource: '/galleria-24.webp' },
  { year: 2023, key: 'y2023', imageSource: '/ponkelipromo23-5.webp' },
  { year: 2022, key: 'y2022', imageSource: '/ponkelijulkkari-1.jpg' },
  { year: 2021, key: 'y2021', imageSource: '/wappulehti-2021.jpg' },
] as const

const historia = () => {
  const t = useTranslations('pages.historia')

  return (
    <div className='container mx-auto px-4 justify-center py-16'>
      <h1 className='text-6xl font-extrabold pb-10 text-center'>{t('title')}</h1>
      <div className='prose mx-auto max-w-[75ch] flex flex-col gap-10'>
        <div>
          <h2 className='text-3xl font-extrabold mb-3'>
            {t('introTitle')}
          </h2>
          <p>
            {t.rich('introBody', { b: chunks => <b>{chunks}</b> })}
          </p>
        </div>
        {editions.map(edition => (
          <div key={edition.year} className='flex flex-col gap-3'>
            <h3 className='text-2xl font-extrabold my-2'>
              {edition.year} - {t(`editions.${edition.key}.title`)}
            </h3>
            {t.rich(`editions.${edition.key}.body`, {
              p1: chunks => <p>{chunks}</p>,
              p2: chunks => <p>{chunks}</p>,
              b: chunks => <b>{chunks}</b>
            })}
            <Image
              src={edition.imageSource}
              width={600}
              height={500}
              alt={`wappulehti-${edition.year}`}
              className='mx-auto'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default historia
