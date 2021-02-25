import styled from 'styled-components'

interface ButtonProps {
  children: string,
  onClick?: () => void,
  success?: boolean
}

const Button = styled.button<ButtonProps>`
  background-color: ${ props => props.success ? 
    (({theme}) => `${theme.colors.green}`) : 
    (({theme}) => `${theme.colors.red}`) };
  
  color: ${({theme}) => theme.colors.white};
  border-radius: 5px;
  width: 11rem;
  height: 3.1rem;
  border: 0;
  font-size: 1rem;
  font-weight: 600;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

const ChallengeBoxButton = ({onClick, success, children}: ButtonProps) => (
  <Button 
    type="button"
    onClick={onClick}
    success={success}
  >
    {children}
  </Button>
)

export default ChallengeBoxButton