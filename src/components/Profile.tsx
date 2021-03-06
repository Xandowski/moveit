import { useContext } from 'react'
import styled from 'styled-components'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { useSession } from 'next-auth/client'

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  > div {
    margin-left: 1.5rem;

    strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.title};
    }

    p {
      font-size: 1rem;
      margin-top: 0.5rem;

      img {
        margin-right: 0.5rem;
      }
    }
  }
`

const Profile = () => {
  const { level } = useContext(ChallengesContext)
  const [session] = useSession()

  return (
    <ProfileContainer>
      <img src={`${session?.user.image}`} alt="github avatar" />
      <div>
        <strong>{session?.user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  )
}

export default Profile
