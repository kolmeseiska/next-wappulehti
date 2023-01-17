import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }:Props) =>  (
  <div className='main-container'>
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
