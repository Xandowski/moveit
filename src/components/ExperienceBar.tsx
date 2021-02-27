import { useContext } from 'react'
import styled from 'styled-components'
import { ChallengesContext } from '../contexts/ChallengesContext'

const HeaderBar = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;

    div {
      height: 4px;
      border-radius: 4px;
      background: var(--green);
    }

    span {
      position: absolute;
      top: 12px;
      transform: translateX(-50%);
    }
  }
`

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  )

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  )

  return (
    <HeaderBar>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </HeaderBar>
  )
}

export default ExperienceBar
