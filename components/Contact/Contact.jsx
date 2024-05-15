import React from 'react';
import styles from './contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contact}>
        <p className={styles.p}> N'hésitez pas à nous contacter pour vos projets numériques 
            via nos différents supports. La prise de rendez-vous et les devis sont gratuits.
            Nous répondrons avec plaisir à toutes vos questions.
        </p>
        <div className={styles.infos}>
            <p className={styles.txt}> Téléphone: 06.66.67.27.09</p>
            <p className={styles.txt}> Email: 06.66.67.27.09</p>
        </div>
        <div>
            
        </div>
    </section>
  )
}
