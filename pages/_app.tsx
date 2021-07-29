import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import { Dict } from '@chakra-ui/utils'

const colors = {
  primary: {
    light: '#85d7ff',
    DEFAULT: '#4882F8',
    dark: '#2D426D',
  },
}

const config : ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const styles = {
  global: (props: Dict<any>) => ({
    body: {
      fontFamily: "body",
      color: mode("#17171B", "whiteAlpha.900")(props),
      bg: mode("white", "#17171B")(props),
      lineHeight: "base",
    },
  }),
}

const theme = extendTheme({ colors, config, styles })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
