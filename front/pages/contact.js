import React from 'react';
import Head from 'next/head';
import Image from 'next/legacy/image';
import Banner from '../assets/desktop.jpg';
import Background from '../assets/coffee.jpg';
import Background2 from '../assets/background2.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Form.module.css';

import Formulaire from '../components/Formulaire'


 const Contact = () => {
  return (
    <>
        <Head>
            <title>Codev</title>
            <meta name="description" content="Création de sites web" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <section className={styles.banner}>
          <Image 
            src={Banner}
            height={4000}
            width={6000}
            loading='lazy'
            layout='responsive'
            className={styles.banner_img}
            alt='banniere'
          />
        </section>
        <h1> Votre projet </h1>
       

      <div className={styles.form_container}>
       <Formulaire className={styles.form} />
      </div>
      <h2 className={styles.contact_title}> Nos coordonnées </h2>
      <div className={styles.background2_container}>
        <Image 
          src={Background}
          height={4000}
          width={6000}
          loading='lazy'
          layout='responsive'          
          alt='banniere'
          className={styles.background2_img}
        />
        <p className={styles.contact_link}> Tél: 06.03.30.29.17</p>
        <p className={styles.contact_link}> Email: adrien_weiss@outlook.fr</p>
      </div>
      <Footer />
    </>
  )
}
export default Contact