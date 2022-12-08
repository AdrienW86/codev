import Head from 'next/head';
import Image from 'next/legacy/image';
import Navbar from '../components/Navbar';
import Banner from '../assets/laptop.jpg';
import styles from '../styles/Tarif.module.css';

 const Tarif = () => {
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
        <h1 className={styles.title_tarif}> Des tarifs adaptés à vos besoins </h1>
            <section className={styles.menu}>
           
                <div className={styles.card}>
                    <h2 className={styles.card_title}> Tarif starter </h2>
                    <p className={styles.price}> à partir de <span className={styles.span_price}> 499€</span></p>
                    <ul className={styles.description}> 
                        <li className={styles.li_card}> Création d'un site web via un CMS</li> 
                        <li className={styles.li_card}> Optimisation SEO</li>
                        <li className={styles.li_card}> Création d'un thème personalisé</li>
                    </ul>
                    <button className={styles.btn_card}>
                        C'est parti !
                    </button>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.card_title}> Tarif medium </h2>
                    <p className={styles.price}> à partir de <span className={styles.span_price}> 799€</span></p>
                    <ul className={styles.description}> 
                        <li className={styles.li_card}> Création d'une application web </li> 
                        <li className={styles.li_card}> Single page application</li>
                        <li className={styles.li_card}> Optimisation SEO</li>
                        <li className={styles.li_card}> Optimisation des performances</li>
                    </ul>
                    <button className={styles.btn_card}>
                        C'est parti !
                    </button>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.card_title}> Tarif personalisé </h2>
                    <p className={styles.price}> <span className={styles.span_price}> sur devis </span></p>
                    <ul className={styles.description}> 
                        <li className={styles.li_card}> Création d'une application web sur mesure selon des besoin spécifiques</li> 
                        <li className={styles.li_card}> Création des différents support nécessaires (API, base données...)</li>
                        <li className={styles.li_card}> Optimisation des performances et du SEO </li>                      
                    </ul>
                    <button className={styles.btn_card}>
                        C'est parti !
                    </button>
                </div>
            </section>
    </>
  )
}

export default Tarif