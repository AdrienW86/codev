import React from 'react'
import Head from 'next/head'
import Mobile from '@/assets/mobile.png'
import Banner from '@/components/Banner/Banner'
import Phone from '@/components/Phone/Phone'
import styles from '@/styles/Home.module.css'

export default function index() {
  return (
    <>
      <Head>
        <title> CODEV </title>
        <meta name="description" content="Codev, applications web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Banner background={Mobile} />
      <Phone />
      </main>
    </>
  )
}
