import SEO from '../../next-seo.config'
import { DefaultSeo } from 'next-seo'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/apollo'
import theme from '../../theme/'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  )
}
export default MyApp
