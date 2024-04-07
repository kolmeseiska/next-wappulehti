import type { Metadata } from 'next'

import '../../styles/colors.css'
import '../../styles/globals.css'
import '../../styles/wappu2024.css'
import Footer from '@/gallery/Footer'
import Header from '@/gallery/Header'

export const metadata: Metadata = {
  title: 'Galleria-Pönkeli',
  description: 'Galleria-Pönkeli - 2024 Turun yliopiston teekkareiden wappulehti',
  openGraph: {
    title: 'Galleria Pönkeli',
    type: 'website',
    description: 'Galleria Pönkeli - 2024 Turun yliopiston teekkareiden wappulehti',
    url: 'https://pönkeli.fi/galleria/',
    images: {
      url: 'https://pönkeli.fi/wappulehti24-og.jpg',
      width: '1200',
      height: '630'
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galleria Pönkeli',
    description: 'Galleria-Pönkeli - 2024 Turun yliopiston teekkareiden wappulehti',
    images: {
      url: 'https://pönkeli.fi/galleria/wappulehti-og.jpg',
    }
  }

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='content-grid'>
      <div className='breakout'>
        <Header />
      </div>
      {children}
      <div className='breakout'>
        <Footer />
      </div>
    </div>
  )
}
