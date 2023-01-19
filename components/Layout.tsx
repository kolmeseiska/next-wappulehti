import React from 'react'
import { Raleway } from '@next/font/google'

import Footer from './Footer'
import Navigation from './Navigation'

const raleway = Raleway({ subsets: ['latin'] })

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }:Props) =>  (
  <div className={`main-container ${raleway.className}`}>
    <Navigation />
    <main>
      <div className='hero min-h-screen bg-base-200'>
        {children}
      </div>
    </main>
    <Footer />
  </div>
)

export default Layout
