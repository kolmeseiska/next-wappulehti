
const saleTimes = [
  { day: 'ke', date: '2025-04-09', time: '14-19', place: 'Osakuntasali' },
  { day: 'to', date: '2025-04-10', time: '14-19', place: 'Osakuntasali' },
  { day: 'pe', date: '2025-04-11', time: '14-19', place: 'Osakuntasali' },
  { day: 'la', date: '2025-04-12', time: '12-19', place: 'Osakuntasali' },
  { day: 'su', date: '2025-04-13', time: '11-15', place: 'Osakuntasali' },
  { day: 'ma', date: '2025-04-14', time: '12-16', place: 'Osakuntasali' },
  { day: 'ti', date: '2025-04-15', time: '15-19', place: 'Osakuntasali' },
  { day: 'ke', date: '2025-04-16', time: '12-19', place: 'Osakuntasali' },
  { day: 'to', date: '2025-04-17', time: '12-19', place: 'Osakuntasali' },
  { day: 'pe', date: '2025-04-18', time: '15-19', place: 'Osakuntasali' },
  { day: 'la', date: '2025-04-19', time: '15-19', place: 'Osakuntasali' },
  { day: 'su', date: '2025-04-20', time: '12-16', place: 'Osakuntasali' },
  { day: 'ma', date: '2025-04-21', time: '12-16', place: 'Osakuntasali' },
  { day: 'ti', date: '2025-04-22', time: '15-19', place: 'Osakuntasali' },
  { day: 'ke', date: '2025-04-23', time: '15-19', place: 'Osakuntasali' },
  { day: 'to', date: '2025-04-24', time: '15-19', place: 'Osakuntasali' },
  { day: 'pe', date: '2025-04-25', time: '15-19', place: 'Osakuntasali' },
  { day: 'la', date: '2025-04-26', time: '15-19', place: 'Osakuntasali' },
  { day: 'su', date: '2025-04-27', time: '12-16', place: 'Osakuntasali' },
  { day: 'ma', date: '2025-04-28', time: '12-16', place: 'Osakuntasali' },
  { day: 'ti', date: '2025-04-29', time: '15-19', place: 'Osakuntasali' },
  { day: 'ke', date: '2025-04-30', time: '15-17', place: 'Osakuntasali' },
  { day: 'to', date: '2025-05-01', time: '14-18', place: 'Osakuntasali' },
]

const Sales = () => {
  const currentISODate = new Date().toISOString().slice(0, 10)
  return (
    <div className='overflow-x-auto w-full'>
      <table className='table'>
        <thead className='text-nowrap text-sm'>
          <tr className='border-amber-800 border-opacity-10'>
            <th>Päivä</th>
            <th>Aika</th>
            <th>Paikka</th>
          </tr>
        </thead>
        <tbody>
          {saleTimes.map(({ day, date, time, place }) => {
            const isPast = currentISODate > date
            const isToday = currentISODate === date

            const formattedDate = new Intl.DateTimeFormat('fi-FI', {
              day: 'numeric',
              month: 'numeric'
            }).format(new Date(date))
            return (
              <tr
                key={date}
                className={`text-sm border-amber-800 border-opacity-10
                  ${isPast ? 'text-gray-400' : ''}
                  ${isToday ? 'bg-accent text-neutral' : ''}
                `}
              >
                <td>{day} {formattedDate}</td>
                <td>{time}</td>
                <td>{place}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Sales
