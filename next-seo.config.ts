import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://nextime.com.br/',
    siteName: 'Nextime'
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image'
  }
}

export default config
