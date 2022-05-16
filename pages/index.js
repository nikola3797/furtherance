import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomePage from '../components/HomePage';

export async function getStaticProps(context) {
  return {
    props: {},
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Furtherance</title>
        <link rel="icon" href="/mini-logo.svg" />
      </Head>
      <HomePage />
    </div>
  )
}

