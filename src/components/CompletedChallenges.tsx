import { useContext } from 'react'
import styled from 'styled-components'
import { ChallengesContext } from '../contexts/ChallengesContext'

const Div = styled.div`
  border-bottom: 1px solid var(--gray-line);
  margin: 3.5rem 0;
  padding-bottom: 1rem;

  display: flex;
  justify-content: space-between;
  font-weight: 500;

  span {
    font-size: 1.25rem;
  }

  strong {
    font-size: 1.5rem;
  }
`

const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext)
  return (
    <Div>
      <span>Desafios completos</span>
      <strong>{challengesCompleted}</strong>
    </Div>
  )
}

export default CompletedChallenges