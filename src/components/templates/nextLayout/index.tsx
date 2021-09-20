import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import NextHeader from '../../organisms/nextHeader'
import NextFooter from '../../organisms/nextFooter'
import NextHero from '../../organisms/nextHero'

type Props = {
  title?: string
  description?: string
}

const NextLayout = ({
  children,
  title = 'NeXTIME',
  description = 'Site da empresa NeXTIME, temos como visão: otimizar o tempo através do desenvolvimento de novas tecnologias, produtos inovadores, soluções criativas e educação. Possibilitando aos indivíduos gastarem suas energias realizando os seus sonhos.'
}: PropsWithChildren<Props>) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextHeader />

      <NextHero />

      <main>
        {children}
      </main>

      <NextFooter />
    </div>
  )
}

export default NextLayout
