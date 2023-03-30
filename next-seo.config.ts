import { DefaultSeoProps } from 'next-seo'
import { layout } from './src/data/'
const { title, description, url, socialImageUrl, siteName, keywords } = layout
const config: DefaultSeoProps = {
  title,
  description,
  canonical: url,
  openGraph: {
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
        alt: 'logo da empresa NeXTIME',
        type: 'image/jpeg',
      },
    ],
    siteName,
  },
  twitter: {
    handle: '@phdduarte',
    site: '@phdduarte',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: `${url}/favicon.ico`,
    },
  ],
  additionalMetaTags: [
    {
      name: 'application-name',
      content: 'Nextime',
    },
    {
      name: 'keywords',
      content: keywords?.join(', '),
    },
  ],
  robotsProps: {
    nosnippet: true,
    notranslate: true,
    noimageindex: true,
    noarchive: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
}

export default config
