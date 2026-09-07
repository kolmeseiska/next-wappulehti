import React from 'react'
import { useTranslations } from 'next-intl'

const NoUpcomingEvents = () => {
  const t = useTranslations('pages.noUpcomingEvents')

  return (
    <div className='prose mx-auto max-w-[75ch]'>
      <p>
        {t('paragraph1')}
      </p>
      <p>
        {t('paragraph2')}
      </p>
    </div>
    // Old fallback
    // <p className='text-center text-gray-500 mb-4'>
    // Psst.. Ota Pönkelin somet seurantaan sivun alalaidasta, niin saat tuoreimmat tiedot tapahtumista ja uutisista!
    // </p>
  )
}

export default NoUpcomingEvents
