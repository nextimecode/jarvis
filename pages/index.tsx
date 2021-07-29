import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NeXTIME</title>
        <meta name="description" content="Site da empresa NeXTIME" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
      </main>

      <footer>
        <Image src="/images/logos/logo_nextime.svg" alt="NeXTIME Logo" width={146} height={45} />
      </footer>
    </div>
  )
}
