import Head from 'next/head'

import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Praveen Yen Clone</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header />

      <h1>Lets build Facebook</h1>
    </div>
  )
}
