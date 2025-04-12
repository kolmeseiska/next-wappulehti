const saleTimes: { date: string, time: string, place: string }[] = [
  { date: '2025-04-09', time: '12-16', place: 'Osakuntasali, Rehtorinpellonkatu 4 B' },
  { date: '2025-04-10', time: '17-19', place: 'Agora, Turun Yliopisto' },
  { date: '2025-04-12', time: '15-18', place: 'Proffan Kellari' },
  { date: '2025-04-13', time: '14-17', place: 'Osakuntasali, Rehtorinpellonkatu 4 B' },
  { date: '2025-04-14', time: '16-18', place: 'Osakuntasali, Rehtorinpellonkatu 4 B' },
  { date: '2025-04-16', time: '17-20', place: 'Polkuauto Grand Prix, Varvintori' },
  { date: '2025-04-17', time: '12-16', place: 'Yliopistonmäki' },
  { date: '2025-04-21', time: '12-20', place: 'Kuuvuoren kenttä' },
  { date: '2025-04-23', time: '16-18', place: 'Osakuntasali, Rehtorinpellonkatu 4 B' },
  { date: '2025-04-26', time: '12-16', place: 'Kauppatori' },
  { date: '2025-04-30', time: '12-13.30', place: 'Yhteislakitus, Tuomiokirkon edusta' },
  { date: '2025-05-01', time: 'koko päivä', place: 'Teekkarikaste jokiranta/Wappupiknik Vartiovuori' },
]

const getCurrentDate = () => {
  return new Date().toISOString().slice(0, 10)
}

const weekDays = ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La']
const getDay = (date: string) => weekDays[new Date(date).getDay()]

const Sales = () => {
  const currentISODate = getCurrentDate()
  return (
    <div className='overflow-x-auto w-full'>
      <table className='table'>
        <thead className='text-nowrap text-sm'>
          <tr className='border-amber-800 border-opacity-10 text-[#9A6869]'>
            <th>Päivä</th>
            <th>Aika</th>
            <th>Paikka</th>
          </tr>
        </thead>
        <tbody>
          {saleTimes.map(({ date, time, place }) => {
            const isPast = currentISODate > date
            const isToday = currentISODate === date
            const day = getDay(date)

            const formattedDate = new Intl.DateTimeFormat('fi-FI', {
              day: 'numeric',
              month: 'numeric'
            }).format(new Date(date))

            const noSales = time === '' || place === ''
            const isDisabled = isPast || noSales

            return (
              <tr
                key={date}
                className={`text-sm border-amber-800 border-opacity-10
                  ${isDisabled ? 'text-stone-400' : ''}
                  ${isToday ? 'bg-amber-600 text-amber-50' : ''}
                `}
              >
                <td>{day} {formattedDate}</td>
                <td>{time || 'Ei myyntiä'}</td>
                <td>{place || '-'}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p className='text-amber-900 py-4'>
        Myyntiaikoihin sekä ja -paikkoja saattaa tulla wapun aikana muutoksia, joten seuraa sivua sekä someamme.
      </p>
    </div>
  )
}

export default Sales
