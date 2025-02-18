
'use client'
import CardFormPage from '@/components/CardFormPage'
import ParticipationForm from '@/components/ParticipationForm'

const Kisa = () => {
  return (
    <CardFormPage
      header={(
        <>
          <h1>Pönkelin vitsikilpailu</h1>
          <p className='max-w-md mx-auto'>
            <b className='text-red-50'>Oletko sinä hauska? Onko Pönkeli hauska?
            </b>
          </p>
        </>
      )}
      side={(
        <>
          <h2 className='text-3xl'>Vitsi | Juttu | Grafiikka -kisa</h2>
          <p>
            <b>Pönkelin vitsikilpailu</b> on wappulehti Pönkelin vitsi/grafiikka/kirjoitus -kilpailu, jonka tarkoituksena on saada ne kaikkein hervottomimmat ja nerokkaimmat tuotokset samaan painokseen eli wappuna 2025 ilmestyvään Pönkeliin! Vitsikilpailu on käynnissä <b>18.2.-16.3.2025.</b>
          </p>
          <p>
            <b>Vitsikilpailun palkinnot:</b>
            <ul className='font-bold'>
              <li><b>Paras vitsi</b> 50 € S-ryhmän lahjakortti</li>
              <li><b>Paras fuksivitsi</b> 50 € S-ryhmän lahjakortti + pönkelipiste fuksipassiin</li>
              <li><b>Hauskin kilta</b> MAINETTA ja taidetta (kiltikselle)</li>
              <li><b>Salainen kiltakategoria</b> ?</li>
            </ul>
          </p>
          <p>
            Oletko siis taidokas taiteilija, suurenmoinen sanailija tai kenties virtuoosi vitsailija? Tai muuten vaan hupsu hassuttelija, joka haluaisi osallistua wappulehden tekoon?
          </p>
          <p>
            Tiputa parhain luomuksesi oheiseen lomakkeeseen ja bongaa se Pönkeli 2025 -lehdestä!
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
              Kilpailu on käynnissä <b>18.2.-16.3.2025</b>, mutta voit tuottaa vitsejä vaikka vuoden ympäri!
            </li>
            <li>
              Osallistua voit yläpuolelta löytyvän lomakkeen kautta tai ruokkimalla Agoran aulasta löytyvää PostiPönkeä.
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
              <li><b>Paras vitsi</b></li>
              <li><b>Paras fuksivitsi</b></li>
              <li><b>Hauskin kilta</b></li>
              <li><b>Salainen kiltakategoria</b></li>
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
