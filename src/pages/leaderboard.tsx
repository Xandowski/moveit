import { useSession } from 'next-auth/client'
import Head from 'next/head'
import Router from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'
import LeaderboardTable from '../components/LeaderboardTable'
import Loading from '../components/Loading'
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

const leaderboard = (props: LeaderboardProps) => {
  const [session, loading] = useSession()

  useEffect(() => {
    if (!session) {
      setTimeout(() => {
        Router.push('/')
      }, 1000)
    }
  }, [])

  return (
    <>
      {(session && (
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
      )) ||
        (loading && <Loading />)}
    </>
  )
}

export default leaderboard
