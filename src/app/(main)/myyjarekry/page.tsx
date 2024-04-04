
'use client'
import Image from 'next/image'
import Link from 'next/link'

import CardFormPage from '@/components/CardFormPage'
import SellerForm from '@/components/SellerForm'

const myyjarekry = () => {
  return (
    <div>
      <CardFormPage
        header={(
          <h1>Ryhdy wappulehden myyjäksi!</h1>
        )}
        side={(
          <>
            <h2 className='text-3xl'>Nyt tulee Pönkeliä!</h2>
            <p>
              Pönkeli kaipaa jälleen reippaita ja ansiokkaita opiskelijoita myymään vuoden 2024 hupaisinta tuotetta eli Turun Yliopiston teekkareiden wappulehti <b>Pönkeliä</b>.
            </p>
            <p>
              Pönkelin myyjänä pääset nauttimaan vain myyjille suoduista eduista ja palkinnoista. Myyjäksi ilmoittautuminen ei sido sinua mihinkään ja myynti perustuu vapaaehtoisuuteen.
            </p>
          </>
        )}
        form={(
          <SellerForm />
        )}
        details={(
          <>
            <h2 className='text-3xl'>
              Kiinnostuitko? Lue lisää
            </h2>
            <p>
              Wappulehtien myynti on hauskaa puuhaa, ja niiden myyntiä ei tarvitse stressata tai pelätä joutuvansa myymään niitä yksin, sillä pönkelöiset myyvät lehtiä kanssasi wappuna! Wappulehtiä ei tarvitse lunastaa etukäteen, ja kaikki myymättömät myyntikunnossa olevat wappulehdet saa palauttaa takaisin pönkelöisille.
            </p>
            <p>
              Myyt siis vain sen verran kuin haluat ja jaksat! Myyjäksi voit ilmoittautua vaikka heti!
            </p>
            <p>
              Pönkeli hemmottelee myyjiänsä palkitsemalla eri myyntitasolle päässeet myyjänsä:

            </p>
            <ol>
              <li><b className='text-primary brightness-110'>Taimi</b> - mainion myyjän siemen, 3 myytyä lehteä</li>
              <li><b className='text-primary brightness-110'>Vesa</b> - hyvin juurtunut myyjä, 5 myytyä lehteä</li>
              <li><b className='text-primary brightness-110'>Hirsi</b> - vakaasti tuulessa seisova myyjä, 10 myytyä lehteä</li>
              <li><b className='text-primary brightness-110'>Jalo</b> - komeasti patinoitunut huippumyyjä, 20 myytyä lehteä</li>
            </ol>
            <p>
              Seuraava myyntitaso pitää sisällään aina myös edellisen tason palkinnot. Lisäksi palkitaan kolme tehokkainta myyjää ruhtinaallisesti <b className='text-primary brightness-110'>100 €</b>:n lahjakorteilla! Killoille ja ainejärjestöille jaetaan lisäksi kunniamainintoja ansioituneesta myynnistä.
            </p>
            <Image
              src={'/ponkelimerkki.webp'}
              alt='Myyjäpalkinto '
              width={180}
              height={144}
              className='float-start me-12 not-prose my-3'
            />
            <p className='font-bold'>Palkinnot myyjätasojen mukaan:</p>
            <ol>
              <li>Haalarimerkki</li>
              <li>Haalarimerkin lisäosa 1, Pönkeliheijastin</li>
              <li>Haalarimerkin lisäosa 2, Pönkelilasit</li>
              <li>Haalarimerkin lisäosa 3, Pönkelitermospullo</li>
            </ol>
            <p>
              Lisäksi kaikille myyjille on oma <b>PÖNKELIN SKUMPPA-JOOGA</b>, jonka jälkeen tarjotaan virkistävät smoothiet ennen Grilliä & Kyykkää 23.4. klo 10.15-11.15 Educariumin salissa. Luvassa on ihana rentouttava jooga hyvässä seurassa.
              <Image
                src={'/ponkelilasit.webp'}
                alt='Myyjäpalkinto '
                width={296}
                height={370}
                className='float-end ms-3 not-prose my-3'
              />
            </p>
            <p>
              Liity myyjien telegram-ryhmään jo nyt, niin pysyt kärryillä kaikesta myyjiin liittyvästä <Link href='https://t.me/+2RmZdlKJogQxYTE8'>Täältä</Link>
            </p>
            <p>
              <b className='text-primary brightness-110'>HOXHOX!</b>  Teekkarifukseille luvassa fuksipisteitä wappulehden myymisestä! Pönkelipisteen saat Pönkelitoimikunnan jäseneltä, eli et omalta tuutoriltasi. Pisteen saat hyvissä ajoin. Pisteen saat myytyäsi vähintään yhden lehden. Pisteen saat hyvissä ajoin.
            </p>
            <Image
              src={'/ponkelitermos.webp'}
              alt='Myyjäpalkinto '
              width={88}
              height={275}
              className='float-start me-3 not-prose my-3'
            />
            <p>
              Miten myynti käytännössä toimii? <b>Siitä kuulet lisää</b> seuraavassa myyjäinfossa 28.3.24 klo 16.00 Zoomissa. Tämän lisäksi pidetään vielä myyjäkoulu Zoomissa juuri ennen wappua 8.4.24 klo 16.00. Tilaisuudet kestävät 30-45 minuuttia ja saat siellä paljon tietoa ja vastauksia kysymyksiisi. Linkit jaetaan <Link href='https://t.me/+2RmZdlKJogQxYTE8'>myyjä tg-ryhmässä</Link>
            </p>
            <p>
            </p>
            <i>
              Ilmoittautumistiedot poistetaan Wapun jälkeen.
            </i>
          </>
        )}
      />
    </div>

  )
}

export default myyjarekry
