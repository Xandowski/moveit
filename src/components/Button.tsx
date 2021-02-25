import styled from 'styled-components'

interface ButtonProps {
  buttonStyle?: string,
  children: string,
  onClick?: boolean,
  disabled?: boolean
}

const ButtonBase = styled.button<ButtonProps>`
  background-color: ${
    props => props.buttonStyle == 'start' && (({theme}) => `${theme.colors.blue}`)
    || props.buttonStyle == 'cancel' && (({theme}) => `${theme.colors.white}`)
  };
  color: ${
    props => props.buttonStyle == 'start' && (({theme}) => `${theme.colors.white}`)
    || props.buttonStyle == 'cancel' && (({theme}) => `${theme.colors.title}`)
  };

  &:not(:disabled):hover {
    background-color: ${
      props => props.buttonStyle == 'start' && (({theme}) => `${theme.colors.blueDark}`)
      || props.buttonStyle == 'cancel' && (({theme}) => `${theme.colors.red}`)
    };
    color: white;
  }

  &:disabled {
    background-color: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.text};
    cursor: not-allowed;
    border-bottom: 3px solid ${({theme}) => theme.colors.green};
  }


  font-size: 1.25rem;
  font-weight: 600;
  border: 0;
  border-radius: 5px;
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Button: React.FC<ButtonProps> = ({buttonStyle, children, onClick, disabled}: ButtonProps) => (
  <ButtonBase
  type="button"
  buttonStyle={buttonStyle}
  onClick={onClick}
  disabled={disabled} 
  >{children}</ButtonBase>
)

export default Button