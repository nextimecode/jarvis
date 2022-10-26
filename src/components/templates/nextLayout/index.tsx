import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import NextHeader, { NavItem } from '../../organisms/nextHeader'
import NextFooter from '../../organisms/nextFooter'
import { Box } from '@chakra-ui/react'
import NextWhatsIcon from '../../atoms/nextWhatsIcon'
import Link from 'next/link'

type Props = {
  navItems?: Array<NavItem>
  title?: string
  description?: string
  nextSocialNetwork?: string
  logoSrc?: string
  logoHeight?: number
  logoSubtitle?: string
  logoSubtitleColor?: string
  bg?: string
  keywords?: string
  image?: string
}

const NextLayout = ({
  navItems,
  children,
  title = 'NeXTIME',
  description = 'Site da empresa NeXTIME, temos como visão: otimizar o tempo através do desenvolvimento de novas tecnologias, produtos inovadores, soluções criativas e educação. Possibilitando aos indivíduos gastarem suas energias realizando os seus sonhos.',
  nextSocialNetwork = 'https://api.whatsapp.com/send?phone=553189217467&text=Ol%C3%A1,%20NeXTIME!%0AGostaria%20de%20solicitar%20um%20orçamento.',
  logoSrc,
  logoHeight,
  logoSubtitle,
  logoSubtitleColor,
  bg = 'next-primary',
  keywords,
  image = './images/image_page.jpg'
}: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://www.nextshow.com.br/" />
        <meta property="og:type" content="page" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="NeXTShow" />
        <meta property="article:author" content="NeXTIME" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="twitter:image:src" content={image} />
      </Head>

      <NextHeader
        navItems={navItems}
        logoSrc={logoSrc}
        logoHeight={logoHeight}
        logoSubtitle={logoSubtitle}
        logoSubtitleColor={logoSubtitleColor}
      />

      <main>{children}</main>

      <NextFooter bg={bg} />
      <Box position="fixed" width="60px" height="60px" zIndex={100} bottom="20px" right="20px">
        <Link href={nextSocialNetwork}>
          <a target="_blank" rel="noreferrer">
            <NextWhatsIcon />
          </a>
        </Link>
      </Box>
    </>
  )
}

export default NextLayout
