'use client'
import Link from 'next/link'

import ColorWall from '../components/ColorWall'
import Logo23 from '../components/Logo23'
import Sales from './Sales'

const ReleaseInfo = () => {
  return (
    <div>
      <div className='hero relative min-h-[94vh]'>
        <ColorWall dark />
        <div className='hero-content text-center text-slate-100 py-32'>
          <div className='max-w-md'>
            <span className='text-8xl font-bold uppercase mb-8 fill-slate-50'>
              <Logo23 />
            </span>
            <Link
              href='#lehti'
              role='button'
              className='btn btn-ghost border-4 border-stone-800'
            >
              Aloita seikkailu
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                viewBox='0 0 24 24'
                className='w-6 h-6'
              >
                <path stroke='none' d='M0 0h24v24H0z' />
                <path d='M20 4v5l-9 7-4 4-3-3 4-4 7-9zM6.5 11.5l6 6' />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div id='lehti' className='py-16'>
        <article className='prose prose-xl mx-auto px-5 md:px-5 my-5 text-slate-200'>
          <h1>Pönkeli 2023 on julkaistu!</h1>
          <p>Hyppää lohikäärmeen selkään, selviä petollisista Jalluränneistä sekä heitä itsesi mukaan turkulaiseen teekkariwappuun.</p>
        </article>
        <article className='prose prose-xl mx-auto pb-10 pt-1 px-5 md:px-5 mb-5 mt-10 text-slate-200 bg-[#8c0303]'>
          <Sales />
        </article>
      </div>
    </div>
  )
}

export default ReleaseInfo
