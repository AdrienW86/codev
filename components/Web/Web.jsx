import React from 'react'
import Banner from '../Banner/Banner'
import Link from 'next/link'
import Website from '@/assets/website.png'
import Shop from '@/assets/commerce.png'
import Landing from '@/assets/landing.png'
import styles from './web.module.css'

export default function Web() {
  return (
    <section className={styles.web}>
        <h2 className={styles.h2}> Les différents types de sites web </h2>
        <p className={styles.p}> 
            Selon votre activité, vous serez amené la plupart du temps
            à choisir entre un site vitrine et un site e-commerce pour votre activité. 
            Voyns les principales différences entre ces derniers.
        </p>
        <div className={styles.sectionWhite}>
            <h3 className={styles.h3}> Les sites vitrines </h3>
            <Banner background={Website} />
            <p className={styles.description}> 
                Les sites vitrines vous permettent de présenter votre activité 
                au travers d'articles et de photos. Ils vous permettent également de 
                transmettre vos différentes coordonnées (adresse physique, téléphone, e-mail).
                Vous avez également la possibilité de mettre à disposition de vos visiteurs 
                un formulaire de contact pour qu'ils puissent vous poser diverses questions 
                concernant votre activité directement sur votre site. 
            </p>
            <div className={styles.box}>
                <Link href='https://www.le-parc-de-gouts.fr' className={styles.btn}> Voir un exemple </Link>
            </div>
        </div>
        <div className={styles.sectionBlack}>
            <h3 className={styles.black}> Les sites e-commerce </h3>
            <Banner background={Shop} />
            <p className={styles.p}> 
                Les sites e-commerce possédent toutes les propriétés d'un site vitrine 
                mais vous permettent en plus de vendre directement sur internet vos produits. 
                Grâce à un système de paiement sécurisé (Paypal, Stripe...) vos visiteurs peuvent 
                directement régler leurs achats sur votre site web. Vous êtes prévenus en temps réel 
                pour chaque commande réalisée.
        </p>
            <div className={styles.box}>
                <Link href='https://www.boutiquedufoot.fr' className={styles.btn}> Voir un exemple </Link>
            </div>
        </div>
        <div className={styles.sectionWhite}>
            <h3 className={styles.h3}> Les autres types de sites </h3>
            <Banner background={Landing} />
            <p className={styles.description}> 
                Il existe bien entendu encore d'autres types de sites web tel que les landing page 
                (marketing externe à votre site), 
                les blogs (rédaction d'articles), les porte-folio (présentation de votre travail),
                les C.V en ligne et les applications web (similaire à un application mobile mais sans
                nécessité de l'installer sur votre appareil). N'hésitez pas à nous contacter pour plus d'informations.
        </p>
        <div className={styles.box}>
                <Link href='/contact' className={styles.btn}> NOUS CONTACTER </Link>
            </div>
        </div>
    </section>
  )
}
