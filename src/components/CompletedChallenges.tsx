import styled from 'styled-components'

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

const CompletedChallenges = () => (
  <Div>
    <span>Desafios completos</span>
    <strong>00</strong>
  </Div>
)

export default CompletedChallenges