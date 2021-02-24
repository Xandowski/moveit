import styled from 'styled-components'

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
      color: var(--title);
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

const Profile = () => (
  <ProfileContainer>
    <img src="https://github.com/Xandowski.png" alt="github avatar"/>
    <div>
      <strong>Alexandre Morais</strong>
      <p>
        <img src="icons/level.svg" alt="level"/>
        Level 1
      </p>
    </div>
  </ProfileContainer>
)

export default Profile