'use client'

import RecruitmentForm from '@/components/RecruitmentForm'

const page = () => {
  return (
    <div className='container mx-auto px-4 justify-center py-16 max-w-3xl'>
      <h1 className='text-6xl font-extrabold pb-10 text-center'>
        Oletko kiinnostunut Pönkelin tekemisestä?
      </h1>
      <div className='prose prose-xl mx-auto'>
        <p>
          Pönkeli rekrytoi uusia pönkeleitä tuottamaan Turun hauskinta wappulehteä aina myöhään keväällä ja syksyllä koulun alkaessa. Pönkelissä pääset tekemään kaikkea hauskaa - olitpa sitten piirtäjä, graafikko, vitsiniekka, tapahtuman tuottaja, valokuvaaja tai muuten vain valmis hassuttelemaan ja hyppäämään projektiin! Pönkeliin hakiessa et tarvitse mitään erityisiä taitoja, vain avointa mieltä.
        </p>
        <p>
          Pönkeliin voivat hakea kaikki, olit sitten teekkari tai et, kunhan omaat hassuttelevan mielen ja halun tehdä yhdessä hyvää muille. Hae mukaan Pönkeliin alla olevalla lomakkeella, ja sinuun ollaan yhteydessä hakujen aikaan. Voit siit ilmoittaa kiinnostuksesi mihin aikaan vuodesta vain!
        </p>
      </div>
      <div className='card shadow-2xl w-full max-w-md bg-base-100 mx-auto my-5'>
        <div className='card-body'>
          <p className='text-xl'><b>Rekrylomake</b></p>
          <RecruitmentForm />
        </div>
      </div>
    </div>
  )
}

export default page
