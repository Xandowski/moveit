import { createContext, ReactNode } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import usePersistedState from '../utils/usePersistedState'

interface ThemeSwitchContextData {
  toggleTheme(): void
}

interface ThemeSwitchProviderProps {
  children: ReactNode
}

export const ThemeSwitchContext = createContext({} as ThemeSwitchContextData)

export function ThemeSwitchProvider({ children }: ThemeSwitchProviderProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeSwitchContext.Provider
      value={{
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeSwitchContext.Provider>
  )
}
