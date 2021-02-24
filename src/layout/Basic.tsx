import styled from 'styled-components'

const Main = styled.main`
  margin: 6.9rem 0;
  display: flex;

  > div:nth-child(1) {
    width: 389px;
  }

  > div:nth-child(2) {
    width: 468px;
    padding: 1.6rem 3.6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
  }
`

const Basic = () => (
  <Main>
  </Main>
)

export default Basic