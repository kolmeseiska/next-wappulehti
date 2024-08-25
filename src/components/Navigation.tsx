'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Logo from './Logo'

type NavItemProps = {
  isCollapsed?: boolean
}

type Route = [string, string, boolean?]

const routes: Route[] = [
  // ['Pölkyn Äärellä', '/kisa', true],
  ['Tapahtumat', '/tapahtumat'],
  ['Historia', '/historia'],
  ['Myyjät', '/myyjarekry'],
  // ['Myyjät', '/myyjainfo'],
]

const NavItems = ({ isCollapsed }: NavItemProps) => {
  // Ensure that link gets closed after clicking
  const onLinkClick = () => {
    const elem = document.activeElement as HTMLElement
    elem?.blur()
  }

  const pathname = usePathname()
  const menuClassName = isCollapsed
    ? 'menu text-primary dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52 shadow-2xl'
    : 'menu menu-horizontal text-primary px-1'

  return (
    <ul tabIndex={0} className={`gap-1 ${menuClassName}`}>
      {routes.map(([title, url, isHighlight]) => {
        const className = isHighlight
          // ? 'text-primary bg-primary hover:text-primary hover:bg-zinc-50'
          ? 'text-secondary bg-neutral hover:text-base-100 hover:bg-accent'
          : 'hover:bg-zinc-100 hover:text-zinc-900'
        return (
          <Link
            key={url}
            href={url}
            className={`rounded-lg px-3 py-2 font-bold transition-colors duration-200
              focus-visible:outline focus-visible:outline-primary
              ${pathname === url ? 'outline outline-zinc-100 ' : ''}
              ${className}
            `}
            onClick={onLinkClick}
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
    // <nav className='navbar sticky top-0 z-10 backdrop-blur-md backdrop-saturate-20 bg-nav-alpha'>
    <nav className='navbar sticky top-0 z-10 bg-base-300'>
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
          <label tabIndex={0} className='btn btn-ghost text-primary md:hidden'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' /></svg>
          </label>
          <NavItems isCollapsed />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
