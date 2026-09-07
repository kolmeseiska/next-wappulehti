'use client'

import { useTranslations } from 'next-intl'

import Event from '@/components/Event'
import NoUpcomingEvents from '@/components/NoUpcomingEvents'
import events, { PonkeliEvent } from '@/content/events'

const tapahtumat = () => {
  const t = useTranslations('pages.tapahtumat')
  const currentEvent: PonkeliEvent[] = []
  const upcomingEvents: PonkeliEvent[] = []
  const pastEvents: PonkeliEvent[] = []

  const currentISODate = new Date().toISOString().slice(0, 10)

  for(const event of events) {
    if(event.date && event.date < currentISODate) {
      pastEvents.push(event)
    } else if(event.date && event.date > currentISODate) {
      upcomingEvents.push(event)
    } else {
      currentEvent.push(event)
    }
  }

  return (
    <div className='container mx-auto px-4 justify-center py-16'>
      <h1 className='text-6xl font-extrabold pb-10 text-center'>{t('title')}</h1>
      {currentEvent.length
        ? (
          <>
            <h1 className='text-2xl font-extrabold pb-10 text-center'>{t('today')}</h1>
            <div className='flex gap-4 items-start flex-wrap justify-center pb-10'>
              {currentEvent.map(event => (
                <Event key={`${event.name}-${event.date}`} event={event} />
              ))}
            </div>
          </>
        )
        : upcomingEvents.length
          ? null
          : <NoUpcomingEvents />}
      <div className='flex gap-4 items-start flex-wrap justify-center'>
        {upcomingEvents.map(event => (
          <Event key={`${event.name}-${event.date}`} event={event} width='max-w-[500px]' />
        ))}
      </div>
      <div className='py-10'>
        <h1 className='text-6xl font-extrabold pb-10 text-center'>{t('pastEvents')}</h1>
        <div className='flex gap-4 items-start flex-wrap justify-center'>
          {pastEvents.reverse().map(event => (
            <Event key={`${event.name}-${event.date}`} event={event} isPast />
          ))}
        </div>
      </div>
    </div>
  )
}

export default tapahtumat
