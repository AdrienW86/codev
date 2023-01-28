import Link from 'next/link';
import styles from '../styles/Intro.module.css';

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.card}>
        <h2> Service de qualité</h2>
        <p className={styles.p_intro}> Nous réalisons des applications répondant aux meilleurs pratiques. </p> 
        <Link className={styles.card_btn} href='/contact'> Voir → </Link>                    
      </div>
      <div className={styles.card}>
        <h2> Prix abordables</h2>
        <p className={styles.p_intro}> Soyez certain d’avoir les devis les plus justes pour vos projets. </p>
        <Link className={styles.card_btn} href='/tarifs'> Voir → </Link>
      </div>        
      <div className={styles.card}>
        <h2> Support réactif</h2>
        <p className={styles.p_intro}> Notre équipe s’engage à vous répondre en moins de 24h. </p>
        <Link className={styles.card_btn} href='/contact'> Voir → </Link>
      </div>    
      <div className={styles.card}>
        <h2> Une question ?</h2>
        <p className={styles.p_intro_question}> Nous répondons à toutes vos questions le plus rapidemment possible. </p>
        <Link className={styles.card_btn} href='/contact'> C'est parti → </Link>
      </div>
    </section>
  )
}
export default Intro