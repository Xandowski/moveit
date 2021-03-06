import styled from 'styled-components'

const LoadingBase = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
`
const Loading = () => {
  return (
    <LoadingBase>
      <h1>Carrregando...</h1>
    </LoadingBase>
  )
}

export default Loading
