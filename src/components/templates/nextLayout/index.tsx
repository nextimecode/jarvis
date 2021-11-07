import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import NextHeader from '../../organisms/nextHeader'
import NextFooter from '../../organisms/nextFooter'
import { Box, Container } from '@chakra-ui/react'
import NextWhatsIcon from '../../atoms/nextWhatsIcon'
import Link from 'next/link'
import { nextSocialNetwork } from '../../../data'

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
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextHeader />

      <main>
        <Container maxW="container.xl">
          {children}
        </Container>
      </main>

      <NextFooter />
      <Box
        position="fixed"
        width="60px"
        height="60px"
        zIndex={100}
        bottom="20px"
        right="20px"
      >
        <Link href={nextSocialNetwork.whatsapp.url}>
          <a target="_blank" rel="noreferrer">
            <NextWhatsIcon />
          </a>
        </Link>
      </Box>
    </>
  )
}

export default NextLayout
