const saleTimes: { date: string, time: string, place: string }[] = [
  { date: '2026-04-10', time: '12-16', place: 'Osakuntasali, Rehtorinpellonkatu 4 B' },
  { date: '2026-04-13', time: '12-14', place: 'Osakuntasali, Rehtorinpellonkatu 4 B' },
  { date: '2026-04-15', time: '14-16', place: 'Osakuntasali, Rehtorinpellonkatu 4 B' },
  { date: '2026-04-18', time: '12-14', place: 'Kauppatori' },
  { date: '2026-04-20', time: '12-14', place: 'Osakuntasali, Rehtorinpellonkatu 4 B' },
  { date: '2026-04-22', time: '16-18', place: 'Osakuntasali, Rehtorinpellonkatu 4 B' },
  { date: '2026-04-23', time: '18-20', place: 'Polkuauto Grand Prix, Varvintori' },
  { date: '2026-04-24', time: '15-17', place: 'Kauppatori' },
  { date: '2026-04-27', time: '14-16', place: 'Osakuntasali, Rehtorinpellonkatu 4 B' },
  { date: '2026-04-29', time: '14-18', place: 'Osakuntasali, Rehtorinpellonkatu 4 B' },
  { date: '2026-04-30', time: '12-14', place: 'Yhteislakitus, Tuomiokirkon edusta' },
  { date: '2026-05-01', time: '12-16', place: 'Teekkarikaste jokiranta & Vappupiknik Vartiovuori' },
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
          {currentISODate <= '2026-04-26' && (
            <tr className='text-sm border-amber-800 border-opacity-10'>
              <td>13.4.–26.4.</td>
              <td>10-18</td>
              <td>Wappupako, Educariumin ja Publicumin aukio</td>
            </tr>
          )}
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