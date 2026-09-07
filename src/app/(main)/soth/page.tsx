import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

export default async function SwordOfTheHorses() {
  const t = await getTranslations('pages.soth')

  return (
    <div className='hero min-h-screen bg-base-200 relative'>
      <Image
        src='/horses-and-a-sword.webp'
        alt='hevoset ja miekka'
        fill
        className='max-w-full h-auto object-cover object-top'
      />
      <div className='hero-content text-center'>
        <div className='max-w-md bg-yellow-950 rounded-md p-5'>
          <p className='pb-7 text-xl text-zinc-400'>
            {t('message1')}
            {' '}
            <svg
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6 inline-block'
            >
              <path d='M20 8v8l-3 1-3.09-5.5c-.26-.46-.99-.23-.91.31L14 21 4 17l1.15-8.06A6.923 6.923 0 0112 3h8l-1.58 2.37C19.36 5.88 20 6.86 20 8z' />
            </svg>
          </p>
          <p>
            {t('message2')}
          </p>
        </div>
      </div>
    </div>
  )
}
