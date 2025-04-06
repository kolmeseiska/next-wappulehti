import { ExternalLink } from './ExternalLink'
import Sales from './sales'

export const SaleSection = () => {
  return (
    <>
      <h2 className='text-3xl font-semibold text-[#032a39] mb-10 text-center'>Myyntiajat ja -paikat</h2>
      <div className='max-w-[75ch] mx-auto'>
        <div className='bg-[#FBE9DC] rounded-3xl p-8 flex flex-col items-center text-center'>
          <div className='w-16 h-16 bg-[#44ace2] rounded-full flex items-center justify-center mb-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='text-white'
            >
              <path d='M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z'></path>
            </svg>
          </div>
          <div className='text-[#032a39] text-pretty'>
            <h3 className='text-xl font-semibold text-[#032a39] mb-2'>Miten saan oman Pönkelin?</h3>
            <p className='mb-6'>
              Eikö vielä tullut Pönkeliä? Ei hätää! Pönkeliä myydään ympäri Turun keskustaa ja yliopiston kampuksilla koko <ExternalLink href='https://teekkariwappu.fi'>Turun teekkariwapun</ExternalLink> ajan.
            </p>
            <p className='mb-6'>
              Lehtiä löydät myös teekkarilakkipäisiltä Pönkelin <span className='highlight'>myyjiltä.</span>
            </p>
            <p className='mb-6'>
              Tänä vuonna Pönkeliä on myös mahdollista ostaa verkkokaupastamme. <ExternalLink href='https://holvi.com/shop/ponkeli/'>Siirry ostoksille.</ExternalLink>
            </p>
            <Sales />
          </div>
        </div>
      </div>
    </>
  )
}
