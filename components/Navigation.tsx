import React from 'react'
import Link from 'next/link'

import Logo from './Logo'

type NavItemProps = {
  isCollapsed?: boolean
}

const NavItems = ({ isCollapsed }:NavItemProps) => {
  const menuClassName = isCollapsed
    ? 'menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 shadow-2xl'
    : 'menu menu-horizontal px-1'
  
  return (
    <ul tabIndex={0} className={menuClassName}>
      {[
        ['Pölkyn Äärellä', '/kisa'],
        ['Tapahtumat', '/tapahtumat'],
        ['Historia', '/historia'],
      ].map(([title, url]) => (
        <Link
          key={url}
          href={url}
          className='rounded-lg px-3 py-2 text-zinc-50 font-medium hover:bg-zinc-100 hover:text-zinc-900 transition-colors duration-200'
        >
          {title}
        </Link>
      ))
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
