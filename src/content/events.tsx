import { ReactNode } from 'react'
import Link from 'next/link'

export type PonkeliEvent = {
  name: string,
  date: string | null,
  details: string | null,
  description: ReactNode,
  image: string | null
}

const events: PonkeliEvent[] = [
  {
    name: 'Pönkeli Games 2022',
    date: '2022-10-12',
    details: null,
    image: '/ponkeli-games22.webp',
    description: (
      <>
        <strong>Rajattomasti hauskaa, urheilua ja yllätyksiä kaikelle kansalle</strong>
        <p>
          Ensimmäinen Pönkeli Games 2022 eli PöNGi22 pelattiin kauniissa syyskelissä Yliopistonmäellä keskiviikkona 12.10.22. Voittajia ja yleistä tunnelmaa fiilisteltiin jatkoilla PöNGi-bileissä Dynamossa!
        </p>
        <p className='pb-5'>
          Tapahtuman upeita joukkueita sekä lajeja voi fiilistellä Turun yliopiston teekkareiden kuvagalleriassa
          {' '}
          <Link
            className='link hover:text-accent'
            href='https://tyteekkarit.kuvat.fi/kuvat/P%C3%B6nkeli+-Turkulainen+wappulehti/P%C3%B6nkeli+Games+2022/'
            target='_blank'
            rel='noreferrer'
          >
            täällä.
          </Link>
        </p>
      </>
    )
  },
  {
    name: 'Pölkyn äärellä',
    date: '2023-02',
    details: null,
    image: '/polkyn-aarella.png',
    description: (
      <>
        <strong>
          on turkulaisten teekkareiden wappulehti Pönkelin lanseeraama uusi Pönkelin sisältökilpailu KÄYNNISSÄ NYT!
        </strong>
        <p>
          Lähetä omat luomuksesi ja tutustu ohjeisiin <Link className='link hover:text-accent' href='/kisa'>Pölkyn Äärellä -sivuilta</Link>
        </p>
      </>
    )
  },
  {
    name: 'Pönkelin talvirieha ja jälkilöylyt 31.1.2023',
    date: '2023-01-31',
    details: null,
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
      </p>
    )
  },
  {
    name: 'Pönkelijulkkarit ja wappuetkot',
    date: '2023-04-12',
    details: null,
    image: '/ponkelijulkkarit.jpg',
    description: (
      <>
        <b> 12.4. klo 18 Kårenilla</b>
        <p>Hyvä turkulainen teekkari, teekkarifuksi ja teekkarimielinen opiskelija, on tullut aika aloittaa kauan odotettu ajanjakso vuodesta, eli Turun Teekkariwappu 2023.</p>
        <p>Turun teekkariwappu aloitetaan wapunaloitusbileiden virallisilla etkoilla ja tietenkin Turun teekkareiden oman wappulehden, Pönkelin, julkaisulla. Tapahtuma alkaa wapputoimikunnan perinteisellä esitelmällä ja wappuvideolla, jonka jälkeen Pönkeli johdattelee kaikki turkulaiset opiskelijat wapputunnelmaan juhlavin menoin. Pönkelin julkkareissa on tietenkin myös yllätysesiintyjä, jota ei kannata missata. Kårenin baari palvelee koko tapahtuman ajan opiskelijaystävällisin hinnoin.</p>
        <p>Tapahtuma toimii virallisina etkoina wapunaloitusbileille ja tapahtumassa on ensimmäinen mahdollisuus lunastaa itselleen wapun haluituin tuote eli Pönkeli 2023! Tapahtuman jälkeen wappukansa vaeltaa yhdessä kohti Lygasia ja wapunaloitusbileitä!</p>
        <b>[TL;DR ENG]</b>
        <ul>
          <li><b>What?</b> Pönkeli&apos;s publishing party and wappu pre-party</li>
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
    details: null,
    image: '/ponkelireivit.png',
    description: (
      <>
        <b>lauantaina 15.4. salaisessa reivilokaatiossa</b>
        <p>
          “Reivaa kanssamme”, sanoi Pönkeli-setä innoissaan, ja niin syntyi idea nuoremmille Pönkeleille. Turun teekkariwappu on jo kauan kaivannut itselleen rehellisiä reivejä! Nimensä mukaisesti tarjolla on elektronista tanssimusiikkia eksoottisessa kohteessa. Astu siis Pönkelibussin kyytiin, ja lähde elämäsi reiviseikkailuun. Iltaan sisältyy joukko erityisiä esiintyjiä, pönkelimäistä menoa sekä maukasta ravintoa.
        </p>
        <p>
          <Link
            href='https://link.webropol.com/s/ponkelireivit-ilmoittautuminen'
            target='_blank'
            className='link hover:text-accent transition-colors'
            rel='noopener noreferrer'
            onClick={e => e.stopPropagation()}
          >
            Ilmoittaudu tapahtumaan täältä.
          </Link>
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
          <Link
            href='https://link.webropol.com/s/ponkelireivit-ilmoittautuminen'
            target='_blank'
            className='link hover:text-accent transition-colors'
            rel='noopener noreferrer'
            onClick={e => e.stopPropagation()}
          >
            Enroll here.
          </Link>
        </p>
      </>
    )
  },
  {
    name: 'Pönkelin Wappuvälitunti',
    date: '2023-04-24',
    details: null,
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
          <li><b>What?</b> Pönkeli&apos;s Wappurecess</li>
          <li><b>Where?</b> Kuuvuori field</li>
          <li><b>When?</b> 24th of April at noon till 6 PM</li>
          <li><b>Why?</b> Because all of us want those carefree childhood recesses back.</li>
          <li><b>Price?</b> Free</li>
          <li><b>Dresscode?</b> Overalls/Sport clothes</li>
        </ul>
      </>
    )
  },
  {
    name: 'PöNGi - Pönkeli Games 2023',
    date: '2023-10-10',
    details: null,
    image: '/ponkeli-games22.webp',
    description: (
      <>
        <p>Pönkeli Games tulee jälleen, ja järjestetään <b>10.10.23 klo 17-20 Kupittaan urheiluhallissa!</b> PöNGissä neljän hengen opiskelijajoukkueet kisailevat leikkimielisissä urheilulajeissa, jotka vaativat kekseliäisyyttä ja yhteistyötä. Parhaat joukkueet palkitaan illan <b>y2k-bileissä!</b> Joukkuepaikkoja on rajatusti, joten ilmoittautumisessa tulee olla nopea. Tapahtumassa on paljon ohjelmaa myös yleisölle, joten kannattaa tulla paikalle, vaikka joukkuepaikkaa ei saisikaan.</p>
        <p>Kokoa siis neljän (4) hengen joukkue, ja valmistaudu syksyn hauskimpaan seikkailuun. <b>Lipun hinta on 8 € /henkilö</b>, joka sisältää PöNGi-haalarimerkin, jonon ohituksen y2k-bileisiin ja bileiden haalarimerkin, sekä pientä naposteltavaa ja juotavaa tapahtuman aikana. Viime vuonna teemana toimi yliopistokaupungit, ja myös tänä vuonna on Pönkeli kehitellyt hauskan teeman joukkueille. Teeman mukaan parhaiten pukeutuneet palkitaan.</p>
        <p>Joukkuepaikkojen ilmoittautuminen aukeaa 25.9.2023 klo 12.00. Ilmoittautuminen tapahtuu
          {' '}
          <Link
            href='https://link.webropol.com/s/pongi23-ilmo'
            className='link hover:text-accent'
            target='_blank'
            rel='noopener noreferrer'
            onClick={e => e.stopPropagation()}
          >tästä linkistä</Link>. Ilmoittautumisen jälkeen lähetetään joukkueen yhteyshenkilölle tarkemmat lisätiedot ja ohjeet.</p>
        <p>Tule siis nauttimaan huikeista suorituksista, musiikista sekä kisatunnelmasta Kupittaan urheiluhalliin 10.10.23 klo 17-20. Tapahtumassa on runsaasti katsottavaa ja koettavaa myös yleisölle, nähdään siis Kupittaalla!</p>
        <p>Seuraa Pönkelin instagramia ja tiktokia @wappulehtiponkeli ja nettisivuja pönkeli.fi löytääksesi lisätietoja tapahtumasta. </p>
        <ul>
          <li><b>TL;DR</b></li>
          <li><b>Mitä? Pönkeli Games 2023 eli PöNGi23</b></li>
          <li><b>Missä? Opiskelijoiden leikkimieliset urheilukilpailut Kupittaan urheiluhallissa</b></li>
          <li><b>Milloin? 10.10.23 klo 17-20</b></li>
          <li><b>Miksi? Koska tarjolla on hauskoja pelailuja kanssaopiskelijoiden kanssa!</b></li>
          <li><b>Hinta? 8 € / hlö, sisältäen naposteltavaa, haalarimerkin, jonon ohituksen y2k-bileisiin ja bileiden haalarimerkin</b></li>
          <li><b>
            <Link
              href='https://link.webropol.com/s/pongi23-ilmo'
              className='link hover:text-accent'
              target='_blank'
              rel='noopener noreferrer'
              onClick={e => e.stopPropagation()}
            >
              Ilmoittautuminen
            </Link></b></li>
        </ul>
      </>
    )
  },
  {
    name: 'Pönkelijulkkarit ja wappurauhanjulistus',
    date: '2024-04-10',
    details: '18.00 @Kåren',
    image: '/ponkelijulkkarit23.webp',
    description: (
      <>
        <strong>Pönkelijulkkarit ja wappurauhanjulistus 10.4. klo 18 Kårenilla</strong>
        <p>Hyvä turkulainen teekkari, teekkarifuksi ja teekkarimielinen opiskelija, on tullut aika aloittaa kauan odotettu ajanjakso vuodesta, eli Turun Teekkariwappu 2024.</p>
        <p>Turun teekkariwappu aloitetaan wapunaloitusbileiden virallisilla etkoilla ja tietenkin Turun teekkareiden oman wappulehden, Pönkelin, julkaisulla. Pönkeli johdattelee kaikki turkulaiset opiskelijat wapputunnelmaan juhlavin menoin. Julkkareissa on tietenkin myös yllätysesiintyjiä, joita ei kannata missata. Kårenin baari palvelee koko tapahtuman ajan opiskelijaystävällisin hinnoin. Baarista saatavilla myös Pönkelin nimikkojuomaa “Teekkarin huuto”!</p>
        <p>Tapahtuma toimii virallisina etkoina wapunaloitusbileille ja tapahtumassa on ensimmäinen mahdollisuus lunastaa itselleen wapun haluituin tuote eli Pönkeli 2024! Tapahtuman jälkeen wappukansa vaeltaa yhdessä kohti Lygasia ja wapunaloitusbileitä!</p>
        <ul>
          <li><b>TL;DR</b></li>
          <li><b>Mitä</b> Pönkelijulkkarit ja wappuetkot</li>
          <li><b>Missä</b> Kåren, Hämeenkatu 22</li>
          <li><b>Milloin</b> 10.4.24 klo 18.00-21.00. Ovet auki klo 17.30</li>
          <li><b>Miksi</b> KOSKA TÄSTÄ SE WAPPU ALKAA</li>
          <li><b>Mitä Maksaa</b> 0€, narikka 3€</li>
          <li><b>Pukukoodi</b> Wappu/Pönkeli/haalarit</li>
        </ul>
        <hr className='my-3' />
        <b>ENGLISH</b>
        <strong>Pönkeli&apos;s publishing party and wappu pre-party 10.4 at Kåren</strong>
        <p>Dear teekkari, teekkarifuksi or teekkari-minded student, the time has come to begin the most expected period of the year; Turku&apos;s teekkariwappu 2024!</p>
        <p>Turku&apos;s teekkariwappu begins with the official pre-party for the wappu-starting-party, and of course by publishing Turku&apos;s teekkaris&apos; very own wappu magazine: Pönkeli! Pönkeli will take over and solemnly lead all students to wappu atmosphere. There will of course be a surprise entertainers that you do not want to miss. The bar will be open the whole event and has student-friendly prices. There bar will serve Pönkeli&apos;s very own drink “Teekkari&apos;s scream”!</p>
        <p>The event is the official pre-party for the wappu-starting-party and there is the first chance to redeem yourself the most wanted product of wappu, i.e. Pönkeli 2024! After the event the wappu nation wanders together towards Lygas and wappu-starting-party.</p>
        <ul>
          <li><b>TL;DR</b></li>
          <li><b>What?</b> Pönkeli&apos;s publishing party and wappu pre-party</li>
          <li><b>Where?</b> Kåren, Hämeenkatu 22</li>
          <li><b>When?</b> 10th of April at 6 PM till 9 PM. Starts at 5.30 PM</li>
          <li><b>Why?</b>  BECAUSE THIS IS THE STARTING OF WAPPU</li>
          <li><b>Price?</b> 0€, Cloakroom 3 €</li>
          <li><b>Dresscode?</b> Wappu/Pönkeli/over-alls</li>
        </ul>
      </>
    )
  },
  {
    name: 'Pönkelireivit 24',
    date: '2024-04-13',
    details: '19-05 @UG',
    image: '/ponkelireivit24.webp',
    description: (
      <>
        <b>lauantaina 13.4. @UG 19-05!</b>
        <p>Viime vuonna debytoineet menestyksekkäät Pönkelireivit palaavat entistä parempina. Reivit järjestetään tänä vuonna 13.4.2024 klo 19.00 alkaen.  Nimensä mukaisesti tarjolla on laaja kirjo elektronista tanssimusiikkia. Tänä vuonna esiintyjinä nähdään mm. GACHY X DLT, DJ Hexter feat. Thomas Trooper, Hvitr, DJ Erkku, DJ Fearinen ja Spettbros. Lähde siis elämäsi reiviseikkailuun Pönkelin matkassa. </p>
        <p>Tapahtumaan ilmoittautuminen tapahtuu Kideappissä 1.4. klo 10.00 alkaen
          {' '}
          <Link
            href='https://kide.app/events/e3b0dee8-0c67-4117-af2f-eaa7eed76245'
            target='_blank'
            className='link hover:text-accent transition-colors'
            rel='noopener noreferrer'
            onClick={e => e.stopPropagation()}
          >tämän linkin kautta.</Link>
        </p>
        <p>Reiveille mahtuu 120 nopeinta ilmoittautujaa. Paikka ilmoitetaan osallistujille ennen tapahtumaa. Tapahtuma on OPM.</p>
        <p>Luvassa on siis kovaa reivausta läpi yön mahtavassa seurassa, näitä reivejä et halua jättää väliin!</p>
        <ul>
          <li><b>TL;DR</b></li>
          <li><b>Mitä?</b> Pönkelireivit</li>
          <li><b>Missä?</b> UG (ilmoitetaan myöhemmin osallistujille)</li>
          <li><b>Milloin?</b> 13.4. klo 19.00-05.00</li>
          <li><b>Miksi?</b> Kaikille, jotka haluavat reivata sydämensä kyllyydestä</li>
          <li><b>Hinta?</b> 10€</li>
          <li><b>Pukukoodi?</b> Reivit/haalarit. Tapahtuma järjestetään lämpimissä sisätiloissa</li>
          <li><b>Mitä mukaan?</b> OPM, vesipullo, hyvät tanssikengät</li>
          <li><b>Ilmoittautuminen?</b>
            {' '}
            <Link
              href='https://kide.app/events/e3b0dee8-0c67-4117-af2f-eaa7eed76245'
              target='_blank'
              className='link hover:text-accent transition-colors'
              rel='noopener noreferrer'
              onClick={e => e.stopPropagation()}
            >
              Ilmoittautuminen täällä.
            </Link>
          </li>
        </ul>
        <hr className='my-3' />
        <b>ENGLISH</b>
        <strong>Pönkelirave 13.4. from 7 PM till 5 AM</strong>
        <p>Last year successfully debuted Pönkelirave returns to Turku&apos;s Teekkariwappu better than ever. The rave will be held on 13th of  April starting from 7 PM. Living up to its name there will be served a variety of electronic dance music. Such artist will be seen at the rave: GACHY X DLT, DJ Hexter feat. Thomas Trooper, Hvitr, DJ Erkku, DJ Fearinen and Spettbros. So come on and jump into a rave adventure of your life with Pönkeli!</p>
        <p>Enrolling will take place at KideApp and starts 1st of April at 10 PM
          {' '}
          <Link
            href='https://kide.app/events/e3b0dee8-0c67-4117-af2f-eaa7eed76245'
            target='_blank'
            className='link hover:text-accent transition-colors'
            rel='noopener noreferrer'
            onClick={e => e.stopPropagation()}
          >through this link.</Link>
        </p>
        <p>There are places for 120 fastest enrollers. Place will be announced to participants later. BYOB, Bring your own bottle.</p>
        <ul>
          <li><b>TL;DR</b></li>
          <li><b>What?</b> What? Pönkelirave</li>
          <li><b>Where?</b> Where? UG (tba)</li>
          <li><b>When?</b> When? Saturday the 13th of April from 7 PM till 5 AM.</li>
          <li><b>Why?</b> Why? To all of those, who want to rave their heart out.</li>
          <li><b>Price?</b> Tickets? 10 €</li>
          <li><b>Dresscode?</b> Dresscode? Rave/Overalls. The rave will be held inside.</li>
          <li><b>What to bring?</b> What to bring? water bottle, good dancing shoes, BYOB</li>
          <li><b>Enroll?</b>
            {' '}
            <Link
              href='https://kide.app/events/e3b0dee8-0c67-4117-af2f-eaa7eed76245'
              target='_blank'
              className='link hover:text-accent transition-colors'
              rel='noopener noreferrer'
              onClick={e => e.stopPropagation()}
            >
              Enroll here.
            </Link>
          </li>
        </ul>
      </>
    )
  },
  {
    name: 'Pönkelin FIA-cup',
    date: '2024-04-27',
    details: '18.00 @Taiteiden talolla',
    image: '/fia.webp',
    description: (
      <>
        <p>Olet varmaan ihmetellyt, mikä peli on tuo mystinen FIA, jota Åbo Akademin teekkarit erityisesti suosivat. Nyt sinulla on mahdollisuus päästä pelaamaan fiaa!</p>
        <p>FIA-cup järjestetään 27.4.2024 klo 18.00 Taiteiden talolla. FIA-cupissa kilpaillaan kahden henkilön joukkueissa isolla kimble laudalla. Pelinappuloina toimivat pienet shottilasit, joilla syödään toisten nappuloita. Juoma on laimeaa alkoholia tai alkoholitonta. Yhdessä pelissä on mukana neljä joukkuetta. Tapahtuma järjestetään 20 joukkueen turnauksena, jossa pelataan välierät ennen finaalia. Turnausta saa tulla myös seuraamaan!</p>
        <p>FIA on hauska seurapeli, jonka seuraaminenkin on hauskaa. Lähde rohkeasti mukaan teekkariwappuun paluun tehneeseen FIA-cupiin!</p>
        <p>Ilmoittautuminen Kideappissa 4.4. klo 10.00 alkaen:
          {' '}
          <Link
            href='https://kide.app/events/d2a57bc7-2919-4594-b5fc-e2d1fa1957b5'
            target='_blank'
            className='link hover:text-accent transition-colors'
            rel='noopener noreferrer'
            onClick={e => e.stopPropagation()}
          >
            Kide.appissa
          </Link></p>
        <ul>
          <li><b>TL;DR</b></li>
          <li><b>Mitä?</b> Pönkelin FIA-cup</li>
          <li><b>Missä?</b> Taiteiden talo, Nunnankatu 4</li>
          <li><b>Milloin?</b> 27.4. klo 18</li>
          <li><b>Miksi?</b> FIA on hauska seurapeli!</li>
          <li><b>Hinta?</b> 15 €, hinta sisältää juomat</li>
          <li><b>Ilmoittautuminen</b>
            {' '}
            <Link
              href='https://kide.app/events/d2a57bc7-2919-4594-b5fc-e2d1fa1957b5'
              target='_blank'
              className='link hover:text-accent transition-colors'
              rel='noopener noreferrer'
              onClick={e => e.stopPropagation()}
            >
              Kide.appissa
            </Link>
          </li>
        </ul>
      </>
    )
  },
  {
    name: 'Pönkeli Games 2024',
    date: '2024-10-10',
    details: null,
    image: '/ponkeligames2024.webp',
    description: (
      <>
        <strong>Sporttiseikkailu kampuksesi ympäri!</strong>
        <p>Pönkeli Games eli PöNGi on täällä taas ja ne kisaillaan tänä vuonna 10. lokakuuta klo 17 alkaen! PöNGissä pääset ottamaan mittaa muista joukkueista Amazing Race -tyylisellä rastikierroksella. Rastit vaativat kekseliäisyyttä, yhteistyötä ja ripeitä jalkoja. Kisan jälkeen voittajajoukkue lunastaa itselleen huikean palkinnon, ja kaikki osallistujat pääsevät virkistäytymään TYYn saunalla ennen myöhempiin illanviettoihin siirtymistä.</p>
        <p>Kokoa siis neljän (4) hengen joukkueesi ja valmistaudu syksyn hauskimpaan ja vauhdikkaimpaan seikkailuun, kun Amazing PöNGi alkaa! Lipun hinta on vaivaiset 6 € / henkilö, joka sisältää osallistumisen kisaan, upean haalarimerkin sekä palauttavaa syötävää ja juotavaa saunalla kisan jälkeen.</p>
        <p>Ilmoittautuminen kisaan alkaa 30.9. klo 12.00. Ilmoittautumisen jälkeen joukkueilla lähetetään sähköpostitse tarkempia ohjeita PöNGiin valmistautumisesta.</p>
        <ul>
          <li><b>TL;DR</b></li>
          <li><b>Mitä?</b> Pönkeli Games 2024!</li>
          <li><b>Missä?</b> Turussa, lähtö TYYn saunalta!</li>
          <li><b>Milloin?</b> Torstaina 10.10., lähtö klo 17!</li>
          <li><b>Miksi?</b> Maine, kunnia ja huikeat palkinnot!</li>
          <li><b>Hinta?</b> 6€/osallistuja</li>
          <li><b>Palju?</b> Ei, mut sauna on!</li>
          <li><b>Ilmoittautuminen</b>
            {' '}
            <Link
              href='https://kide.app/events/4b2b1a41-21db-498d-b723-d883ba5a2842'
              target='_blank'
              className='link hover:text-accent transition-colors'
              rel='noopener noreferrer'
              onClick={e => e.stopPropagation()}
            >
              Kide.appissa
            </Link>
          </li>
        </ul>
        <hr className='my-3' />
        <b>ENGLISH</b>
        <strong>Sporttiseikkailu kampuksesi ympäri!</strong>
        <p>The Pönkeli Games aka PöNGi is here again and they will be held this year on 10th of October starting at 17:00! In PöNGi you will take on other teams in an Amazing Race-style checkpoint race. The tasks require ingenuity, cooperation and fast feet. After the race, the winning team will claim a stunning prize, and all participants will be able to freshen up in the TYY sauna.</p>
        <p>So get your team of four (4) together and get ready for the most fun and action-packed adventure of this autumn when the Amazing PöNGi begins! The ticket price is mere 6 € per person, which includes entry to the race, a great jumpsuit stamp and refreshing snacks and drinks in the sauna after the race.</p>
        <p>Registration for the race starts on 30th of September at 12.00. After the registration closes, all teams will be sent an email with more detailed instructions on how to prepare for the PöNGi.</p>
        <ul>
          <li><b>TL;DR</b></li>
          <li><b>What?</b> Pönkeli Games 2024!</li>
          <li><b>Where?</b> In Turku, starting from TYY sauna!</li>
          <li><b>When?</b> Thursday 10.10., start at 17:00!</li>
          <li><b>Why?</b> Fame, glory and amazing prizes!</li>
          <li><b>Price?</b> 6€/participant</li>
          <li><b>Hot tub?</b> No, but the sauna is warm!</li>
          <li><b>Enroll</b>
            {' '}
            <Link
              href='https://kide.app/events/4b2b1a41-21db-498d-b723-d883ba5a2842'
              target='_blank'
              className='link hover:text-accent transition-colors'
              rel='noopener noreferrer'
              onClick={e => e.stopPropagation()}
            >
              Kide.appissa
            </Link>
          </li>
        </ul>
      </>
    )
  },
  {
    name: 'Pönkelijulkkarit ja wappurauhanjulistus',
    date: '2025-04-08',
    details: '18.00 @Kåren',
    image: '/ponkelijulkkarit25.webp',
    description: (
      <>
        <strong>Pönkelijulkkarit ja wappurauhanjulistus 8.4. klo 18 Kårenilla</strong>
        <p>Wappu on täällä! Arvon turkulainen teekkari, teekkarifuksi ja teekkarimielinen opiskelija Pönkeli 2025 on taas täällä!</p>
        <p>Turun teekkariwappu käynnistyy virallisilla wapunaloituksen etkoilla eli Turun teekkareiden oman wappulehden Pönkelin julkaisulla. Pönkeli virittää turkulaiset opiskelijat juhlatunnelmaan näyttävällä tavalla. Julkkareissa yllätyksiä sekä viihdettä. Kårenin baari palvelee koko tapahtuman ajan opiskelijaystävällisin hinnoin.</p>
        <p>Tapahtuma toimii virallisina etkoina wapunaloitusbileille ja tapahtumassa on ensimmäinen mahdollisuus ostaa puhdasta sekä kuivaa huumoria tihkuva Pönkeli 2025! Wapunaloitusbileet starttaavat Vegasissa klo 22!</p>
        <ul>
          <li><b>TL;DR</b></li>
          <li><b>Mitä</b> Pönkelijulkkarit ja wappuetkot</li>
          <li><b>Missä</b> Kåren, Hämeenkatu 22</li>
          <li><b>Milloin</b> 8.4.24 klo 18.00-21.00. Ovet auki klo 17.30</li>
          <li><b>Miksi</b> WAPPUUUUU! 🥳</li>
          <li><b>Mitä Maksaa</b> 0€, narikka 3€</li>
          <li><b>Pukukoodi</b> Wappu/Pönkeli/haalarit</li>
        </ul>
        <hr className='my-3' />
        <b>ENGLISH</b>
        <strong>Pönkeli&apos;s publishing party and wappu pre-party 8.4 at Kåren</strong>
        <p>Dear teekkari, teekkarifuksi or teekkari-minded student, the time has come to begin the most expected period of the year; Turku&apos;s teekkariwappu 2025!</p>
        <p>Turku&apos;s teekkariwappu begins with the official pre-party for the wappu-starting-party, and of course by publishing Turku&apos;s teekkaris&apos; very own wappu magazine: Pönkeli! Pönkeli will take over and solemnly lead all students to wappu atmosphere. There will of course be a surprise entertainers that you do not want to miss. The bar will be open the whole event and has student-friendly prices.</p>
        <p>The event is the official pre-party for the wappu-starting-party and there is the first chance to redeem yourself the most wanted product of wappu, i.e. Pönkeli 2025! After the event the wappu nation wanders together towards Vegas and wappu-starting-party.</p>
        <ul>
          <li><b>TL;DR</b></li>
          <li><b>What?</b> Pönkeli&apos;s publishing party and wappu pre-party</li>
          <li><b>Where?</b> Kåren, Hämeenkatu 22</li>
          <li><b>When?</b> 8th of April at 6 PM till 9 PM. Starts at 5.30 PM</li>
          <li><b>Miksi</b>WAPPUUUUU! 🥳</li>
          <li><b>Price?</b> 0€, Cloakroom 3 €</li>
          <li><b>Dresscode?</b> Wappu/Pönkeli/over-alls</li>
        </ul>
      </>
    )
  },
  {
    name: 'Pönkeli Games IV',
    date: '2025-11-24',
    details: null,
    image: null,
    description: (
      <>
        <strong>FI/EN</strong>
        <strong>Fast-paced checkpoint race around your campus!</strong>
        <p>Pönkeli Games IV  kisaillaan tänä vuonna 24. marraskuuta klo 17 alkaen! Kisoissa pääset ottamaan joukkueesi kanssa mittaa muista opiskelijoista urheilullisella rastikierroksella. Rastit vaativat kekseliäisyyttä, yhteistyötä ja voimaa. Kisan jälkeen voittajajoukkue lunastaa itselleen huikean palkinnon, ja kaikki osallistujat pääsevät virkistäytymään saunalla.</p>
        <p>Kokoa siis neljän (4) hengen joukkueesi ja valmistaudu syksyn hauskimpaan ja vauhdikkaimpaan seikkailuun, kun neljännet Pönkeli Gamesit alkavat! Lipun hinta on vaivaiset 6 € / henkilö, joka sisältää osallistumisen kisaan, upean haalarimerkin sekä palauttavaa syötävää ja juotavaa saunalla kisan jälkeen.</p>
        <p>Ilmoittautuminen kisaan alkaa 18.11. klo 12.00. Ilmoittautumisen jälkeen joukkueilla lähetetään sähköpostitse tarkempia ohjeita rastikierrokseen valmistautumisesta (varustus: urheilullinen).</p>
        <ul>
          <li><b>TL;DR</b></li>
          <li><b>Mitä?</b> Pönkeli Games IV</li>
          <li><b>Missä?</b> Turussa, lähtö TYYn saunalta!</li>
          <li><b>Milloin?</b> Maanantaina 24.11., lähtö klo 17!</li>
          <li><b>Miksi?</b> Maine, kunnia ja huikeat palkinnot!</li>
          <li><b>Hinta?</b> 6€/osallistuja</li>
          <li><b>Palju?</b> Ei, mut sauna on!</li>
          <li><b>Ilmoittautuminen</b> TBA </li>
        </ul>
        <hr className='my-3' />
        <b>ENGLISH</b>
        <strong>Fast-paced checkpoint race around your campus!</strong>
        <p>The Pönkeli Games are here again for the fourth time and they will be held this year on 24th of November starting at 17:00! In the Games you will take on other teams in an Amazing Race-style fast checkpoint race. The tasks require ingenuity, cooperation, strenght and fast feet. After the race, the winning team will claim a stunning prize, and all participants will be able to freshen up in the sauna.</p>
        <p>So get your team of four (4) together and get ready for the most fun and action-packed adventure of this autumn when the Pönkeli Games begin! The ticket price is mere 6 € per person, which includes entry to the race, an overall badge and refreshing snacks and drinks in the sauna after the race.</p>
        <p>Registration for the race starts on 18th of November at 12.00. After the registration closes, all teams will be sent an email with more detailed instructions on how to prepare for the checkpoint race (equipment: athletic).</p>
        <ul>
          <li><b>TL;DR</b></li>
          <li><b>What?</b> Pönkeli Games IV</li>
          <li><b>Where?</b> In Turku, starting from TYY sauna!</li>
          <li><b>When?</b> Monday 24.11., start at 17:00!</li>
          <li><b>Why?</b> Fame, glory and amazing prizes!</li>
          <li><b>Price?</b> 6€/participant</li>
          <li><b>Hot tub?</b> No, but the sauna is warm!</li>
          <li><b>Registration</b> TBA </li>
        </ul>
      </>
    )
  },
]

export default events
