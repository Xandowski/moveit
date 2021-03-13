import React, { useContext } from 'react'
import styled from 'styled-components'
import { CountdownContext } from '../contexts/CountdownContext'
import Button from './Button'
import TimeNumber from './TimeNumber'

import Lottie from 'react-lottie'
import fowardAnimationData from '../../foward.json'
import cancelAnimationData from '../../cancel.json'
import correctAnimationData from '../../correct.json'

const Div = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};
  font-size: 7.5rem;

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
    }

    span:first-child {
      border-right: 1px solid #f8f1f3;
    }
  }

  div {
    background-color: ${(props) => props.theme.colors.white};
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`

const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext)

  const [minutesLeftString, minutesRightString] = String(minutes)
    .padStart(2, '0')
    .split('')
  const [secondsLeftString, secondsRightString] = String(seconds)
    .padStart(2, '0')
    .split('')

  const defaultFowardOptions = {
    loop: true,
    autoplay: true,
    animationData: fowardAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    speed: 1.5,
  }

  const defaultCancelOptions = {
    loop: false,
    autoplay: true,
    animationData: cancelAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    speed: 0.7,
  }

  const defaultCorrectOptions = {
    loop: false,
    autoplay: true,
    animationData: correctAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    speed: 1,
  }

  return (
    <div>
      <Div>
        <div>
          <TimeNumber value="-100px">{minutesLeftString}</TimeNumber>
          <TimeNumber value="100px">{minutesRightString}</TimeNumber>
        </div>
        <span>:</span>
        <div>
          <TimeNumber value="-100px">{secondsLeftString}</TimeNumber>
          <TimeNumber value="100px">{secondsRightString}</TimeNumber>
        </div>
      </Div>
      {hasFinished ? (
        <Button disabled buttonStyle="cancel">
          Ciclo encerrado
          <div>
            <Lottie options={defaultCorrectOptions} height={60} width={60} />
          </div>
          <hr />
        </Button>
      ) : (
        <>
          {isActive ? (
            <Button buttonStyle="cancel" onClick={resetCountdown}>
              Abandonar ciclo
              <div>
                <Lottie options={defaultCancelOptions} height={20} width={20} />
              </div>
            </Button>
          ) : (
            <Button buttonStyle="start" onClick={startCountdown}>
              Iniciar ciclo
              <div>
                <Lottie options={defaultFowardOptions} height={30} width={30} />
              </div>
            </Button>
          )}
        </>
      )}
    </div>
  )
}
export default Countdown
