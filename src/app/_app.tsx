import { NextComponentType } from 'next'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

const themes = ['light', 'dark']

type AppCustomProps = AppProps & {
  Component: NextComponentType & { theme?: 'light' | 'dark' } // add auth type
}

export default function App({ Component, pageProps }: AppProps & AppCustomProps) {
  return (
    <ThemeProvider
      themes={themes}
      forcedTheme={Component.theme}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
