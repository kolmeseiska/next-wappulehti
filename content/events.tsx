import React, { ReactNode } from 'react'
import Link from 'next/link'

export type PonkeliEvent ={
  name: string,
  date: string | null,
  description: ReactNode,
  image: string | null
}

const events: PonkeliEvent[] = [
  {
    name: 'Pönkeli Games 2022',
    date: '2022-10-12',
    image: '/ponkeli-games22.jpg',
    description: (
      <>
        <strong>Rajattomasti hauskaa, urheilua ja yllätyksiä kaikelle kansalle</strong>
        <p>
          Ensimmäinen Pönkeli Games 2022 eli PöNGi22 pelattiin kauniissa syyskelissä Yliopistonmäellä keskiviikkona 12.10.22. Voittajia ja yleistä tunnelmaa fiilisteltiin jatkoilla PöNGi-bileissä Dynamossa!
        </p>
        <p className='pb-5'>
          Tapahtuman upeita joukkueita sekä lajeja voi fiilistellä Turun yliopiston teekkareiden kuvagalleriassa
          {' '} 
          <a 
            className='link'
            href='https://tyteekkarit.kuvat.fi/kuvat/P%C3%B6nkeli+-Turkulainen+wappulehti/P%C3%B6nkeli+Games+2022/'
            target='_blank'
            rel='noreferrer'
          >
            täällä.
          </a>
        </p>
      </>
    )
  },
  {
    name: 'Pölkyn äärellä',
    date: '2023-02',
    image: '/polkyn-aarella.png',
    description: (
      <>
        <strong>
          on turkulaisten teekkareiden wappulehti Pönkelin lanseeraama uusi Pönkelin sisältökilpailu KÄYNNISSÄ NYT!
        </strong>
        <p>
          Lähetä omat luomuksesi ja tutustu ohjeisiin <Link className='link' href='/kisa'>Pölkyn Äärellä -sivuilta</Link>
        </p>
      </>
    )
  },
  { 
    name: 'Pönkelin talvirieha ja jälkilöylyt 31.1.2023',
    date: '2023-01-31',
    image: '/talvirieha.jpeg',
    description: (
      <p>
        <strong>Mitä?</strong> Pönkelin Talvirieha ja talviriehan jälkilöylyt
        <br />
        <strong>Milloin?</strong> Tiistaina 31.1.2023 klo 16.00-20.00, jälkilöylyt klo 20.00
        <br />
        <strong>Missä?</strong> Tuomaanpuistossa, jälkilöylyt Proffan Kellarin kabineteissa
        <br />
        <strong>Miksi?</strong> Ilmasta pullaa, mehua, musaa, kavereita, lumisotaa ja pulkkailua! Luvassa palkinnot parhaimmille pulkka trick shottien suorittajille.
        <br />
        <strong>MYYJÄKSI?</strong>  TAPAHTUMASSA VOIT ILMOITTAUTUA PÖNKELIN 2023 MYYJÄKSI JA LUNASTAA SAMALLA PAIKAN PÖNKELIJULKKAREIDEN VIP-ALUEELTA WAPUNALOITUKSESSA!
        <br />
        <Link href='/myyjarekry' className='link'> 
          Myyjäksi voit myös ilmoittautua täältä.
        </Link>
      </p>
    )
  },
  {
    name: 'Pönkelijulkkarit ja wappuetkot',
    date: '2023-04-12',
    image: '/ponkelijulkkarit.jpg',
    description: (
      <>
        <b> 12.4. klo 18 Kårenilla</b>
        <p>Hyvä turkulainen teekkari, teekkarifuksi ja teekkarimielinen opiskelija, on tullut aika aloittaa kauan odotettu ajanjakso vuodesta, eli Turun Teekkariwappu 2023.</p>
        <p>Turun teekkariwappu aloitetaan wapunaloitusbileiden virallisilla etkoilla ja tietenkin Turun teekkareiden oman wappulehden, Pönkelin, julkaisulla. Tapahtuma alkaa wapputoimikunnan perinteisellä esitelmällä ja wappuvideolla, jonka jälkeen Pönkeli johdattelee kaikki turkulaiset opiskelijat wapputunnelmaan juhlavin menoin. Pönkelin julkkareissa on tietenkin myös yllätysesiintyjä, jota ei kannata missata. Kårenin baari palvelee koko tapahtuman ajan opiskelijaystävällisin hinnoin.</p>
        <p>Tapahtuma toimii virallisina etkoina wapunaloitusbileille ja tapahtumassa on ensimmäinen mahdollisuus lunastaa itselleen wapun haluituin tuote eli Pönkeli 2023! Tapahtuman jälkeen wappukansa vaeltaa yhdessä kohti Lygasia ja wapunaloitusbileitä!</p>
        <b>[TL;DR ENG]</b>
        <ul>
          <li><b>What?</b> Pönkeli’s publishing party and wappu pre-party</li>
          <li><b>Where?</b> Kåren, Hämeenkatu 22</li>
          <li><b>When?</b> 12th of April at 6 PM till 9 PM. Doors open at 5.30 PM</li>
          <li><b>Why?</b>  BECAUSE THIS IS THE STARTING OF WAPPU</li>
          <li><b>Price?</b> Cloakroom 3 €</li>
          <li><b>Dresscode?</b> Wappu/Pönkeli/over-alls</li>
        </ul>

      </>
    )
  },
  {
    name: 'Pönkelireivit',
    date: '2023-04-15',
    image: '/ponkelireivit.png',
    description: (
      <>
        <b>lauantaina 15.4. salaisessa reivilokaatiossa</b>
        <p>
          “Reivaa kanssamme”, sanoi Pönkeli-setä innoissaan, ja niin syntyi idea nuoremmille Pönkeleille. Turun teekkariwappu on jo kauan kaivannut itselleen rehellisiä reivejä! Nimensä mukaisesti tarjolla on elektronista tanssimusiikkia eksoottisessa kohteessa. Astu siis Pönkelibussin kyytiin, ja lähde elämäsi reiviseikkailuun. Iltaan sisältyy joukko erityisiä esiintyjiä, pönkelimäistä menoa sekä maukasta ravintoa.
        </p>
        <p>
          <a 
            href='https://link.webropol.com/s/ponkelireivit-ilmoittautuminen'
            target='_blank'
            className='hover:text-primary transition-colors'
            rel='noopener noreferrer'
          >
            Ilmoittaudu tapahtumaan täältä.
          </a>
        </p>
        <b>[TL;DR ENG]</b>
        <ul>
          <li><b>What?</b> Pönkelirave!</li>
          <li><b>Where?</b> at a secret location</li>
          <li><b>When?</b> Saturday the 15th of April at 5PM till 00.30 AM. The buses will leave from the University at 5 PM and back to the University at 11.30 PM.</li>
          <li><b>Why?</b> To all of those, who want to rave their heart out, and are bored of those regular club parties.</li>
          <li><b>Tickets?</b> 16 €. Transportation and food included.</li>
          <li><b>Dresscode?</b> Rave/Overalls. The rave will be held inside.</li>
          <li><b>What to bring?</b> water bottle, good dancing shoes, BYOB</li>
        </ul>
        <p>
          <a 
            href='https://link.webropol.com/s/ponkelireivit-ilmoittautuminen'
            target='_blank'
            className='hover:text-primary transition-colors'
            rel='noopener noreferrer'
          >
            Enroll here.
          </a>
        </p>
      </>
    )
  },
  {
    name: 'Pönkelin Wappuvälitunti',
    date: '2023-04-24',
    image: '/wappuvalitunti.jpg',
    description: (
      <>
        <b>24.4.23 klo 12.00-16.00 @Kuuvoren kenttä</b>
        <p>Lapsettaako? Turun yliopiston teekkareiden ikioma wappulehti Pönkeli tuo lapsuudenmuistot (ja traumat) Kuuvuorelle 24.4. klo 12 alkaen. Pönkelin porukka vetää lapsuudesta tuttuja pelejä sekä leikkejä hyvässä hengessä ja matalalla kynnyksellä. Luvassa on purkkista, kirkkistä, kymmenen tikkua laudalla, peiliä ja muita ihania klassikkoleikkejä välitunneilta! Tule siis tuulettumaan luentojen välissä ja päästä sisäinen lapsesi taas ulos. Tapahtumasta voi ostaa Pönkeleitä. Luvassa on musiikkia ja hyvää meininkiä.</p>
        <b>TL;DR:</b>
        <ul>
          <li>Mitä? Pönkeli Wappuvälitunti</li>
          <li>Missä? Kuuvuoren kenttä</li>
          <li>Milloin? 24.4.23 klo 12.00-16.00</li>
          <li>Miksi? Koska kaikki haluaa takaisin lapsuuden huolettomat välitunnit</li>
          <li>Hinta? ilmainen</li>
          <li>Pukukoodi? Haalarit/sporttivaatteet</li>
        </ul>
        <b>[TL;DR ENG]</b>
        <ul>
          <li><b>What?</b> Pönkeli’s Wappurecess</li>
          <li><b>Where?</b> Kuuvuori field</li>
          <li><b>When?</b> 24th of April at noon till 6 PM</li>
          <li><b>Why?</b> Because all of us want those carefree childhood recesses back.</li>
          <li><b>Price?</b> Free</li>
          <li><b>Dresscode?</b> Overalls/Sport clothes</li>
        </ul>
      </>
    )
  }
]

export default events
