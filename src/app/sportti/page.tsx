import { ShoppingBasket } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ExternalLink from './_parts/ExternalLink'
import { SaleSection } from './_parts/sale-section'
import { Button } from '@/components/ui/button'
import { Social } from './_parts/social'
import Footer from './_parts/footer'

export default function Sportti() {
  return (
    <div className='sportti-hero-mobile min-h-[45rem] bg-[#000000] bg-[url(/ponkeli26-hero.webp)] bg-full bg-no-repeat bg-mobile md:bg-top'>
      <header className='container mx-auto py-6 px-4'>
        <nav className='flex flex-col md:flex-row gap-4 items-center justify-between'>
          <div className='text-[#d4b2a7] font-semibold text-xl'>
            <Link href='/sportti'>
              PÖNKELI 2026
            </Link>
          </div>
          <div className='flex gap-2 md:gap-4 flex-wrap items-center'>
              <Link href='#lehti' className='text-[#f8f8f8] hover:text-[#44ace2] transition-colors'>
              Tutustu Lehteen
            </Link>
            <Link href='#osta' className='text-[#f8f8f8] hover:text-[#44ace2] transition-colors'>
              Myyntiajat
            </Link>
            <Button asChild className='bg-[#44ace2] hover:bg-amber-400 text-primary hover:text-[#032a39]' size='sm'>
              <Link href='https://holvi.com/shop/ponkeli/'>
                <ShoppingBasket />
                Verkkokauppa
              </Link>
            </Button>
          </div>
          <div></div>
        </nav>
      </header>
      <section className=''>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-center gap-3'>
          <div className='text-center space-y-6 flex-1'>
            <div className='text-[#f8f8f8] max-w-sm mx-auto bg-[#000000] bg-opacity-90 rounded-lg p-6'>
              <h1 className='text-3xl md:text-5xl lg:text-5xl font-bold mb-8'>Pönkeli 2026<br />on saapunut!</h1>
              <p className='text-lg font-semibold mb-3'>
                Osta Sportti-Pönkeli ja hyppää syvälle vauhdikkaan huumorin maailmaan! Lehden mukana tulee upeat urheilulliset Pönkeli-aurinkolasit, jotta jokainen suorituksesi onnistuu.
              </p>
              <p className='text-md'>
                Tänä vuonna Pönkeliä on myös mahdollista ostaa verkkokaupastamme. <ExternalLink href='https://holvi.com/shop/ponkeli/'>Siirry ostoksille.</ExternalLink>
              </p>
            </div>
          </div>
          <div className='relative basis-1/3'>
            <Image
              src='/ponkeli26-kansi1.webp'
              alt='wappulehden kansi'
              height={1080}
              width={753}
              className='object-contain mx-auto w-auto rounded-lg bg-blue-400'
            />
          </div>
        </div>
      </section>
      <section className='container mx-auto mt-8 pt-8 py-16 px-4 bg-[#000000] bg-opacity-90 rounded-lg p-6' id='lehti'>   
        <h2 className='text-3xl font-semibold text-[#f8f8f8] mb-4 text-center'>Tutustu Lehteen</h2>
        <p className='text-[#f8f8f8] max-w-xl mx-auto mb-8 text-center'>
          Muun muassa näitä juttuja pääset lukemaan lehden sivuilta. Lisäksi mukana paljon tuoreita vitsejä sekä upeaa grafiikkaa!
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow'>
            <div className='relative mb-4 rounded-xl overflow-hidden flex items-center justify-center'>
              <Image
                src='/ponkeli26-lasit.webp'
                alt='Lehtijuttu aurinkolasit'
                width={400}
                height={240}
                className='w-full h-auto object-contain'
              />
            </div>
            <div className='space-y-2'>
              <span className='text-[#44ace2] text-sm font-medium'>URHEILU</span>
              <h3 className='text-xl font-semibold text-[#032a39]'>Aurinkolasit nopeaan menoon</h3>
              <p className='text-[#032a39] opacity-80'>
                Tutustu lehden mukana tulevien urheilullisten aurinkolasien ominaisuuksiin.
              </p>
            </div>
          </div>
          <div className='bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow'>
            <div className='relative h-60 mb-4 rounded-xl overflow-hidden'>
              <Image
                src='/ponkeli26-laskettelu.webp'
                alt='lehtijuttu laskettelu'
                fill
                className='object-cover'
              />
            </div>
            <div className='space-y-2'>
              <span className='text-[#44ace2] text-sm font-medium'>ANALYYSIT</span>
              <h3 className='text-xl font-semibold text-[#032a39]'>Laskimmekohan oikein?</h3>
              <p className='text-[#032a39] opacity-80'>
                Lukuisia analyyseja eri urheilulajien mielekkyydestä suhteutettuna opiskelijaelämään.
              </p>
            </div>
          </div>
          <div className='bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow'>
            <div className='relative h-60 mb-4 rounded-xl overflow-hidden'>
              <Image
                src='/ponkeli26-kyykka.webp'
                alt='lehtijuttu kyykkaruusu'
                fill
                className='object-cover object-left'
              />
            </div>
            <div className='space-y-2'>
              <span className='text-[#44ace2] text-sm font-medium'>LAJIKOKEILUT</span>
              <h3 className='text-xl font-semibold text-[#032a39]'>Vinkkejä uusiin urheilulajeihin</h3>
              <p className='text-[#032a39] opacity-80'>
                Oletko kyllästynyt vanhoihin perinteiseen urheiluun?? Kokeile näitä uusia ja jännittäviä lajeja!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='sportti-hero-mobile bg-[url(/ponkeli26-blob.webp)] bg-full bg-no-repeat bg-position- bg-center' id='osta'>
        <div className='container mx-auto py-16 px-4 mb-20'>
          <SaleSection />
        </div>
      </section>
      <section className='bg-[#44ace2] bg-opacity-10 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-xl md:text-3xl font-semibold text-[#f8f8f8] mb-4'>Hauskaa ja huumorintäyteistä Wappua kaikille!</h2>
          <p className='text-[#f8f8f8] max-w-xl mx-auto mb-8'>
            Seuraa meitä somessa ja tule tervehtimään myyntipisteelle!
          </p>
          <div className='mx-auto'>
            <Social />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}