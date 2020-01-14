import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core'
import { CSSReset } from '@chakra-ui/core'

import theme from '@/theme'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />

      {/* <ColorModeProvider> */}
      <Component {...pageProps} />
      {/* </ColorModeProvider> */}
    </ThemeProvider>
  )
}

export default MyApp
