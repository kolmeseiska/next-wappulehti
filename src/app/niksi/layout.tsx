'use cache'

import type { Metadata } from 'next'
import { unstable_cacheLife as cacheLife } from 'next/cache'

export const metadata: Metadata = {
  title: 'Niksi Pönkeli',
  description: 'Niksi-Pönkeli - 2025 Turun yliopiston teekkareiden wappulehti',
  keywords: 'pönkeli,pönkeli2025,niksipirkka,turun yliopisto,teekkariwappulehti,wappu,vappu,teekkari,niksi,vinkki,teekkarit',
  openGraph: {
    title: 'Niksi Pönkeli',
    type: 'website',
    description: 'Pönkeli - 2025 Turun yliopiston teekkareiden wappulehti',
    url: 'https://pönkeli.fi/niksi/',
    images: {
      url: 'https://pönkeli.fi/ponkeli25-og.webp',
      width: '1200',
      height: '630'
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Niksi Pönkeli',
    description: 'Pönkeli - 2025 Turun yliopiston teekkareiden wappulehti',
    images: {
      url: 'https://pönkeli.fi/ponkeli25-og.webp',
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
