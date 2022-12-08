import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
        <section className={styles.logo}>
            <div>Code</div>
            <div className={styles.v_span}>v</div>
        </section>
        <section className={styles.navigation}>
            <ul className={styles.ul_nav}>
                <li className={styles.link}> 
                    <Link href="/"> Accueil </Link>       
                </li>
                <li className={styles.link}> 
                    <Link href= "/tarif"> Tarif </Link>    
                </li>
                <li className={styles.link}> 
                    <Link href= "/contact"> Contact </Link>           
                </li>
            </ul>
        </section> 
    </nav>
  )
}
export default Navbar