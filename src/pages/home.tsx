import styled from 'styled-components'
import Head from 'next/head'
import { CountdownProvider } from '../contexts/CountdownContext'
import { GetServerSideProps } from 'next'
import React, { useEffect } from 'react'
import { ChallengesProvider } from '../contexts/ChallengesContext'
import { useSession } from 'next-auth/client'

import ChallengeBox from '../components/ChallengeBox'
import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import SideNavBar from '../components/SideNavBar'
import Router from 'next/router'

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

const Div = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
`

const Loading = styled.div`
  height: 100vh;
  width: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
`

const Home = (props: HomeProps) => {
  const [session] = useSession()

  if (!session) {
    useEffect(() => {
      setTimeout(() => {
        Router.push('/')
      }, 1000)
    }, [])
    return (
      <>
        <Loading>
          <h1>Carregando...</h1>
        </Loading>
      </>
    )
  }

  if (session) {
    return (
      <>
        <ChallengesProvider
          level={props.level}
          currentExperience={props.currentExperience}
          challengesCompleted={props.challengesCompleted}
        >
          <SideNavBar />
          <Div>
            <Head>
              <title>Início | move.it</title>
            </Head>
            <ExperienceBar />
            <CountdownProvider>
              <section>
                <div>
                  <Profile />
                  <CompletedChallenges />
                  <Countdown />
                </div>
                <div>
                  <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>
          </Div>
        </ChallengesProvider>
      </>
    )
  }
}

export default Home

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  }
}