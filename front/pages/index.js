import Head from 'next/head';
import Image from 'next/legacy/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../assets/clavier.jpg';
import Background from '../assets/background.jpg';
import Responsive from '../assets/responsive.jpg';

import {articles} from './api/data'
import styles from '../styles/Home.module.css';

export default function Home() {
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
            alt="banner's picture"
          />
        </section>
        <h1 className={styles.title}> Création de sites web </h1>
       

      
     <section className={styles.hero}>
     <div>
      <Image 
        src={Background}
        height={4000}
        width={6000}
        loading='lazy'
        
        className={styles.background_img}
        alt="menu's picture"
      />
      </div>
      <div className={styles.background_img_txt}>
        <ul className={styles.background_ul}>
          <li className={styles.background_li}> Site vitrine</li>
          <li className={styles.background_li}> E-commerce</li>
          <li className={styles.background_li}> et plus encore...</li>
        </ul>
       
      </div>
    </section>    
    <main className={styles.main}>
        
       <section className={styles.home_intro_text}>
       <button className={styles.btn_intro}>
          Voir les offres
        </button>
          <p> {articles[0].content} </p>
        </section>

        <section className={styles.home_intro_text2}>
          <p> {articles[1].content} </p>
          <button className={styles.btn_intro2}>
          Voir les offres
        </button>
        </section>
        <Image 
        src={Responsive}
        height={4000}
        width={6000}
        loading='lazy'
        layout='responsive'
        className={styles.background_img}
        alt="menu's picture"
      />
      </main>
     <Footer />
       
    </>
  )
}
