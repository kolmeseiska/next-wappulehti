import React from 'react'
import Image from 'next/image'

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
        <h3 className='text-2xl font-extrabold'>
          2022
        </h3>
        <p>
          Vuoden 2022 wappulehdessä <b>&quot;Pönkeliseikkailu&quot;</b> lukijat pääsivät etsimään kadonnutta tutkintoa upean grafiikan saattelemana.
        </p>
        <Image
          src='/ponkelijulkkari-1.jpg'
          width={600}
          height={500}
          alt='wappulehti-2022'
          className='mx-auto'
        />
        <h3 className='text-2xl font-extrabold'>
          2021
        </h3>
        <p>
          Ensimmäinen Pönkeli näki päivänvalon wappuna 2021 nimellä &quot;Pönkelipakka&quot;. Pelikorttipakka, jota monet turkulaiset sekä ulkopaikkakuntalaiset opiskelijat kantavat yhä haalareissaan.
        </p>
        <Image
          src='/wappulehti-2021.jpg'
          width={600}
          height={500}
          alt='wappulehti-2021'
          className='mx-auto'
        />
      </div>
    </div>
  )
}

export default historia
