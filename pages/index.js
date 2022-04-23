import Head from 'next/head'
import LandingPage from '../components/LandingPage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Client Satellite</title>
        <meta name="Client Satellite" content="This is the official website of 'Client Satellite'" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </div>
  )
}
