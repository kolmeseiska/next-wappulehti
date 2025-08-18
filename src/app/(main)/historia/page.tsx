import React, { Fragment } from 'react'
import Image from 'next/image'

const editions = [
  {
    year: 2025,
    title: 'Niksi Pönkeli',
    body: (
      <>
        <p>
          Wapun 2025 siistein julkaisu <b>&quot;Niksi Pönkeli&quot;</b> sisälsi lehden täydeltä puhdasta sekä kuivaa huumoria.
        </p>
        <p>
          Niksi Pönkelin mukana lukija sai itselleen suomalaisella käsityöllä tehdyn saippuan sekä monikäyttöisen "kyykkäpyyhkeen". Lehden vitsit, tarinat sekä grafiikat tarjosivat lukijalleen unohtumatonta hupia ja iloa.
        </p>
      </>
    ),
    imageSource: '/historia-25.webp'
  },
  {
    year: 2024,
    title: 'Galleria Pönkeli',
    body: (
      <>
        <p>
          Wappuna 2024 ilmestynyt <b>&quot;Galleria Pönkeli&quot;</b> oli ensimmäinen wappulehti laatuaan, joka oli myös kokemus fyysisen lehden sijaan. Pönkeli ilmestyi taidenäyttelynä tieteen ja taiteen kohtaamisista, mihin pääsylippuna toimi pieni huumorilehtinen, joka opasti näyttelyssä kävijöitä teoksista.
        </p>
        <p>
          Taidenäyttelyyn oli luotu erilaisia teoksia aina perinteisistä maalauksista suurempiinkin insinööritaidonnäytteisiin. Galleria Pönkeliä pidettiin Turun Taiteen Talolla koko wapun ajan auki, ja se muovautui opiskelijoiden olohuoneeksi. Galleria Pönkeli oli innovatiivinen, kokeilunhaluinen ja osoitus tekniikan ja taiteen luovuudesta.
        </p>
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
      <div className='prose prose-xl mx-auto max-w-[75ch] flex flex-col gap-10'>
        <div>
          <h2 className='text-3xl font-extrabold mb-3'>
            Pönkeli on Turun yliopiston opiskelijoiden Wappulehti.
          </h2>
          <p>
            Wappulehtiä on väännetty Turun yliopistossa jo vuodesta 2001 ja tuolloin teoksen nimi oli Pilde&Napander. Vuonna 2020 projekti aloitettiin alusta ja wappulehti sai uuden uljaan ja soiluvan nimen <b>Pönkeli.</b>
          </p>
        </div>
        {editions.map(edition => (
          <div key={edition.year} className='flex flex-col gap-3'>
            <h3 className='text-2xl font-extrabold my-2'>
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default historia
