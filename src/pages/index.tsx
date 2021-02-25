import Head from 'next/head'
import ChallengeBox from '../components/ChallengeBox'
import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'

const Home = () => (
  <div>
  <Head>
    <title>Início | move.it</title>
  </Head>
    <ExperienceBar progress="50%" />
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
  </div>
)

export default Home
