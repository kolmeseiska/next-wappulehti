import React from 'react'

import CardFormPage from '../components/CardFormPage'
import ParticipationForm from '../components/ParticipationForm'

const Kisa = () => {
  return (
    <CardFormPage
      header={(
        <h1>Pölkyn Äärellä</h1>
      )}
      side={(
        <>
          <h2 className='text-3xl'>Vitsi | Juttu | Grafiikka -kisa</h2>
          <p>
            Pönkelillä lyö päässä tyhjää, ja Pönkelöiset tarvitsevat apuasi puujalkojen pöytään pamauttamiseen.
          </p>
          <p>
            Tepsuttele siis Pölkyn Äärelle, ja osallistu kilpailuun, jossa palkitaan uutterimmat, hillittömimmät, veikeimmät ja hulvattomimmat osallistujat ylellisesti!
          </p>
          <p>
            Kilpailussa haetaan hervottomia hekotuksia aikaansaavia hupijuttuja, villeimpiä vitsejä ja gliffoja grafiikoita.
          </p>
          <p>
            Parhaimmat päätyvät Pönkeliin 2023 ja niiden luojat palkitaan loistokkaasti Pönkelijulkkareissa wapun aloituksessa.
          </p>
          <p>
            Huom! Teekkarifukseille jaossa fuksipisteitä!
          </p>
        </>
      )}
      form={<ParticipationForm />}
      details={(
        <>
          <h2>
            Kilpailun säännöt
          </h2>
          <ul>
            <li className='font-bold'>
              Kilpailuaika on 23.1. - 28.2.2023. 
            </li>
            <li>
              Osallistua voit yläpuolelta löytyvän lomakkeen kautta, ruokkimalla Agoran aulasta löytyvää PostiPönkeä tai saapumalla yhteisiin hupituokioihin Proffan Kellariin 8., 15., ja 22.2. kello 17-20. Hupituokiot järjestetään yläkerrassa sijaitsevassa kabinettitilassa.
            </li>
            <li>
              Älä ole tymä! Hylkäämme rasistiset sekä loukkaavat tekstit/kuvat suoraan!
            </li>
            <li>
              Lähettämällä vitsisi/kuvasi/tekstisi hyväksyt sen mahdollisen käytön Pönkelissä nyt tai tulevaisuudessa alkuperäisenä tai muokattuna.
            </li>
            <li>
              Pönkelin kontsaneuvosto käy kilpailun päättymisen jälkeen läpi kaiken lähetetyn materiaalin, ja valitsee niiden keskuudesta ainakin seuraavat palkittavat:
            </li>
            <ul className='font-bold'>
              <li>
                Hulvattomin kilta (hauskin kuva/juttu/vitsi)
              </li>
              <li>
                Uutterin kilta (eniten vitsejä/juttuja/kuvia tuottanut)
              </li>
              <li>
                Hillittömin vitsiniekka (Hauskimman jutun/kuvan/vitsin tuottanut opiskelija 2023)
              </li>
              <li>
                Veikein fuksi (Hauskimman jutun/kuvan/vitsin tuottanut fuksi/piltti 2023)
              </li>
            </ul>
            <li>
              Palkitseminen suoritetaan Pönkelijulkkareissa <strong>12.4.2023</strong> wapunaloitusbileiden virallisilla etkoilla. Palkinnot ovat tänä vuonna entistä paremmat, pönkelimmät ja mahtipontisemmat!
            </li>
            <li>
              Fuksit saavat lehteen päätyneestä jutusta/vitsistä/kuvasta fuksipisteen. Fukseille ilmoitetaan mikäli heidän tuotoksensa ei päädy lehteen, jotta he voivat vielä ilmoittautua Pönkelin myyjiksi fuksipisteen toivossa. 
            </li>
            <li>
              Voittajille ilmoitetaan henkilökohtaisesti, joten varmistathan oikeat yhteystiedot. Sähköpostiosoitteet poistetaan wapun jälkeen, mutta nimitieto säilytetään, jotta Pönkeli voi tulevaisuudessa kiittää vitsin/jutun/grafiikan tuottanutta henkilöä. 
            </li>
          </ul>
        </>
      )}
    />
  )
}

export default Kisa
