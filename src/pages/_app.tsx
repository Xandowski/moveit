import type { AppProps } from 'next/app'
import React, { useContext } from 'react'
import { Provider } from 'next-auth/client'
import {
  ThemeSwitchContext,
  ThemeSwitchProvider,
} from '../contexts/ThemeSwitchContext'

import { GlobalStyles } from '../styles/global'

export default function MyApp({ Component, pageProps }: AppProps) {
  const { toggleTheme } = useContext(ThemeSwitchContext)

  return (
    <ThemeSwitchProvider>
      <Provider session={pageProps.session}>
        <GlobalStyles />
        <Component toggleTheme={toggleTheme} {...pageProps} />
      </Provider>
    </ThemeSwitchProvider>
  )
}
