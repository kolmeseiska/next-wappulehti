import Head from 'next/head'
import { Raleway } from '@next/font/google'
import styles from '../styles/Home.module.css'

const raleway = Raleway({ subsets: ['latin'] })
// raleway.className

export default function Home() {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Pönkeli - Turun yliopiston teekkareiden Wappulehti' />
        <title>Wappulehti Pönkeli</title>
        <link rel='icon' type='image/png' href='favicon.png' />
        <meta property='og:title' content='Pönkeli' />
        <meta property='og:type' content='website' />
        <meta property='og:description' content='Pönkeli - Turun yliopiston teekkareiden Wappulehti' />
        <meta property='og:url' content='https://pönkeli.fi/' />
        <meta property='og:image' content='https://pönkeli.fi/images/wappulehti-og.jpg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='pönkeli.fi' />
        <meta property='twitter:url' content='https://pönkeli.fi/' />
        <meta name='twitter:title' content='Pönkeli' />
        <meta name='twitter:description' content='Pönkeli - Turun yliopiston teekkareiden Wappulehti' />
        <meta name='twitter:image' content='https://pönkeli.fi/images/wappulehti-og.jpg' />
      </Head>
      <main className={styles.main}>
      </main>
    </>
  )
}
