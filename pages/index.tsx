import Head from 'next/head'

import OffseasonHero from '../content/OffseasonHero'

export default function Page() {
  return (
    <>
      <Head>
        <title>Wappulehti Pönkeli</title>
      </Head>
      {/* <ReleaseInfo /> */}
      <OffseasonHero />
    </>
  )
}
