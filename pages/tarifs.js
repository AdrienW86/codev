import React from 'react';
import Head from 'next/head';
import Title from '../components/Title';
import Background from '../components/Background';

export default function tarifs() {
  return (
   <>
    <Head>
      <title>Codev | Tarifs</title>
      <meta name="description" content="Création de sites web" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title title='Venez découvrir nos tarifs'/>
    <Background />
   </>
  )
}
