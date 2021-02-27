import styled from 'styled-components'

interface ButtonProps {
  buttonStyle?: string
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

const ButtonBase = styled.button<ButtonProps>`
  background-color: ${(props) =>
    (props.buttonStyle == 'start' && (({ theme }) => `${theme.colors.blue}`)) ||
    (props.buttonStyle == 'cancel' && (({ theme }) => `${theme.colors.red}`))};
  color: ${({ theme }) => `${theme.colors.white}`};

  &:not(:disabled) {
    > div {
      margin-left: 20px;
    }
  }

  &:not(:disabled):hover {
    background-color: ${(props) =>
      (props.buttonStyle == 'start' &&
        (({ theme }) => `${theme.colors.blueDark}`)) ||
      (props.buttonStyle == 'cancel' &&
        (({ theme }) => `${theme.colors.redDark}`))};
  }

  @keyframes cyclecompleted {
    from {
      width: 0%;

      background-color: transparent;
    }
    to {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.green};
    }
  }

  position: relative;

  hr {
    left: 0;
    width: 0%;
    height: 3px;
    background-color: transparent;
    position: absolute;
    bottom: 0;
    animation: cyclecompleted 1s forwards;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};
    cursor: not-allowed;
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

const Button: React.FC<ButtonProps> = ({
  buttonStyle,
  children,
  onClick,
  disabled,
}: ButtonProps) => (
  <ButtonBase
    type="button"
    buttonStyle={buttonStyle}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </ButtonBase>
)

export default Button
