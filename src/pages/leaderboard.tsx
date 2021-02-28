import { useSession } from 'next-auth/client'
import Head from 'next/head'
import Router from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'
import LeaderboardTable from '../components/LeaderboardTable'
import SideNavBar from '../components/SideNavBar'
import { ChallengesProvider } from '../contexts/ChallengesContext'

interface LeaderboardProps {
  level: number
  currentExperience: number
  challengesCompleted: number
  totalExperience: number
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

const leaderboard = (props: LeaderboardProps) => {
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
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
        totalExperience={props.totalExperience}
      >
        <SideNavBar />
        <Div>
          <Head>
            <title>Leaderboard | move.it</title>
          </Head>
          <LeaderboardTable />
        </Div>
      </ChallengesProvider>
    )
  }
}

export default leaderboard
