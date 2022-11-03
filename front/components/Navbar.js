import React from 'react';

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
                    Accueil       
                </li>
                <li className={styles.link}> 
                    Tarif 
                </li>
                <li className={styles.link}> 
                    Contact          
                </li>
             </ul>
        </section> 
    </nav>
  )
}
export default Navbar