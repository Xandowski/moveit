import Head from 'next/head'
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
        <p>Test</p>
      </div>
    </section>
  </div>
)

export default Home
