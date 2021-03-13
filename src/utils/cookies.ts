import Cookies from 'js-cookie'

interface setTolsProps {
  name: string
  value: Object
}

export const setToLS = (name: string, value: Object) => {
  Cookies.set(name, JSON.stringify(value))
}

export const getFromLS = ({ name }: setTolsProps) => {
  const value = Cookies.get(name)

  if (value) {
    return JSON.parse(value)
  }
}
