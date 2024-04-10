import React from 'react'

import Footer from './Footer'
import Navigation from './Navigation'
import { raleway } from '@/app/fonts'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <div className={`main-container ${raleway.className}`}>
    <Navigation />
    <main>
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
