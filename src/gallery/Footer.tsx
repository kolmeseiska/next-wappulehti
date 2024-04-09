import React from 'react'
import Link from 'next/link'

import Stamp from '@/app/galleria/Stamp'

const Footer = () => {
  return (
    <footer className='footer p-10 '>
      <aside>
        <Link href='/'>
          <Stamp className='fill-base-content' width='70' height='70' />
        </Link>
        <p>Wappulehti Pönkeli<br />Hauskuutta ja iloa myös vuonna 2024</p>
      </aside>
      <nav>
        <h6 className='footer-title'>Seuraa meitä</h6>
        <Link
          href='https://www.instagram.com/wappulehtiponkeli/'
          className='link link-hover'
          target='_blank'
          rel='noopener noreferrer'
        >
          Instagram
        </Link>
        <Link
          href='https://www.tiktok.com/@wappulehtiponkeli'
          className='link link-hover'
          target='_blank'
          rel='noopener noreferrer'
        >
          TikTok
        </Link>
      </nav>
    </footer>
  )
}

export default Footer
