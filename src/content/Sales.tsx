import React from 'react'

type SaleEvent = { 
  date: string, 
  description: string,
  time?: string
 }

type SaleProps = {
  saleEvent:SaleEvent
}

const SaleTime = ({ saleEvent }: SaleProps) => {
  const currentISODate = new Date().toISOString().slice(0, 10)
  const isToday = currentISODate === saleEvent.date
  const isPast = saleEvent.date < currentISODate
  // Add strikethrough if event is past
  const Wrapper = isPast ? 's' : 'div'
  const wrapperClassName = isPast
    ?'flex text-red-400'
    : 'flex'
  return (
    <li>
      <Wrapper className={wrapperClassName}>
        <div className={'inline-block w-[12ch] flex-shrink-0'}>
          <b className={isToday ? 'font-bold' : ''}>
            {new Date(saleEvent.date).toLocaleDateString('fi-FI')}
          </b>
          <br />
          {saleEvent.time}
        </div>
        <div>
          {saleEvent.description}
        </div>
      </Wrapper>
    </li>
  )
}

const saleTimes:SaleEvent[] = [
  { date: '2023-04-12', description: 'Pönkelin julkistustilaisuus, Kåren', time: '18.00 - 21.00' },
  { date: '2023-04-13', description: 'Pönkeliständi, Osakuntasalin edusta, Rehtorinpellonkatu 4', time: '10.00 - 14.00' },
  { date: '2023-04-14', description: 'Pönkeliständi, Osakuntasalin edusta, Rehtorinpellonkatu 4', time: '12.00 - 18.00' },
  { date: '2023-04-17', description: 'Pönkeliständi, Yliopistonmäki (huonolla säällä Naturan aula)', time: '12.00 - 16.00' },
  { date: '2023-04-18', description: 'Pönkeliständi, Yliopistonmäki (huonolla säällä Naturan aula)', time: '14.00 - 18.00' },
  { date: '2023-04-19', description: 'Pönkeliständi, Pharmacity 1. krs', time: '12.00 - 16.00' },
  { date: '2023-04-20', description: 'Pönkeliständi, Yliopistonmäki (huonolla säällä Naturan aula)', time: '13.00 - 15.00' },
  { date: '2023-04-21', description: 'Pönkeliständi, Yliopistonmäki (huonolla säällä Naturan aula)', time: '12.00 - 16.00' },
  { date: '2023-04-23', description: 'Pönkeliständi,, Kauppatori', time: '14.00 - 17.00' },
  { date: '2023-04-24', description: 'Pönkelin Wappuvälitunti, Kuuvuoren kenttä, Ruukuntekijänkuja 2', time: '12.00 - 16.00' },
  { date: '2023-04-26', description: 'Grilli & Kyykkä, Kuuvuoren kenttä, Ruukuntekijänkuja 2', time: '12.00 - 18.00' },
  { date: '2023-04-27', description: 'Pönkeliständi, Osakuntasalin edusta, Rehtorinpellonkatu 4', time: '16.00 - 18.00' },
  { date: '2023-04-28', description: 'Pönkeliständi, Kauppatori', time: '12.00 - 18.00' },
  { date: '2023-04-29', description: 'Eldprowet, Osakuntasalin edusta, Rehtorinpellonkatu 4', time: '10.00 - 22.00' },
  { date: '2023-04-30', description: 'Pönkeli jalkatuu ympäri Turun keskustaa', time: '13.00 alkaen' },
  { date: '2023-05-01', description: 'Teekkarikaste & Wappupiknik, Itäinen Rantakatu 48 & Vartiovuori', time: '12.00' },
]

const Sales = () => {
  return (
    <div>
      <h3 className='text-3xl font-bold'>
        Pönkelin myyntiajat
      </h3>
      <p>
        Pönkeliä myydään useissa eri Turun teekkariwapun tapahtumissa. Pönkelin ständit tapahtumissa wappuna, josta voit käydä ostamassa vuoden halutuimman Pönkelin itsellesi:
      </p>
      <ul className='text-base'>
        {saleTimes.map(saleEvent => (
          <SaleTime key={saleEvent.date} saleEvent={saleEvent} />
        ))}
      </ul>
      <p>
        Näiden aikojen lisäksi voit ostaa lehden itsellesi Pönkeli-myyjiltä.
      </p>
    </div>
  )
}

export default Sales
