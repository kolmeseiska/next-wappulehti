
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
            <p className='mb-3'>
              Pönkelin myyjänä pääset nauttimaan vain myyjille suoduista eduista, joita ovat aiempina vuosina olleet esimerkiksi myyjäbrunssi, skumppajooga, saunailta sekä vuosittain vaihtuvat palkinnot (aurinkolasit, powerbank, termospullo, juomapullo…). Myyjille on myös oma myyjähaalarimerkki. Myyjänä pääset tutustumaan muihin ihmisiin - opiskelijoihin ja tavan tallaajiin, sekä pitämään hauskaa. <b>Fuksit saavat myyjänä toimimisesta pisteen fuksipassiinsa! Fuksipisteen saat myymällä 4 lehteä,</b> ne saat myytyä helposti vaikka kiltahuoneella tai wapputapahtumissa vanhemmille tieteenharjoittajille.
            </p>
            <p className='mb-3'>
              Kaikista tehokkaimmat myyjät palkitaan myös lahjakorteilla!
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
            <p className='mb-3'>
              Myyjäksi voit lähteä oheisen lomakkeen kautta. Ilmoittaudu myyjäksi vaikka heti! Myyjäksi ilmoittautuminen oheisen linkin kautta varmistaa, että saat ajankohtaiset infot myynnistä ja myyjätoiminnasta. <b>Ilmoittautuminen ei vielä sido sinua mihinkään.</b> Myyjäsopimus allekirjoitetaan vasta ensimmäisiä lehtiä haettaessa.
            </p>
            <p className='mb-3'>
              Pönkelin myyjänä pääset nauttimaan vain myyjille suoduista eduista ja palkinnoista. Myyjäksi ilmoittautuminen ei sido sinua mihinkään ja myynti perustuu vapaaehtoisuuteen.
            </p>
            <p>Mikäli ilmoittaudut myyjäksi jo <b>Pönkelin pubivisassa 21.1.2026</b>, pääset <b>VIP-myyjäksi</b>. VIP-myyjät saavat ensimmäisenä lehdet haltuunsa heti Pönkelijulkkareiden jälkeen ja heille on tarjolla eturivin paikka virvokkeineen päräyttävässä Turun teekkariwapun aloittavassa tapahtumassa - Pönkelijulkkareissa!</p>
            <p>VIP-myyjäksi pääseminen edellyttää myyjäsopimuksen allekirjoittamista Pubivisassa! Jollet pääse paikanpäälle, mutta haluat VIP-myyjäksi, ole yhteydessä lehden toimitukseen!</p>
            <h2>Pelottaako?</h2>
            <p className='mb-3'>
              Älä Huoli! Wappulehtien myynti on hauskaa puuhaa, eikä niiden myyntiä tarvitse stressata tai pelätä joutuvansa myymään niitä yksin, sillä toimittajat myyvät lehtiä kanssasi koko wapun ajan. Wappulehtiä ei myöskään tarvitse lunastaa etukäteen, vaan tilität ne myynnin lopuksi. Kaikki myymättömät myyntikunnossa olevat wappulehdet saa palauttaa takaisin toimitukselle. Myyt siis vain sen verran kuin haluat ja jaksat. Viimeistään näillä kannustuksilla kannattaa lähteä myyjäksi!
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
