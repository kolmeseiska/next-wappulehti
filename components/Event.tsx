import React from 'react'
import Image from 'next/image'

import { PonkeliEvent } from '../content/events'

type Props = {
  event: PonkeliEvent,
  isPast?: boolean,
  width?: string
}

const Event = ({ event, isPast, width = 'w-96' }: Props) => {
  return (
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
      <div className={`card-body ${isPast ? 'text-gray-400' : 'text-slate-200'}`}>
        <h2 className='card-title font-bold text-2xl'>{event.name}</h2>
        {event.description}
      </div>
    </div>
  )
}

export default Event
