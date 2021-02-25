import { useContext } from 'react'
import styled from 'styled-components'
import ChallengeBoxButton from './ChallengeBoxButton'
import { ChallengesContext} from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'


const Div = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  header {
    color: ${({theme}) => theme.colors.blue};
    font-weight: 600;
    font-size: 1.25rem;
    height: 3.4rem;
    width: 80%;
    border-bottom: 1px solid ${({theme}) => theme.colors.grayLine};
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    img {

    }

    > strong {
      font-weight: 600;
      font-size: 2rem;
      color: ${({theme}) => theme.colors.title};
      margin: 1.5rem 0 1rem;
    }
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    > button:first-child {
      margin-right: 0.5rem;
    }
  }

  > strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;

    img {
      margin-bottom: 1rem;
    }
  } 
`

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const { resetCountdown } = useContext(CountdownContext)

  const handleChallengedSucceeded = () => {
    completeChallenge()
    resetCountdown()
  }

  const handleChallengedFailed = () => {
    resetChallenge()
    resetCountdown()
  }

  return (
    <>
      { activeChallenge ? (
        <Div>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
            <strong>Exercite-se</strong>
            <p> {activeChallenge.description} </p>
          </main>

          <footer>
            <ChallengeBoxButton 
              onClick={handleChallengedFailed}
            >Falhei</ChallengeBoxButton>
            <ChallengeBoxButton 
              success
              onClick={handleChallengedSucceeded}
            >Completei</ChallengeBoxButton>
          </footer>
        </Div>
      ) : (
        <Div>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="level up"/>
            Avance de level completando desafios.
          </p>
        </Div>
      )}
    </>
  )
}

export default ChallengeBox