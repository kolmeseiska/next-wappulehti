import React from 'react'

import Form from '../components/Form'
type Props = {}

const Kisa = (props: Props) => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row'>
        <div className='w-full px-12 max-w-2xl'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold mb-5'>Pölkyn Äärellä</h1>
            <h2 className='text-3xl mb-4'>Vitsi | Juttu | Grafiikka</h2>
          </div>
          <p className='py-2'>
            Pönkelillä lyö päässä tyhjää, ja Pönkelöiset tarvitsevat apuasi puujalkojen pöytään pamauttamiseen.
          </p>
          <p className='py-2'>
            Tepsuttele siis Pölkyn Äärelle, ja osallistu kilpailuun, jossa palkitaan uutterimmat, hillittömimmät, veikeimmät ja hulvattomimmat osallistujat ylellisesti!
          </p>
          <p className='py-2'>
            Kilpailussa haetaan hervottomia hekotuksia aikaansaavia hupijuttuja, villeimpiä vitsejä ja gliffoja grafiikoita.
          </p>
          <p className='py-2'>
            Parhaimmat päätyvät Pönkeliin 2023 ja niiden luojat palkitaan loistokkaasti Pönkelijulkkareissa wapun aloituksessa.
          </p>
          <p className='py-2'>
            Huom! Teekkarifukseille jaossa fuksipisteitä!
          </p>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body'>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kisa
