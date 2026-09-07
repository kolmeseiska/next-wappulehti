'use client'

import { useTranslations } from 'next-intl'

import RecruitmentForm from '@/components/RecruitmentForm'

const page = () => {
  const t = useTranslations('pages.rekry')
  const lookingFor = t.raw('lookingFor') as string[]

  return (
    <div className='container mx-auto px-4 justify-center py-16 max-w-3xl'>
      <h1 className='text-6xl font-extrabold pb-10 text-center'>
        {t('title')}
      </h1>
      <div className='prose mx-auto'>
        <p>
          {t('paragraph1')}
        </p>
        <p>
          {t('paragraph2')}
        </p>
        <p>{t('lookingForIntro')}</p>
        <ul>
          {lookingFor.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          {t('deadline')}
        </p>
      </div>
      <div className='card shadow-2xl w-full max-w-md bg-base-100 mx-auto my-5'>
        <div className='card-body'>
          <p className='text-xl'><b>{t('formTitle')}</b></p>
          <RecruitmentForm />
        </div>
      </div>
    </div>
  )
}

export default page
