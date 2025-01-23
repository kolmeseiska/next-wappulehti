import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

import '../styles/globals.css'
import '../styles/styles.css'
import '../styles/collapse.css'
import '../styles/colors.css'
import { dmSerifDisplay, raleway } from './fonts'

export const metadata: Metadata = {
  title: 'Pönkeli',
  description: 'Pönkeli - Turun yliopiston opiskelijoiden Wappulehti',
  openGraph: {
    title: 'Pönkeli',
    type: 'website',
    description: 'Pönkeli - Turun yliopiston opiskelijoiden Wappulehti',
    url: 'https://pönkeli.fi/',
    images: {
      url: 'https://pönkeli.fi/wappulehti-og.webp',
      width: '1200',
      height: '630'
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pönkeli',
    description: 'Pönkeli - Turun yliopiston opiskelijoiden Wappulehti',
    images: {
      url: 'https://pönkeli.fi/wappulehti-og.webp',
    }
  }

}

const themes = ['light', 'dark']

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='fi'
      className={`scroll-smooth ${raleway.className} ${raleway.variable} ${dmSerifDisplay.variable}`}
      suppressHydrationWarning // To prevent next-theme warnings on top level
    >
      <body>
        <ThemeProvider
          themes={themes}
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
