'use client'

import Link from 'next/link'

const page = () => {
  return (
    <div className='container mx-auto px-4 justify-center py-16 max-w-[75ch]'>
      <h1 className='text-6xl font-extrabold pb-10 text-center'>
        Mikä Pönkeli ja Pönkelipiste?
      </h1>
      <div className='prose prose-xl mx-auto space-y-5'>
        <p>
          Pönkeli on turkulainen wappulehti, joka ilmestyi ensimmäisen kerran vuonna 2021. Lehti ilmestyy vuosittain wapun aikaan kaiken kansan iloksi. Wappulehdet ovatkin tärkeä osa teekkareiden ja opiskelijoiden historiaa ja kulttuuria ylipäänsä - niiden avulla on rahoitettu isompiakin rakennusprojekteja ja tuettu hyväntekeväisyyttä, sekä annettu yhteisölle takaisin.
        </p>
        <p>
          Pönkelin tavoitteena on yhdistää kaikkia turkulaisia teekkareita ja opiskelijoita kaikilta kampuksilta. Pönkeli haluaa levittää teekkarihuumorin ilosanomaa kaikelle kansalle ja jatkaa wappulehtien perinnettä. Pönkeli noudattaa toiminnassaaan yhdenvertaisuuden ja turvallisen tilan periaatteita.
        </p>
        <p>
          <strong>No entä sitten se Pönkelipiste?</strong> Pönkelipiste löytyy jokaisen teekkarifuksin fuksipassista. Pisteen voit suorittaa fuksivuotesi aikana toimimalla Pönkelin myyjänä tai tuottamalla Pönkeliin sisältöä joko grafiikan, piirroksen, humoristisen tekstin tai vitsin Pönkelin vitsikilpailuun. Pisteen saat, kun tuotoksesi päätyy lehteen, ja siitä ilmoitetaan hyvissä ajoin. <b>Pönkelipisteen saat passiisi kun myyt 3 Pönkeliä.</b>
        </p>
        <p>
          Pönkelin myyjäksi ilmoittautuminen ei sido sinua vielä mihinkään ja se perustuu vapaaehtoisuuteen. Aiempina vuosina myyjiä on palkittu mm. virkistäytymisellä, palkinnoilla, lahjakorteilla, aamupaloilla jne. Lähde siis Pönkelin myyjäksi vaikka heti <Link href='/myyjarekry'>täältä!</Link>
        </p>
        <p>
          Myyjänä toimimisesta ja Pönkelin vitsikilpailusta kuulet lisää Pönkelin instagramista, tiktokista, kiltasi tiedotuskanavista sähköpostitse ja täältä nettisivuilta!
        </p>
      </div>
    </div>
  )
}

export default page
