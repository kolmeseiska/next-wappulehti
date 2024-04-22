'use client'
import React from 'react'

const openingTimes = [
  { day: 'to', date: '2024-04-11', time: '14-19' },
  { day: 'pe', date: '2024-04-12', time: '12-19' },
  { day: 'la', date: '2024-04-13', time: '11-15' },
  { day: 'su', date: '2024-04-14', time: '12-16' },
  { day: 'ma', date: '2024-04-15', time: '15-19' },
  { day: 'ti', date: '2024-04-16', time: '12-19' },
  { day: 'ke', date: '2024-04-17', time: '12-19' },
  { day: 'to', date: '2024-04-18', time: '15-19' },
  { day: 'pe', date: '2024-04-19', time: '15-19' },
  { day: 'la', date: '2024-04-20', time: '12-16' },
  { day: 'su', date: '2024-04-21', time: '12-16' },
  { day: 'ma', date: '2024-04-22', time: '15-19' },
  { day: 'ti', date: '2024-04-23', time: 'EI AVOINNA' },
  { day: 'ke', date: '2024-04-24', time: '15-19' },
  { day: 'to', date: '2024-04-25', time: 'EI AVOINNA' },
  { day: 'pe', date: '2024-04-26', time: '15-19' },
  { day: 'la', date: '2024-04-27', time: '12-16' },
  { day: 'su', date: '2024-04-28', time: '12-16' },
  { day: 'ma', date: '2024-04-29', time: 'EI AVOINNA' },
  { day: 'ti', date: '2024-04-30', time: '15-17' },
  { day: 'ke', date: '2024-05-01', time: '14-18' },
]

const OpeningTimes = () => {
  const currentISODate = new Date().toISOString().slice(0, 10)
  return (
    <div className='overflow-x-auto w-full'>
      <table className='table'>
        <thead className='text-nowrap text-sm'>
          <tr>
            <th>Viikonpäivä</th>
            <th>Päivä</th>
            <th>Aukioloaika</th>
          </tr>
        </thead>
        <tbody>
          {openingTimes.map(({ day, date, time }) => {
            const isPast = currentISODate > date
            const isToday = currentISODate === date

            const formattedDate = new Intl.DateTimeFormat('fi-FI', {
              day: 'numeric',
              month: 'numeric'
            }).format(new Date(date))
            return (
              <tr
                key={date}
                className={`text-sm
            ${isPast ? 'text-gray-400' : ''}
            ${isToday ? 'bg-accent text-neutral' : ''}
            `}
              >
                <td>{day}</td>
                <td>{formattedDate}</td>
                <td>{time}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default OpeningTimes
