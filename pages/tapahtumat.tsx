
import Event from '../components/Event'
import events, { PonkeliEvent } from '../content/events'

const tapahtumat = () => {
  const upcomingEvents: PonkeliEvent[] = []
  const pastEvents: PonkeliEvent[] = []

  for(const event of events) {
    if(event.date && event.date < new Date().toISOString()) {
      pastEvents.push(event)
    } else {
      upcomingEvents.push(event)
    }
  }
  
  return (
    <div className='container mx-auto px-4 justify-center py-16'>
      <h1 className='text-6xl font-extrabold pb-10 text-center'>Tapahtumat</h1>
      <div className='flex gap-4 items-start flex-wrap justify-center'>
        {upcomingEvents.map(event => (
          <Event key={event.name} event={event} />
        ))}
      </div>
      <div className='py-10'>
        <h1 className='text-6xl font-extrabold pb-10 text-center'>Menneet tapahtumat</h1>
        <div className='flex gap-4 items-start flex-wrap justify-center'>

          {pastEvents.map(event => (
            <Event key={event.name} event={event} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default tapahtumat
