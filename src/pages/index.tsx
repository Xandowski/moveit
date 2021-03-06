import styled from 'styled-components'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { useSession, getSession } from 'next-auth/client'

import Login from '../components/Login'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import Loading from '../components/Loading'

const LoginPage = () => {
  const [session, loading] = useSession()

  // if (typeof window !== 'undefined' && loading) return null

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
