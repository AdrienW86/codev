import React from 'react'
import Head from 'next/head'
import Title from '@/components/Title/Title'
import Background from '@/assets/background2.png'
import Banner from '@/components/Banner/Banner'
import Web from '@/components/Web/Web'
import styles from '@/styles/Home.module.css'

export default function index() {
  return (
    <>
      <Head>
        <title> CODEV </title>
        <meta name="description" content="Codev, sites web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Title title="Les sites web"/>
      <Banner background={Background} />
      <Web />
      </main>
    </>
  )
}
