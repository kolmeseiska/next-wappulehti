
'use client'
import type { ReactNode } from 'react'
import { useTranslations } from 'next-intl'

import CardFormPage from '@/components/CardFormPage'
import ParticipationForm from '@/components/ParticipationForm'

const Kisa = () => {
  const t = useTranslations('pages.kisa')
  const bold = { b: (chunks: ReactNode) => <b>{chunks}</b> }
  const categories = t.raw('categories') as string[]
  const judgingCategories = t.raw('rules.judgingCategories') as string[]

  return (
    <CardFormPage
      header={(
        <>
          <h1>{t('title')}</h1>
          <p className='max-w-md mx-auto font-semibold'>
            {t.rich('headerNote', { br: () => <br /> })}
          </p>
        </>
      )}
      side={(
        <>
          <h2 className='text-3xl'>{t('sideTitle')}</h2>
          <p>
            {t.rich('sideBody1', bold)}
          </p>
          <div className='my-3'>
            <b>{t('categoriesTitle')}</b>
            <ul className='font-bold'>
              {categories.map(category => (
                <li key={category}><b>{category}</b></li>
              ))}
            </ul>
          </div>
          <p>{t('categoriesNote')}</p>
          <p>
            {t('sideBody2')}
          </p>
          <p>
            {t('sideBody3')}
          </p>
        </>
      )}
      form={<ParticipationForm />}
      details={(
        <>
          <h2>
            {t('rulesTitle')}
          </h2>
          <ul>
            <li>
              {t.rich('rules.deadline', bold)}
            </li>
            <li>
              {t('rules.howToParticipate')}
            </li>
            <li>
              {t('rules.beNice')}
            </li>
            <li>
              {t('rules.usageRights')}
            </li>
            <li>
              {t('rules.judging')}
            </li>
            <ul>
              {judgingCategories.map(category => (
                <li key={category}>{category}</li>
              ))}
            </ul>
            <li>
              {t('rules.prizeGiving')}
            </li>
            <li>
              {t('rules.fuksiPoint')}
            </li>
            <li>
              {t('rules.contactInfo')}
            </li>
          </ul>
        </>
      )}
    />
  )
}

export default Kisa
