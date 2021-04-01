import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p align="center">Intern at Intelloger..</p>

        <h1 align="center" className="nextPage">
          Read{' '}
          <Link href="/posts/first-post">
           <a>this page!</a>
          </Link>
        </h1>
        
      </section>
    </Layout>
  )
}