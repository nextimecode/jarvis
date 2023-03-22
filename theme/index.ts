import { extendTheme } from '@chakra-ui/react'
import colors from './colors'
import config from './config'
import styles from './styles'
import fonts from './fonts'
import { withProse } from '@nikolovlazar/chakra-ui-prose'

const theme = extendTheme(
  {
    colors,
    config,
    styles,
    fonts
  },
  withProse()
)

export default theme
