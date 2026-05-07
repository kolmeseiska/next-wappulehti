'use client'

import RecruitmentForm from '@/components/RecruitmentForm'

const page = () => {
  return (
    <div className='container mx-auto px-4 justify-center py-16 max-w-3xl'>
      <h1 className='text-6xl font-extrabold pb-10 text-center'>
        Oletko kiinnostunut Pönkelin tekemisestä?
      </h1>
      <div className='prose mx-auto'>
        <p>
          Pönkeli rekrytoi uusia toimittajia tuottamaan Turun hauskinta wappulehteä jälleen kerran. Pönkelissä pääset tekemään kaikkea hauskaa - olitpa sitten kiinnostunut piirtämisestä, taittamisesta, kirjoittamisesta, vitsailusta, tapahtumatuottamisesta, valo- tai videokuvaamisesta, markkinoinnista tai muuten vain valmis hassuttelemaan ja hyppäämään projektiin! Pönkeliin hakiessa et tarvitse mitään erityisiä taitoja, vain avointa mieltä ja innon oppia uutta.
        </p>
        <p>
          Pönkeliin voivat hakea kaikki, olit sitten teekkari tai et, kunhan omaat hassuttelevan mielen ja halun tehdä yhdessä hyvää muille. Hae mukaan Pönkeliin alla olevalla lomakkeella, ja sinuun voidaan olla yhteydessä hakuajan päättymisen jälkeen. Ilmoita kiinnostuksesi siis heti!
        </p>
        <p>Erityisesti toimitukseen haetaan tällä hetkellä toimittajia jotka haluavat tehdä:</p>
        <ul>
          <li>Piirustuksia tai muuta grafiikkaa</li>
          <li>Tapahtumia</li>
          <li>Valo- ja/tai videokuvausta</li>
          <li>Videoeditointia</li>
          <li>Markkinointia ja sosiaalisen median sisältöä</li>
        </ul>
        <p>
          Rekry sulkeutuu virallisesti 31.5.2026
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
