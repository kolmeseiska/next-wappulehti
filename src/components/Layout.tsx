import React from 'react'
import { Raleway } from 'next/font/google'

import Footer from './Footer'
import Navigation from './Navigation'

const raleway = Raleway({ subsets: ['latin'] })

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <div className={`main-container bg-base-100 ${raleway.className}`}>
    <Navigation />
    <main>
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
