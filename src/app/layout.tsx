import type { Metadata } from 'next'

import '../styles/globals.css'
import '../styles/styles.css'
import '../styles/collapse.css'
import '../styles/colors.css'

export const metadata: Metadata = {
  title: 'Pönkeli',
  description: 'Pönkeli - Turun yliopiston teekkareiden Wappulehti',
  openGraph: {
    title: 'Pönkeli',
    type: 'website',
    description: 'Pönkeli - Turun yliopiston teekkareiden Wappulehti',
    url: 'https://pönkeli.fi/',
    images: {
      url: 'https://pönkeli.fi/wappulehti-og.jpg',
      width: '1200',
      height: '630'
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pönkeli',
    description: 'Pönkeli - Turun yliopiston teekkareiden Wappulehti',
    images: {
      url: 'https://pönkeli.fi/wappulehti-og.jpg',
    }
  }

}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fi' data-theme='gallery' className='scroll-smooth'>
      <body>
        {children}
      </body>
    </html>
  )
}
