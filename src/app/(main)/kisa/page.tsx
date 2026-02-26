
'use client'
import CardFormPage from '@/components/CardFormPage'
import ParticipationForm from '@/components/ParticipationForm'

const Kisa = () => {
  return (
    <CardFormPage
      header={(
        <>
          <h1>Pönkelin vitsikilpailu</h1>
          <p className='max-w-md mx-auto font-semibold'>
            Oletko sinä hauska? Onko Pönkeli hauska?<br/>Oletteko yhdessä hauskempia?
          </p>
        </>
      )}
      side={(
        <>
          <h2 className='text-3xl'>Vitsi | Juttu | Grafiikka -kisa</h2>
          <p>
            <b>Pönkelin vitsikilpailu</b> on Wappulehti Pönkelin vitsi/grafiikka/kirjoitus -kilpailu, jonka tarkoituksena on saada ne kaikkein hervottomimmat ja nerokkaimmat tuotokset samaan painokseen eli Wappuna 2026 ilmestyvään Pönkeliin! Vitsikilpailu on käynnissä nyt ja päättyy <b>12.3.2026.</b>
          </p>
          <div className='my-3'>
            <b>Kilpailun kategoriat:</b>
            <ul className='font-bold'>
              <li><b>Paras vitsi</b></li>
              <li><b>Hauskin fuksi</b></li>
              <li><b>Humoristisin taideteos</b></li>
              <li><b>Tehokkain kilta</b></li>
            </ul>
          </div>
          <p>Kategorioiden voittajat palkitaan lahjakorteilla ja tehokkain kilta kiltahuoneen viihtyvyyttä edistävillä tarvikkeilla!</p>
          <p>
            Oletko siis taidokas taiteilija, suurenmoinen sanailija tai kenties virtuoosi vitsailija? Tai muuten vaan hupsu hassuttelija, joka haluaisi osallistua wappulehden tekoon? 
          </p>
          <p>
            Tiputa parhain luomuksesi oheiseen lomakkeeseen ja bongaa se Pönkeli 2026 -lehdestä!
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
              Kilpailu on käynnissä <b>12.3.2026 asti</b>.
            </li>
            <li>
              Osallistua voit yläpuolelta löytyvän lomakkeen kautta tai ruokkimalla Agoran aulasta löytyvää PostiPönkeä.
            </li>
            <li>
              Älä ole tymä! Hylkäämme loukkaavat tuotokset suoraan!
            </li>
            <li>
              Lähettämällä vitsisi/grafiikkasi/tekstisi hyväksyt sen mahdollisen käytön Pönkelissä nyt tai tulevaisuudessa alkuperäisenä tai muokattuna.
            </li>
            <li>
              Pönkelin huumorineuvosto käy kilpailun päättymisen jälkeen läpi kaiken lähetetyn materiaalin, ja valitsee niiden keskuudesta ainakin seuraavat palkittavat:
            </li>
            <ul>
              <li>Paras vitsi- Paras yksittäinen vitsi</li>
              <li>Hauskin fuksi - Hauskin fuksin lähettämä tuotos</li>
              <li>Humoristisin taideteos - Eniten hilpeyttä aiheuttava graafinen teos</li>
              <li>Tehokkain kilta - Kilta, joka tuottaa eniten vitsejä, grafiikkaa tai juttuja</li>
            </ul>
            <li>
              Palkitseminen suoritetaan Pönkelijulkkareissa 9.4.
            </li>
            <li>
              Fuksit saavat lehteen päätyneestä tuotoksesta Pönkelipisteen fuksipassiin. Fukseille ilmoitetaan mikäli heidän tuotoksensa päätyy lehteen ennen julkkareita.
            </li>
            <li>
              Voittajille ilmoitetaan henkilökohtaisesti, joten varmistathan oikeat yhteystiedot. Sähköpostiosoitteet poistetaan Wapun jälkeen, mutta nimitieto säilytetään, jotta Pönkeli voi tulevaisuudessa kiittää lehden tekoon osallistuneita henkilöitä.
            </li>
          </ul>
        </>
      )}
    />
  )
}

export default Kisa
