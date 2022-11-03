import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Banner from '../assets/banner.jpg';
import Client from '../assets/client.png';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Création de sites web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      < Navbar />
        <section className={styles.banner}>
          <Image 
            src={Banner}
            height={960}
            width={1440}
            layout='responsive'
            className={styles.banner_img}
          />
          <h1 className={styles.title}> Création de sites web </h1>
        </section>


      <main className={styles.main}>
        <section className={styles.last_product}>
          <Image 
            src={Client}
            height={960}
            width={1440}
            layout='responsive'
            className={styles.banner_img}
          />
        </section>
        <section className={styles.intro}>
          <article>
            Nous vous proposons la meilleure solution possible pour votre projet web.
            Que ce soit pour un site vitrine, un site e-commerce ou tout autre demande, 
            nous nous efforcerons de trouver la solution la plus adaptée à vos besoins 
            et à votre budget.
          </article>
        </section>
       
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </>
  )
}
