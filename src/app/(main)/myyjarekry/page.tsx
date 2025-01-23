
'use client'
import Image from 'next/image'

import CardFormPage from '@/components/CardFormPage'
import SellerForm from '@/components/SellerForm'

const myyjarekry = () => {
  return (
    <div>
      <CardFormPage
        header={(
          <h1>Lähde Pönkelin myyjäksi!</h1>
        )}
        side={(
          <>
            <h2 className='text-3xl'>Miksi?</h2>
            <p>
              Pönkelin myyjänä pääset nauttimaan vain myyjille suoduista eduista, joita ovat aiempina vuosina olleet esimerkiksi myyjäaamiainen, skumppakaljajooga, saunailta sekä vuosittain vaihtuvat palkinnot (aurinkolasit, powerbank, termospullo, juomapullo…). <b>Pönkelin 5. juhlavuoden kunniaksi palkinnot ovat entistä paremmat.</b> Myyjille on myös oma myyjähaalarimerkki. Myyjänä pääset tutustumaan muihin ihmisiin - opiskelijoihin ja tavan tallaajiin, sekä pitämään hauskaa. <b>Fuksit saavat myyjänä toimimisesta pisteen fuksipassiinsa! Fuksipisteen saat myymällä 3 lehteä,</b> ne saat myytyä helposti vaikka kiltiksellä vanhemmille tieteenharjoittajille.
            </p>
            <p>
              Lisäksi palkitaan kolme tehokkainta myyjää ruhtinaallisesti <b>100 €</b>:n lahjakorteilla! Killoille ja ainejärjestöille jaetaan lisäksi kunniamainintoja ansioituneesta myynnistä.
            </p>
          </>
        )}
        form={(
          <SellerForm />
        )}
        details={(
          <>
            <h2 className='text-3xl'>
              Miten?
            </h2>
            <p>
              Myyjäksi voit lähteä oheisen lomakkeen kautta. Ilmoittaudu myyjäksi vaikka heti! 23.1. Pubivisassa ilmoittautuneille on tarjolla eturivin paikka virvokkeineen päräyttävässä Turun teekkariwapun aloittavassa tapahtumassa - Pönkelijulkkareissa! Myyjäksi ilmoittautuminen oheisen linkin kautta varmistaa, että saat ajankohtaiset infot myynnistä ja palkinnoista. <b>Ilmoittautuminen ei vielä sido sinua mihinkään.</b> Kun haet ensimmäiset lehdet, allekirjoitat vasta myyjäsopimuksen, jonka turvin sinä saat palkintosi myytyjä lehtiä vastaan.

            </p>
            <p>
              Pönkelin myyjänä pääset nauttimaan vain myyjille suoduista eduista ja palkinnoista. Myyjäksi ilmoittautuminen ei sido sinua mihinkään ja myynti perustuu vapaaehtoisuuteen.
            </p>
            <h2>Pelottaako?</h2>
            <p>
              Älä Huoli! Wappulehtien myynti on hauskaa puuhaa, eikä niiden myyntiä tarvitse stressata tai pelätä joutuvansa myymään niitä yksin, sillä pönkelöiset myyvät lehtiä kanssasi koko wapun ajan. Wappulehtiä ei myöskään tarvitse lunastaa etukäteen, vaan tilität ne myynnin lopuksi. Kaikki myymättömät myyntikunnossa olevat wappulehdet saa palauttaa takaisin pönkelöisille. Myyt siis vain sen verran kuin haluat ja jaksat. No nyt viimeistään kannattaa lähteä myyjäksi!
            </p>
            <Image
              src={'/ponkelijulkkarit40.webp'}
              alt='Julkkarit'
              width={900}
              height={600}
              objectFit='contain'
            />

          </>
        )}
      />
    </div>

  )
}

export default myyjarekry
