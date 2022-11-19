import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import NextHeader, { NavItem } from '../../organisms/nextHeader'
import NextFooter from '../../organisms/nextFooter'
import { Box } from '@chakra-ui/react'
import NextWhatsIcon from '../../atoms/NextWhatsIcon'
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
  image = './images/social_image.png'
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
        <meta property="og:image" content={image} />
        <meta property="og:image:secure_url" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="631" />
        <meta property="og:image:alt" content="mentoria" />
        <meta property="og:image:type" content="image/png" />
        <meta property="article:author" content="NeXTIME" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="twitter:image:src" content={image} />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://www.nextime.com.br/" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="NeXTMentor" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="6 minutos" />
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
        <Link href={nextSocialNetwork} target={'_blank'}>
          <NextWhatsIcon />
        </Link>
      </Box>
    </>
  )
}

export default NextLayout
