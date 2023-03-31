import React, { PropsWithChildren } from 'react'
import NextHeader, { NavItem } from '../../organisms/nextHeader'
import { NextFooter } from '../../organisms/nextFooter'
import { Box } from '@chakra-ui/react'
import NextWhatsIcon from '../../atoms/nextWhatsIcon'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { layout } from '../../../data'

type Props = {
  navItems?: Array<NavItem>
  title?: string
  url?: string
  description?: string
  nextSocialNetwork?: string
  logoSrc?: string
  logoWidth?: number
  logoHeight?: number
  logoAlt?: string
  logoSubtitle?: string
  logoSubtitleColor?: string
  keywords?: Array<string>
  bg?: string
  siteName?: string
  socialImageUrl?: string
}

export function NextLayout({
  navItems,
  children,
  title = layout.title,
  url = layout.url,
  description = layout.description,
  nextSocialNetwork = layout.nextSocialNetwork,
  logoSrc = layout.logoSrc,
  logoWidth = layout.logoWidth,
  logoHeight = layout.logoHeight,
  logoAlt = layout.logoAlt,
  logoSubtitle = layout.logoSubtitle,
  logoSubtitleColor = layout.logoSubtitleColor,
  bg = layout.bg,
  keywords = layout.keywords,
  siteName = layout.siteName,
  socialImageUrl = layout.socialImageUrl,
}: PropsWithChildren<Props>) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url,
          title,
          description,
          images: [
            {
              url: socialImageUrl,
              width: 853,
              height: 600,
              alt: title,
              type: 'image/jpeg',
            },
          ],
          siteName,
        }}
        twitter={{
          handle: '@phdduarte',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: keywords?.join(', '),
          },
        ]}
      />

      <NextHeader
        navItems={navItems}
        logoSrc={logoSrc}
        logoHeight={logoHeight}
        logoAlt={logoAlt}
        logoSubtitle={logoSubtitle}
        logoSubtitleColor={logoSubtitleColor}
        logoWidth={logoWidth}
      />

      <main>{children}</main>

      <NextFooter bg={bg} />
      <Box
        position="fixed"
        width="60px"
        height="60px"
        zIndex={100}
        bottom="20px"
        right="20px"
      >
        <Link
          href={nextSocialNetwork}
          target={'_blank'}
          aria-label="Faça um orçamento pelo whatsapp"
        >
          <NextWhatsIcon />
        </Link>
      </Box>
    </>
  )
}
