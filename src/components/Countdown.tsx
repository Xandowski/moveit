import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from './Button'

const Div = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);
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

    span:first-child {
      border-right: 1px solid #f8f1f3;
    }

    span:last-child {
      border-left: 1px solid #f8f1f3;
    }

    span {
      flex: 1;
    }
  }
  
  div {
    background-color: white;
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`

const Countdown = () => {
  const [time, setTime] = useState(25 * 60)
  const [active, setActive]= useState(false)
  
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minutesLeftString, minutesRightString] = String(minutes).padStart(2, '0').split('')
  const [secondsLeftString, secondsRightString] = String(seconds).padStart(2, '0').split('')

  const startCountdown = () => {
    setActive(true)
  }

  useEffect(() => {
    if(active && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000);
    } 
  }, [active, time])

  return (
    <div>
      <Div>
        <div>
          <span>{minutesLeftString}</span>
          <span>{minutesRightString}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeftString}</span>
          <span>{secondsRightString}</span>
        </div>
      </Div>
      <Button
        buttonStyle="start"
        onClick={startCountdown}
      >
        Iniciar ciclo
      </Button>
    </div>
  )
}
export default Countdown