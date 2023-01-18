import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

type Props = {}

const Navigation = (props: Props) => {
  return (
    <nav className='flex sm:justify-center items-center space-x-4 bg-gray-900 text-bold'>
      <Link
        href={'/'}
        className='px-3 py-2 fill-slate-50 hover:fill-indigo-500 transition-all '
      >
        <Logo className='h-7' />
      </Link>
      {[
        ['Pölkyn Äärellä', '/kisa'],
        ['Tapahtumat', '/tapahtumat'],
        ['Historia', '/historia'],
      ].map(([title, url]) => (
        <Link
          key={url}
          href={url}
          className='rounded-lg px-3 py-2 text-zinc-50 font-medium hover:bg-zinc-100 hover:text-zinc-900 transition-colors'
        >
          {title}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
