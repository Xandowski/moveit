import type { AppProps /* , AppContext */ } from 'next/app'
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Provider } from 'next-auth/client'

const theme = {
  colors: {
    background: '#F2F3F5',
    grayLine: '#DcDDE0',
    white: 'white',
    text: '#666',
    title: '#2E384D',
    red: '#E83F5B',
    redDark: '#b93248',
    green: '#4CD62B',
    blue: '#5965E0',
    blueDark: '#4953B8',
    blueTwitter: '#2AA9E0',
  },
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: ${() => theme.colors.background};
    color: ${() => theme.colors.text};
  }

  body, input, textarea, button {
    font: 400 16px "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }

  li {
    list-style: none;
  }
`

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider session={pageProps.session}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}
