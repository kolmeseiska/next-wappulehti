import React from 'react'
import Link from 'next/link'

import Logo from './Logo'

type NavItemProps = {
  isCollapsed?: boolean
}

type Route = [string, string, boolean?]

const routes: Route[] = [
  ['Pölkyn Äärellä', '/kisa', true],
  ['Tapahtumat', '/tapahtumat'],
  ['Historia', '/historia'],
  ['Myyjät', '/myyjainfo'],
]

const NavItems = ({ isCollapsed }: NavItemProps) => {
  const menuClassName = isCollapsed
    ? 'menu menu-compact text-zinc-50 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 shadow-2xl'
    : 'menu menu-horizontal text-zinc-50 px-1'

  return (
    <ul tabIndex={0} className={menuClassName}>
      {routes.map(([title, url, isHighlight]) => {
        const className = isHighlight
          ? 'text-zinc-50 bg-primary hover:text-primary hover:bg-zinc-50'
          : 'hover:bg-zinc-100 hover:text-zinc-900'
        return (
          <Link
            key={url}
            href={url}
            className={`rounded-lg px-3 py-2 font-bold transition-colors duration-200 ${className} `}
          >
            {title}
          </Link>
        )
      })
      }
    </ul>
  )
}

const Navigation = () => {
  return (
    <nav className='navbar sticky top-0 z-10 backdrop-blur-md backdrop-saturate-20 bg-nav-alpha'>
      <div className='navbar-start' />
      <div className='navbar-center'>
        <Link
          href={'/'}
          className='px-3 py-2 fill-zinc-50 social'
        >
          <Logo className='h-7' />
        </Link>
        <div className='hidden md:flex'>
          <NavItems />
        </div>
      </div>
      <div className='navbar-end'>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost md:hidden'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' /></svg>
          </label>
          <NavItems isCollapsed />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
