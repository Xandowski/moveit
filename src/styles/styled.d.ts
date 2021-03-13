import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      background: string
      grayLine: string
      white: string
      text: string
      title: string
      red: string
      redDark: string
      green: string
      blue: string
      blueDark: string
      blueTwitter: string
    }
  }
}
