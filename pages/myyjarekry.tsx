
import CardFormPage from '../components/CardFormPage'
import SellerForm from '../components/SellerForm'

const myyjarekry = () => {
  return (
    <CardFormPage
      header={(
        <>
          <h1>Ryhdy wappulehden myyjäksi!</h1>
          <h2 className='text-3xl'>Nyt tulee Pönkeliä!</h2>
        </>
      )}
      side={(
        <>
          <h2 className='text-3xl'>Myyjärekry</h2>
          <p>
            Kaikkia hyviä hommia.
          </p>
        </>
      )}
      form={(
        <SellerForm />
      )}
      details={(
        <>
          <h2>
            Mitä se vaatii?
          </h2>
          <p>
            Myyt ja nautit. Lisää iloa wappuna
          </p>
          <i>Tiedot poistetaan yhteydenoton jälkeen.</i>
        </>
      )}
    />
  )
}

export default myyjarekry
