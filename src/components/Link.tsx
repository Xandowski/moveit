import { useRouter } from 'next/dist/client/router'
import NextLink from 'next/link'
import React from 'react'

export interface LinkProps {
  children: React.ReactNode
  href: string
}

const Link = ({ children, href, ...props }: LinkProps) => {
  const router = useRouter()
  return (
    <NextLink href={href} passHref>
      <a
        {...props}
        aria-current={router.pathname === href ? 'page' : undefined}
      >
        {children}
      </a>
    </NextLink>
  )
}

export default Link
