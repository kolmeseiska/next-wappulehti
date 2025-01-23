
'use client'
import CardFormPage from '@/components/CardFormPage'
import ParticipationForm from '@/components/ParticipationForm'

const Kisa = () => {
  return (
    <CardFormPage
      header={(
        <>
          <h1>Pölkyn Äärellä</h1>
          <p className='max-w-md mx-auto'>
            <b className='text-red-50'>Taas aika kokoontua pölkyn äärelle!</b>
          </p>
        </>
      )}
      side={(
        <>
          <h2 className='text-3xl'>Vitsi | Juttu | Grafiikka -kisa</h2>
          <p>
            <b>Pölkyn Äärellä</b> on wappulehti Pönkelin lanseeraama vitsi/grafiikka/kirjoitus -kilpailu, jonka tarkoituksena on saada ne kaikkein hervottomimmat ja nerokkaimmat tuotokset samaan painokseen eli wappuna 2024 ilmestyvään Pönkeliin!
          </p>
          <b>
            Huom! Parhaat tuotokset palkitaan!
          </b>
          <p>
            Oletko siis taidokas taiteilija, suurenmoinen sanailija tai kenties virtuoosi vitsailija? Tai muuten vaan hupsu hassuttelija, joka haluaisi osallistua wappulehden tekoon?
          </p>
          <p>
            Tiputa parhain luomuksesi oheiseen lomakkeeseen ja bongaa se Pönkeli 2024 -lehdestä!
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
            <li>
              Osallistua voit yläpuolelta löytyvän lomakkeen kautta, ruokkimalla Agoran aulasta löytyvää PostiPönkeä tai saapumalla yhteisiin hupituokioihin Proffan Kellariin 6.3. kello 17-20. Hupituokio järjestetään yläkerrassa sijaitsevassa kabinettitilassa.
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
              <li><b>Hulvattomin kilta</b> - Ainejärjestö/kilta, joka tuottaa kaikkein loistavimmat letkautukset!</li>
              <li><b>Hillittömin vitsiniekka</b> - Turun hauskin opiskelija 2024</li>
              <li><b>Veikein fuksi</b> - Turun hauskin fuksi/piltti 2024</li>
            </ul>
            <li>
              Palkitseminen suoritetaan Pönkelijulkkareissa.
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
