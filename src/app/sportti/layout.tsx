'use cache'

import type { Metadata } from 'next'
import { cacheLife } from 'next/cache'

export const metadata: Metadata = {
  title: 'Sportti-Pönkeli',
  description: 'Sportti-Pönkeli - 2026 Turun yliopiston teekkareiden wappulehti',
  keywords: 'pönkeli,pönkeli2026,urheilu,sportti,turun yliopisto,teekkariwappulehti,wappu,vappu,teekkari,teekkarit',
  openGraph: {
    title: 'Sportti-Pönkeli',
    type: 'website',
    description: 'Pönkeli - 2026 Turun yliopiston teekkareiden wappulehti',
    url: 'https://pönkeli.fi/sportti/',
    images: {
      url: 'https://pönkeli.fi/ponkeli26-og.webp',
      width: '1200',
      height: '630'
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sportti-Pönkeli',
    description: 'Pönkeli - 2026 Turun yliopiston teekkareiden wappulehti',
    images: {
      url: 'https://pönkeli.fi/ponkeli26-og.webp',
    }
  }

}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Revalidate page every hour to keep sales times up to date
  cacheLife({
    stale: 60 * 60 * 3, // 3 hours
    revalidate: 60 * 60 * 12, // 12 hour
    expire: 60 * 60 * 24 // 1 day
  })
  return (
    <div className='content-grid'>
      {children}
    </div>
  )
}