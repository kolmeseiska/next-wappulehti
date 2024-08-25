import React, { Fragment } from 'react'
import Image from 'next/image'

const editions = [
  {
    year: 2024,
    title: 'Galleria',
    body: (
      <>
        <p>Mo</p>
        <p>Mo</p>
      </>
    ),
    imageSource: '/galleria-24.webp'
  },
  {
    year: 2023,
    title: 'FantasiaPönkeli',
    body: (
      <>
        <p>
          Vuonna 2023 otettiin askel perinteisempään ja Pönkeli manifestoitui lehden muotoon. <b>&quot;FantasiaPönkeli&quot;</b> on fantasia/DnD/roolipeli-teemainen tuotos täynnä upeaa perinteisin sekä virtuaalisin keinoin loihdittua grafiikkaa, tarinoita sekä vitsejä.
        </p>
        <p>
          Pelkän luettavan lisäksi käyttäjät saivat itselleen viisi elementtinoppaa, joita pystyi hyödyntämään lehden sivuilta löytyvissä peleissä sekä vaihtelemaan toisten pönkelifantasian ystävien kanssa.
        </p>
      </>
    ),
    imageSource: '/ponkelipromo23-5.webp'
  },
  {
    year: 2022,
    title: 'Pönkeliseikkailu',
    body: (
      <p>
        Vuoden 2022 wappulehdessä <b>&quot;Pönkeliseikkailu&quot;</b> lukijat pääsivät etsimään kadonnutta tutkintoa upean grafiikan saattelemana.
      </p>
    ),
    imageSource: '/ponkelijulkkari-1.jpg'
  },
  {
    year: 2021,
    title: 'Pönkelipakka',
    body: (
      <p>
        Ensimmäinen Pönkeli näki päivänvalon wappuna 2021 nimellä &quot;Pönkelipakka&quot;. Pelikorttipakka, jota monet turkulaiset sekä ulkopaikkakuntalaiset opiskelijat kantavat yhä haalareissaan.
      </p>
    ),
    imageSource: '/wappulehti-2021.jpg'
  }
]

const historia = () => {
  return (
    <div className='container mx-auto px-4 justify-center py-16'>
      <h1 className='text-6xl font-extrabold pb-10 text-center'>Historia</h1>
      <div className='prose prose-xl mx-auto'>
        <h2 className='text-3xl font-extrabold'>
          Pönkeli on Turun yliopiston teekkareiden Wappulehti.
        </h2>
        <p>
          Teekkareiden Wappulehtiä on väännetty Turun yliopistossa jo vuodesta 2001 ja tuolloin teoksen nimi oli Pilde&Napander. Vuonna 2020 projekti aloitettiin alusta ja wappulehti sai uuden uljaan ja soiluvan nimen <b>Pönkeli.</b>
        </p>
        {editions.map(edition => (
          <Fragment key={edition.year}>
            <h3 className='text-2xl font-extrabold'>
              {edition.year} - {edition.title}
            </h3>
            {edition.body}
            <Image
              src={edition.imageSource}
              width={600}
              height={500}
              alt={`wappulehti-${edition.year}`}
              className='mx-auto'
            />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default historia
