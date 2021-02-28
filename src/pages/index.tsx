import styled from 'styled-components'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { useSession, getSession } from 'next-auth/client'

import Login from '../components/Login'
import Router from 'next/router'
import { GetServerSideProps } from 'next'

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

const LoginPage = () => {
  const [session, loading] = useSession()

  if (session) {
    useEffect(() => {
      Router.push('/home')
    }, [])

    return (
      <>
        <Loading>
          <h1>Carregando...</h1>
        </Loading>
      </>
    )
  }

  return (
    <>
      {loading && (
        <Loading>
          <h1>Carrregando...</h1>
        </Loading>
      )}
      <Head>
        <title>Faça o login | move.it</title>
      </Head>
      <Login />
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
