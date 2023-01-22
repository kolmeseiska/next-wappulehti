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
          on turkulaisten teekkareiden wappulehti Pönkelin lanseeraama uusi Pönkelin sisältökilpailu,
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
    image: null,
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
      </p>
    )
  },
  {
    name: 'Wappulehden julkkarit ja Wapunaloitusbileet',
    date: '2023-04',
    image: '/ponkelijulkkari-1.jpg',
    description: (
      <>
        Pssst.. <i>wappu</i>
      </>
    )
  }
]

export default events
