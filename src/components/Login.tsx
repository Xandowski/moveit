import styled from 'styled-components'
import { signIn } from 'next-auth/client'

const Div = styled.div`
  background: ${({ theme }) => theme.colors.blue} no-repeat;
  background-image: url('/images/bg-logo.svg');
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  > div {
    height: 26.4rem;
    margin-right: 12.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      button {
        height: 2.5rem;
        width: 10rem;
        background-image: linear-gradient(
          to right,
          rgba(73, 83, 184),
          rgba(73, 83, 184, 0.83)
        );
        color: white;
        border: none;
      }
    }
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
      <div>
        <header>
          <img src="/images/Logo.svg" alt="" />
        </header>

        <main>
          <strong>Bem-vindo</strong>
          <p>Faça login para continuar</p>
        </main>

        <div>
          <button onClick={() => signIn('github')}>
            <img src="/icons/Github.svg" alt="github logo" />
            GitHub
          </button>
          <button onClick={() => signIn('auth0')}>SignIn</button>
        </div>
      </div>
    </Div>
  )
}

export default Login
