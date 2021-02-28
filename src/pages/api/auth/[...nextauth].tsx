import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { NextApiRequest, NextApiResponse } from 'next'

const options = {
  providers: [
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID_TEST!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET_TEST!,
      domain: process.env.AUTH0_DOMAIN!,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID_TEST!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET_TEST!,
    }),
  ],
}

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)
