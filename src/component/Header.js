import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <Link href="/">Home</Link>
            <Link href="/test">Test</Link>
            <Link href="/not">not page</Link>
            <Link href="/ApiTest">api</Link>
            <Link href="/Firebase">Firebase</Link>
        </header>
    </>
  )
}

export default Header