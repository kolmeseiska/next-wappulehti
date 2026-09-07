import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'

import '../styles/globals.css'
import '../styles/styles.css'
import '../styles/collapse.css'
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

// The locale cookie read below (for i18n) makes every route dynamic, so this
// app can't produce a static shell - opt the whole tree out of that check.
export const instant = false

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`scroll-smooth ${raleway.className} ${raleway.variable} ${dmSerifDisplay.variable}`}
      suppressHydrationWarning // To prevent next-theme warnings on top level
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            themes={themes}
            enableSystem={false}
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId='G-SP2GW904WR' />
    </html>
  )
}
