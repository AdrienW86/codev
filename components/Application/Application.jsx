import React from 'react'
import Link from 'next/link'
import styles from './application.module.css'

export default function Application() {
  return (
    <section className={styles.web}>
        <h2 className={styles.h2}> Applications web </h2>
        <p className={styles.p}> 
            Selon votre activité, vous serez peut-être amené à vouloir développer 
            une application web pour votre entreprise.
            Une appliucation web s'utilise comme une application mobile sauf qu'elle 
            ne nécessite pas d'installation de la part de l'utilisateur.
            Néanmoins il est tout à fait possible d'installer sur son smartphone ou 
            sur son ordinateur une application web. L'avantage de l'installation est 
            la possibilité de pouvoir utiliser l'application 
            en mode hors ligne (sans connexion internet).
        </p>
        
            <p className={styles.description}> 
                N'importe quel type de site internet peut devenir une application web. 
                L'avantage d'une application web est qu'elle est qu'elle nécessite un budget
                moins conséquent qu'une application mobile si elle n'as pas vocation à être
                monétiser sur les stores. L'application web peut prendre de nombreuses formes 
                et vous en avez sûrement déjà utiliser sans le savoir. Votre messagerie en ligne, 
                un outil de convertion de photos, un générateur de facture, un jeu... 
                La seule limite des applications web et votre imagination !
                N'hésitez pas à nous contacter pour plus d'informations.
            </p>
            <div className={styles.box}>
                <Link href='/contact' className={styles.btn}> NOUS CONTACTER </Link>
            </div>
    </section>
  )
}
