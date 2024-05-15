import React from 'react';
import Form from '@/components/Form/Form'
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
            <p className={styles.txt}> <a href='mailto:support@code-v.fr'> Email: support@code-v.fr </a> </p>
        </div>
        <div>
           <Form /> 
        </div>
    </section>
  )
}
