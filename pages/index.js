import Head from 'next/head'
import Nav from '../components/Nav'
import '../styles/globals.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Valestra</title>
      </Head>
      <Nav />
      <main>
        <h1>Welcome to Valestra</h1>
        <p>Your journey through the Vault begins here — curated gifts, secret drops, and rewards known only to a few.</p>
      </main>
    </>
  )
}
