import Link from 'next/link'

const footer = () => {
  return (
    <footer className='bg-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-[#d4b2a7] font-semibold text-xl mb-4 md:mb-0'>
            <Link href='/niksi'>
              PÖNKELI 2025
            </Link>
          </div>

        </div>
        <div className='mt-8 pt-8 border-t border-gray-100 text-center text-[#032a39] text-sm'>
          ©
          {' '}
          {(new Date()).getFullYear()}
          {' '}
          Pönkeli - Huumorihulinaa vuodesta 2021
        </div>
      </div>
    </footer>
  )
}

export default footer
