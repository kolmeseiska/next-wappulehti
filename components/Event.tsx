import React from 'react'
import Image from 'next/image'

import { PonkeliEvent } from '../content/events'
import useToggle from '../src/hooks/useToggle'
import SimpleCollapse from './SimpleCollapse'

type Props = {
  event: PonkeliEvent,
  isPast?: boolean,
  width?: string
}

const Event = ({ event, isPast, width = 'w-96' }: Props) => {
  const [isOpen, { toggle }] = useToggle()

  const date = event.date ? new Intl.DateTimeFormat('FI-fi').format(new Date(event.date)) : null
  const details = [date, event.details].filter(Boolean).join(' - ')

  return (
    <button onClick={toggle} className='text-start'>
      <div className={`card ${width} ${isPast ? 'bg-gray-600' : 'bg-cyan-700'} text-primary-content text-lg leading-8`}>
        <figure className='h-44'>
          <Image
            src={event.image || '/ponkelitausta.png'}
            alt='Tapahtuman kuva'
            width={500}
            height={176}
            className='object-cover'
          />
        </figure>
        <div className={`card-body ${isPast ? 'text-gray-300' : 'text-slate-200'}`}>
          <h2 className='card-title relative'>
            <small className='absolute -top-6 text-gray-300'>{details}</small>
            <span className='font-bold text-2xl'>{event.name}</span>
          </h2>
          <SimpleCollapse isOpen={isOpen} wrapperClassName='flex flex-col gap-2'>
            {event.description}
          </SimpleCollapse>
        </div>
      </div>
    </button>
  )
}

export default Event
