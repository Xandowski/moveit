import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  buttonStyle?: string,
  children: string,
  onClick: Boolean
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

  &:hover {
    background-color: ${
      props => props.buttonStyle == 'start' && (({theme}) => `${theme.colors.blueDark}`)
      || props.buttonStyle == 'cancel' && (({theme}) => `${theme.colors.red}`)
    };
    color: white;
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

const Button: React.FC<ButtonProps> = ({buttonStyle, children, onClick}: ButtonProps) => (
  <ButtonBase 
    type="button"
    buttonStyle={buttonStyle}
    onClick={onClick}
  >{children}</ButtonBase>
)

export default Button