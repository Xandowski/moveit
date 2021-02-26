import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import Lottie from 'react-lottie'

import animationData from '../../congratulations.json'

const Div = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = styled(motion.div)`
  background: ${( {theme} ) => theme.colors.white};
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div:first-child {
    position: absolute;
  }

  header {
    font-size: 8.75rem;
    font-weight: 600;
    width: 100%;
    color: ${({theme}) => theme.colors.blue};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
    display: inline-block;
    text-align: center;
  }

  strong {
    font-size: 2.25rem;
    color: ${({theme}) => theme.colors.title};
  }

  p {
    font-size: 1.25rem;
    color: ${({theme}) => theme.colors.text};
    margin-top: 0.25rem;
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0px;
  }

  a {
    background: ${( {theme} ) => theme.colors.blueTwitter};
    font-size: 1rem;
    color: ${({theme}) => theme.colors.white};
    border-radius: 5px;
    width: 290px;
    height: 50px;
    margin-top: 0.25rem;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`

const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  const defaultAnimateOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    speed: 1.5
  }

  return (
    <Div>
      <Modal
        transition={{ delay: 0.5, duration: 1}}
        variants={{
          show: {opacity: 1, y: '0'},
          hidden: {opacity: 0, y: '200px'},
        }}
        initial="hidden"
        animate="show"
      >
        <div>
          <Lottie
            options={defaultAnimateOptions}
            height={250}
            width={250}
          />
        </div>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button 
          type="button"
          onClick={closeLevelUpModal}
        >
          <img src="/icons/close.svg" alt="close modal" />
        </button>

        <a href="">
          Compartilhar no twitter
          <img src="/icons/twitter.svg" alt="twitter icon"/>
        </a>
      </Modal>
    </Div>
  )
}

export default LevelUpModal