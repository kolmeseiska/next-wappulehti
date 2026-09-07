import Image from 'next/image'
import { useLocale } from 'next-intl'

import SimpleCollapse from './SimpleCollapse'
import { PonkeliEvent, resolveLocalized } from '@/content/events'
import useToggle from '@/hooks/useToggle'

type Props = {
  event: PonkeliEvent,
  isPast?: boolean,
  width?: string
}

const Event = ({ event, isPast, width = 'w-96' }: Props) => {
  const [isOpen, { toggle }] = useToggle()
  const locale = useLocale()

  const date = event.date ? new Intl.DateTimeFormat(locale).format(new Date(event.date)) : null
  const place = event.details ? resolveLocalized(event.details, locale) : null
  const details = [date, place].filter(Boolean).join(' - ')
  const description = resolveLocalized(event.description, locale)

  return (
    <button
      onClick={toggle}
      className='text-start group transform transition duration-500 hover:scale-[101%]'
    >
      <div className={`card ${width} ${isPast ? 'bg-gray-600' : 'bg-cyan-700'} text-primary-content text-lg leading-8 overflow-hidden`}>
        <figure className='h-44 transform transition duration-500 group-hover:scale-110 group-hover:rotate-2'>
          <Image
            src={event.image || '/ponkelitausta.png'}
            alt='Tapahtuman kuva'
            width={500}
            height={176}
            className='object-cover'
            priority={!isPast}
          />
        </figure>
        <div className={`card-body ${isPast ? 'text-gray-300' : 'text-slate-200'}`}>
          <h2 className='card-title flex-col items-start gap-0'>
            <small className='text-gray-300'>{details}</small>
            <span className='font-bold text-2xl'>{event.name}</span>
          </h2>
          <SimpleCollapse isOpen={isOpen} wrapperClassName='flex flex-col gap-2'>
            {description}
          </SimpleCollapse>
        </div>
      </div>
    </button>
  )
}

export default Event
