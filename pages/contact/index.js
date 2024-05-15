import React from 'react'
import Head from 'next/head'
import Background from '@/assets/contact.png'
import Banner from '@/components/Banner/Banner'
import Contact from '@/components/Contact/Contact'
import styles from '@/styles/Home.module.css'

export default function index() {
  return (
    <>
      <Head>
        <title> CODEV </title>
        <meta name="description" content="Codev, contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Banner background={Background} />
      <Contact />
      </main>
    </>
  )
}
