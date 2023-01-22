import React from 'react'
import Image from 'next/image'

import { PonkeliEvent } from '../content/events'

type Props = {
  event: PonkeliEvent
}

const Event = ({ event }: Props) => {
  return (
    <div className='card w-96 bg-blue-900 text-primary-content text-lg leading-8'>
      <figure className='h-44'>
        <Image
          src={event.image || '/ponkelitausta.png'}
          alt='Tapahtuman kuva'
          width={500}
          height={176}
          className='object-cover'
        />
      </figure>
      <div className='card-body text-slate-200'>
        <h2 className='card-title'>{event.name}</h2>
        {event.description}
      </div>
    </div>
  )
}

export default Event
