import styled from 'styled-components'

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

interface ExperienceBarProps {
  progress: string
}

const ExperienceBar = ({ progress }: ExperienceBarProps) => (
  <HeaderBar>
    <span>0 xp</span>
    <div>
      <div style={{ width: progress }} />
      <span style={{ left: progress }}>300 xp</span>
    </div>
    <span>600 xp</span>
  </HeaderBar>
)

export default ExperienceBar
