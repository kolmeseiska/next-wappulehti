import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: `Pönkeli ${new Date().getFullYear()}`,
}

const Gallery = () => {
  return (
    <>
      <section id='info' className='my-5'>
        <div className='flex flex-row items-center gap-5'>
          <h2 className='font-bold text-8xl orientation-upright text-neutral'>INFO</h2>
          <div className='py-4 '>
            <h3 className='font-bold'>Tervetuloa galleriaan</h3>
            <p className='font-display max-w-[65ch] text-xl text-neutral-500'>
              Pönkeli - Turun yliopiston teekkareiden wappulehti.
              Pönkeli pyrkii aina innostamaan ja yhdistämään teekkareita tavallisia kuolevaisia. Tänä vuonna  wappulehti sai muodokseen taidenäyttelyn. Galleria Pönkeli on kaikille avoin näyttely, jonka teokset kuvastavat niin muinaista, kuin nykyistä teekkarikulttuuria sekä huumoria. Tule ja tutustu.
            </p>
            <p className='text-xl mt-10 font-semibold'>
              Hinta 8€ <br />
              taNperelaiset 10€ <br />
              Lehti toimii pääsylippuna näyttelyyn
            </p>
          </div>
        </div>
      </section>
      <section id='venue' className='full-width mb-5 mt-14 bg-neutral-content text-primary'>
        <div className='flex flex-row flex-wrap items-center gap-5 mx-auto'>
          <Image
            src='/venue-location.webp'
            alt='Venue-sijainti'
            className='object-cover -my-12 max-w-[650vw] flex-0'
            height={400}
            width={650}
          />
          <h2 className='font-bold text-8xl orientation-upright text-neutral flex-0'>VENUE</h2>
          <p className='text-xl mt-10 font-semibold whitespace-nowrap flex-1 pb-5'>
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
          <h2 className='font-bold text-8xl orientation-upright text-neutral'>AUKIOLOAJAT</h2>
          <div className='py-4'>
            <p className='text-xl mt-10 font-semibold'>
              Näyttely on avoinna 11.-29.4.<br />
              <br />
              Ma-Pe 15.00 - 19.00<br />
              La-Su 12.00 - 16.00<br />
              <br />
              Poikkeusaikataulut<br />
              Näyttely suljettu 23. & 25.4.<br />
              Pidätämme oikeudet muutoksiin
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
