import React, { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Router from 'next/router'
import { useSession, getSession } from 'next-auth/client'

import Login from '../components/Login'
import Loading from '../components/Loading'

// import { setToLS } from '../utils/cookies'

const LoginPage = () => {
  const [session, loading] = useSession()
  // setToLS('all-themes', themes.data.light)

  useEffect(() => {
    if (session) {
      Router.push('/home')
    }
  }, [session])

  return (
    <>
      <Head>
        <title>Faça o login | move.it</title>
      </Head>
      {(!session && <Login />) || (loading && <Loading />)}
    </>
  )
}

export default LoginPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx)
  return {
    props: { session },
  }
}
