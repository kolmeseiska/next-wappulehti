
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
              Pönkelin myyjänä pääset nauttimaan vain myyjille suoduista eduista, joita ovat aiempina vuosina olleet: myyjäaamiainen, skumppakaljajooga, saunailta sekä vuosittain vaihtuvat palkinnot.
            </p>
            <p>
              Myyjille on myös oma myyjämerkki. Myyjänä pääset tutustumaan muihin ihmisiin - opiskelijoihin ja tavan tallaajiin, sekä pitämään hauskaa. Fuksit saavat myyjänä toimimisesta pisteen fuksipassiinsa!
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
              Myyjäksi voit lähteä oheisen lomakkeen kautta. Ilmoittaudu myyjäksi vaikka heti! Ajoissa ilmoittautuneille on eturivin paikka virvokkeineen päräyttävässä Turun teekkariwapun aloittavassa tapahtumassa - Pönkelijulkkareissa!
            </p>
            <p>
              Pönkelin myyjänä pääset nauttimaan vain myyjille suoduista eduista ja palkinnoista. Myyjäksi ilmoittautuminen ei sido sinua mihinkään ja myynti perustuu vapaaehtoisuuteen.
            </p>
            <h2>Pelottaako?</h2>
            <p>
              Älä Huoli! Wappulehtien myynti on hauskaa puuhaa, eikä niiden myyntiä tarvitse stressata tai pelätä joutuvansa myymään niitä yksin, sillä pönkelöiset myyvät lehtiä kanssasi koko wapun ajan. Wappulehtiä ei myöskään tarvitse lunastaa etukäteen, ja kaikki myymättömät myyntikunnossa olevat wappulehdet saa palauttaa takaisin pönkelöisille. Myyt siis vain sen verran kuin haluat ja jaksat. No nyt viimeistään kannattaa lähteä myyjäksi!
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
