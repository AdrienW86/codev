import React from 'react'
import Head from 'next/head'
import Appli from '@/assets/appli.png'
import Title from '@/components/Title/Title'
import Banner from '@/components/Banner/Banner'
import Application from '@/components/Application/Application'
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
      <Title title="Applications web"/>
      <Banner background={Appli} />
      <Application />
      </main>
    </>
  )
}