import { ShoppingBasket } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ExternalLink } from './_parts/ExternalLink'
import Footer from './_parts/footer'
import { SaleSection } from './_parts/sale-section'
import { Social } from './_parts/social'
import { Button } from '@/components/ui/button'

export default function NiksiPage() {
  return (
    <div className='min-h-[45rem] bg-[#f8f5f2] bg-[url(/ponkeli25-hero.webp)] bg-full bg-no-repeat bg-mobile md:bg-top'>
      <header className='container mx-auto py-6 px-4'>
        <nav className='flex flex-col md:flex-row gap-4 items-center justify-between'>
          <div className='text-[#e8a736] font-semibold text-xl'>
            <Link href='/niksi'>
              PÖNKELI 2025
            </Link>
          </div>
          <div className='flex gap-2 md:gap-4 flex-wrap items-center'>
            <Link href='#lehti' className='text-[#032a39] hover:text-[#44ace2] transition-colors'>
              Tutustu Lehteen
            </Link>
            <Link href='#osta' className='text-[#032a39] hover:text-[#44ace2] transition-colors'>
              Myyntiajat
            </Link>
            <Button asChild className='bg-[#44ace2] hover:bg-amber-400 text-primary hover:text-primary-content' size='sm'>
              <Link href='/'>
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
            <div className='text-[#032a39] max-w-sm mx-auto'>
              <h1 className='text-3xl md:text-5xl lg:text-5xl font-bold mb-8'>Pönkeli 2025<br />on saapunut!</h1>
              <p className='text-lg font-semibold mb-3'>
                Osta Pönkeli 2025 ja uppoudu syvälle puhtaan sekä kuivan huumorin maailmaan! Lehden mukana tulee monikäyttöinen pyyhe sekä yksi kuudesta eri tuoksuisesta saippuasta.
              </p>
              <p className='text-md'>
                Tänä vuonna Pönkeliä on myös mahdollista ostaa verkkokaupastamme. <ExternalLink href='https://kolmeseiska.holvi.fi/ponkeli25'>Siirry ostoksille.</ExternalLink>
              </p>
            </div>
          </div>
          <div className='relative basis-1/3'>
            <Image
              src='/ponkeli25-kansi.webp'
              alt='wappulehden kansi'
              height={1080}
              width={753}
              className='object-contain mx-auto w-auto rounded-lg bg-blue-400'
            />
          </div>

        </div>
      </section>
      <section className='container mx-auto py-16 px-4' id='lehti'>
        <h2 className='text-3xl font-semibold text-[#032a39] mb-4 text-center'>Tutustu Lehteen</h2>
        <p className='text-[#032a39] max-w-xl mx-auto mb-8 text-center'>
          Muun muassa näitä juttuja pääset lukemaan lehden sivuilta. Lisäksi mukana paljon tuoreita vitsejä sekä upeaa grafiikkaa!
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow'>
            <div className='relative h-60 mb-4 rounded-xl overflow-hidden'>
              <Image
                src='/ponkeli25-tuotteet.webp'
                alt='lehtijuttu tuotteet'
                fill
                className='object-cover'
              />
            </div>
            <div className='space-y-2'>
              <span className='text-[#44ace2] text-sm font-medium'>HYVINVOINTI</span>
              <h3 className='text-xl font-semibold text-[#032a39]'>Tutustu lehden upeisiin oheistuotteisiin</h3>
              <p className='text-[#032a39] opacity-80'>
                Tutustu lehden mukana tulevan saippuan tuoksuihin sekä pyyhkeen käyttötarkoituksiin.
              </p>
            </div>
          </div>
          <div className='bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow'>
            <div className='relative h-60 mb-4 rounded-xl overflow-hidden'>
              <Image
                src='/ponkeli25-nistit.webp'
                alt='lehtijuttu Lorenzonistin padat'
                fill
                className='object-cover'
              />
            </div>
            <div className='space-y-2'>
              <span className='text-[#44ace2] text-sm font-medium'>RUOANLAITTO</span>
              <h3 className='text-xl font-semibold text-[#032a39]'>Lorenzonistin parhaat padat</h3>
              <p className='text-[#032a39] opacity-80'>
                Toinen toistaan herkullisempia ja lompakkoystävällisempiä reseptejä yhä nopeammin köyhtyvälle opiskelijalle.
              </p>
            </div>
          </div>
          <div className='bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow'>
            <div className='relative h-60 mb-4 rounded-xl overflow-hidden'>
              <Image
                src='/ponkeli25-niksit.webp'
                alt='lehtijuttu niksit'
                fill
                className='object-cover object-left'
              />
            </div>
            <div className='space-y-2'>
              <span className='text-[#44ace2] text-sm font-medium'>ELÄMÄNHALLINTA</span>
              <h3 className='text-xl font-semibold text-[#032a39]'>Vinkkejä elämään ja sen ulkopuolelle</h3>
              <p className='text-[#032a39] opacity-80'>
                ”Ekologinen jalkakuorinta, soijakastike vai hernekeitto?”, ”Ketä eroaa Joukosta?” sekä paljon muita toinen toistaan parempia niksejä ja vinkkejä kotiin vietäväksi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[url(/ponkeli25-blob.webp)] bg-full bg-no-repeat bg-position- bg-center' id='osta'>
        <div className='container mx-auto py-16 px-4 mb-20'>
          <SaleSection />
        </div>
      </section>
      <section className='bg-[#44ace2] bg-opacity-10 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-xl md:text-3xl font-semibold text-[#032a39] mb-4'>Hauskaa ja huumorintäyteistä Wappua kaikille!</h2>
          <p className='text-[#032a39] max-w-xl mx-auto mb-8'>
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
