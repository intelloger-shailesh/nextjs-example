import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <>
        <Head>
        <title>First Post</title>
        </Head>
      <h1 align="center">Next.js Client side Navigation</h1>
      <h2 align="center">
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
    )
  }