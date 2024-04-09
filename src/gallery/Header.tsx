'use client'
import Link from 'next/link'

const Header = () => {
  return (
    <div
      className={`navbar
      bg-base-300 text-base-100 rounded-b-xl mx-auto overflow-hidden z-10
      min-w-fit
      gallery-header`}
    >
      <div className='navbar-start z-10 text-xl sm:text-3xl leading-7 mx-3 font-display'>
        <div>
          <div>
            Galleria
          </div>
          <div className='ms-5'>
            Pönkeli
          </div>
        </div>
      </div>
      <div className='navbar-end z-10'>
        <Link href='#info' className='btn btn-ghost sm:text-xl'>Info</Link>
        <Link href='#venue' className='btn btn-ghost sm:text-xl'>Venue</Link>
        <Link href='#aukioloajat' className='btn btn-ghost sm:text-xl'>Aukioloajat</Link>
      </div>
    </div>
  )
}

export default Header
