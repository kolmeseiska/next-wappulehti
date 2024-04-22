import { Metadata } from 'next'
import Image from 'next/image'

import OpeningTimes from '@/gallery/OpeningTimes'

export const metadata: Metadata = {
  title: `Pönkeli ${new Date().getFullYear()}`,
  // TODO: ADD METADATA!
}

export const revalidate = 3600

const Gallery = () => {
  return (
    <>
      <section id='info' className='my-5'>
        <div className='flex flex-row items-center gap-5'>
          <h2 className='font-bold text-4xl sm:text-8xl orientation-upright text-neutral'>INFO</h2>
          <div className='py-4 '>
            <h3 className='font-bold uppercase pb-1'>Tervetuloa galleriaan</h3>
            <p className='font-display max-w-[65ch] text-xl text-neutral-500 highlight-text leading-9'>
              Turun Yliopiston teekkareiden wappulehti <span className='highlight'>Pönkeli</span> julkaistiin 10.4.2024 Kårenilla juhlavin menoin. Tämän vuoden lehdeksi paljastui tekniikan osaajien taiteellista puolta korostava taidenäyttely ja lehti teekkariuden ja taiteen kohtaamisesta. Näyttely pidetään <span className='highlight'>Taiteen talolla</span> teekkariwapun aikana <span className='highlight'>11.4-29.4.</span> Galleria Pönkeli on kaikille avoin kokemus iästä riippumatta, jossa teokset kuvastavat niin muinaista kuin nykyistä <span className='highlight'>teekkaritiedettä ja -taidetta</span>. Oman lehtesi saat teekkarilakkipäisiltä Pönkelin <span className='highlight'>myyjiltä</span>, tai saapumalla Taiteen talolle. Lehti toimii lippuna taidenäyttelyyn. Tule ja naura!
            </p>
            <p className='text-xl mt-10 font-semibold'>
              Hinta 8€ <br />
              taNperelaiset 10€
            </p>
          </div>
        </div>
      </section>
      <section id='venue' className='full-width mb-5 mt-14 bg-neutral-content text-primary'>
        <div className='flex flex-row flex-wrap items-center gap-5 mx-auto'>
          <Image
            src='/venue-location.webp'
            alt='Venue-sijainti'
            className='object-cover -mt-12 max-w-full flex-0'
            height={400}
            width={650}
          />
          <h2 className='font-bold text-4xl sm:text-8xl orientation-upright text-neutral flex-0'>VENUE</h2>
          <p className='text-xl font-semibold whitespace-nowrap flex-1 py-10'>
            <span className='text-4xl font-bold'>Taiteen Talo</span> <br /><br />
            Nunnankatu 4, 20500 Turku <br />
            <small>
              Rettigin tupakkatehtaan sisäpiha
            </small>
          </p>
        </div>
      </section>
      <section id='aukioloajat' className=' my-5'>
        <div className='flex flex-row items-center gap-5'>
          <h2 className='font-bold text-4xl sm:text-8xl orientation-upright text-neutral'>AUKIOLOAJAT</h2>
          <div className='py-4'>
            <p className='text-xl mt-10 font-semibold'>
              Gallerian auki olemisen tunnistat avoimesta ovesta ja kutsuvasta kyltistä.<br />
              <br />
              Galleria on avoinna 11.4.-1.5.<br />
            </p>
            <OpeningTimes />
            <i>Pidätämme oikeudet muutoksiin</i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
