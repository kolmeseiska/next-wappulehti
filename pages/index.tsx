import Head from 'next/head'

import ReleaseInfo from '../content/ReleaseInfo'

export default function Page() {
  return (
    <>
      <Head>
        <title>Wappulehti Pönkeli</title>
      </Head>
      <ReleaseInfo />
      {/* <OffseasonHero /> */}
    </>
  )
}
