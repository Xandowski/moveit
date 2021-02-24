import type { AppProps /* , AppContext */ } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    background: "#F2F3F5",
    grayLine: "#DcDDE0",
    white: "white",
    text: "#666",
    title: "#2E384D",
    red: "#E83F5B",
    green: "#4CD62B",
    blue: "#5965E0",
    blueDark: "#4953B8",
    blueTwitter: "#2AA9E0"
  }
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #F2F3F5;
    --gray-line: #DcDDE0;
    --text: #666;
    --text-highlight: #B3B9FF;
    --title: #2E384D;
    --red: #E83F5B;
    --green: #4CD62B;
    --blue: #5965E0;
    --blue-dark: #4953B8;
    --blue-twitter: #2AA9E0;
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
    background: var(--background);
    color: var(--text);
    
    > div {
      > div {
        height: 100vh;
        max-width: 992px;
        margin: 0 auto;
        padding: 2.5rem 2rem;

        display: flex;
        flex-direction: column;
      }
    }
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
    /* padding: 6.8rem 0; */
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }
`

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}