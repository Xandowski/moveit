import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import Cookies from 'js-cookie'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    const cookiesValue = Cookies.get(key)

    if (cookiesValue) {
      return JSON.parse(cookiesValue)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    Cookies.set(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersistedState
