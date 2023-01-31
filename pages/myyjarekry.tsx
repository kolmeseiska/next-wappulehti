
import CardFormPage from '../components/CardFormPage'
import SellerForm from '../components/SellerForm'

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
              Kaipaamme jälleen reippaita ja ansiokkaita opiskelijoita myymään vuoden 2023 hupaisinta tuotetta eli Turun Yliopiston teekkareiden wappulehteä <b className='text-primary brightness-110'>Pönkeliä.</b>
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
              Wappulehtien myynti on hauskaa puuhaa, ja niiden myyntiä ei tarvitse stressata tai pelätä joutuvansa myymään yksin, sillä pönkelöiset myyvät lehtiä kanssasi wappuna! Tänä vuonna wappulehtiä ei myöskään tarvitse lunastaa etukäteen, ja kaikki myymättömät myyntikunnossa olevat wappulehdet saa palauttaa takaisin pönkelöisille.
            </p>
            <p>
              Myyt siis vain sen verran kuin haluat ja jaksat!
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
              Seuraava myyntitaso pitää sisällään aina myös edellisen tason palkinnot. Tämän lisäksi palkitaan koko Pönkelin tehokkain eli paras myyjä ruhtinaallisesti! Killoille ja ainejärjestöille jaetaan lisäksi kunniamainintoja ansioituneesta myynnistä. 
            </p>
            <p>
              <strong>Kaikkia Pönkelin myyjiä myös hemmotellaan wapun jälkeen</strong> erillisillä virkkareilla, joihin pääsevät vain Pönkelin myyjät. 
            </p>
            <p>
              Lisätietoja kaikista palkinnoista tulossa pian.
            </p>
            <p>
              <b className='text-primary brightness-110'>HOXHOX!</b> Teekkarifukseille luvassa fuksipisteitä wappulehden myymisestä!
            </p>
            <p>
              Miten myynti käytännössä toimii? Siitä kuulet lisää kevään aikana, jolloin järjestetään mm. myyjäinfo ja myyjäkoulutus. Ilmoittaudu siis nopeasti Pönkelin myyjäksi!
            </p>
            <i>
              psst. 31.1. Talviriehassa myyjäksi ilmoittautuneet pääsevät wapunaloitusbileiden virallisten etkojen eli Pönkelijulkkareiden eturiviin VIP-alueelle, tämä etu vain talviriehassa myyjäksi ilmoittautuneille!
            </i>
            <p>
            </p>
            <i>Tiedot poistetaan valintojen jälkeen.</i>
          </>
        )}
      />

    </div>
    
  )
}

export default myyjarekry
