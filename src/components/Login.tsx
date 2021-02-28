import styled from 'styled-components'
import { signIn } from 'next-auth/client'

const Div = styled.div`
  body {
    background: ${({ theme }) => theme.colors.blue};
  }

  header {
    background: url('/images/Logo.svg');
  }

  main {
    color: ${({ theme }) => theme.colors.white};
    strong {
      font-weight: 600;
      font-size: 2.25rem;
    }

    p {
      font-size: 1.25rem;
    }
  }
`

const Login = () => {
  return (
    <Div>
      <header></header>

      <main>
        <strong>Bem vindo</strong>
        <p>Escolha uma das opções para fazer login</p>
      </main>

      <div>
        <button onClick={() => signIn('auth0')}>Login</button>
      </div>
    </Div>
  )
}

export default Login
