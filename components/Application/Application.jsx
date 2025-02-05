"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./application.module.css";

export default function Application() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0, rotate: -360, transition: { duration: 0.5 } },
  };

  return (
    <section className={styles.web}>
      {/* Titre */}
      <AnimatedElement tag="h2" className={styles.h2} variants={fadeLeft}>
        Qu’est-ce qu’une application web ?
      </AnimatedElement>

      {/* Paragraphe intro */}
      <AnimatedElement tag="p" className={styles.intro} variants={fadeLeft}>
      Une application web est un logiciel accessible directement depuis un 
          navigateur internet (comme Chrome, Firefox ou Edge), sans nécessiter
          d’installation sur un appareil. Contrairement aux applications mobiles 
          ou de bureau, elle fonctionne en ligne et s’exécute sur un serveur distant.
      </AnimatedElement>

      <h3 className={styles.h3}>Exemples d'applications web</h3>
      <ul>
  {[
    { text: "Les réseaux sociaux (Facebook, Instagram, X)", images: ["/facebook.png", "/x.png", "/instagram.png"] },
    { text: "Les plateformes de messagerie (WhatsApp, Gmail, Messenger)", images: ["/facebook.png", "/instagram.png", "/x.png"] },
    { text: "Les outils collaboratifs (Google Docs, Notion, Trello)", images: ["/facebook.png", "/instagram.png", "/x.png"] },
    { text: "Les boutiques en ligne (Amazon, Shopify)", images: ["/facebook.png", "/instagram.png", "/x.png"] },
  ].map((item, index) => (
    <li key={index} className={styles.li}>
      {/* Animation alternée entre fadeLeft et fadeRight */}
      <AnimatedElement 
        tag="p" 
        className={styles.p} 
        variants={index % 2 === 0 ? fadeLeft : fadeRight} // Alternance entre les animations
      >
        {item.text}
      </AnimatedElement>
      
      <div className={styles.imgContainer}>
        {item.images.map((src, i) => (
          <AnimatedElement
            key={i}
            tag="img"
            src={src}
            alt="logo"
            width={30}
            height={30}
            className={styles.facebook}
            variants={index % 2 === 0 ? fadeLeft : fadeRight} // Alternance pour les images aussi
          />
        ))}
      </div>
    </li>
  ))}
</ul>


      <AnimatedElement tag="p" className={styles.description} variants={fadeLeft}>
      N'importe quel type de site internet peut devenir une application web. 
                L'avantage d'une application web est qu'elle nécessite un budget
                moins conséquent qu'une application mobile si elle n'as pas vocation à être
                monétiser sur les stores. L'application web peut prendre de nombreuses formes 
                et vous en avez sûrement déjà utilisée sans le savoir. Votre messagerie en ligne, 
                un outil de convertion de photos, un générateur de facture, un jeu... 
                La seule limite des applications web et votre imagination !
                N'hésitez pas à nous contacter pour plus d'informations.
      </AnimatedElement>
      
      <div className={styles.box}>
        <Link href="/contact" className={styles.btn}>NOUS CONTACTER</Link>
      </div>
    </section>
  );
}

// Composant réutilisable pour gérer l'animation individuelle
function AnimatedElement({ tag, variants, children, ...props }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const MotionTag = motion[tag]; // Permet de rendre différents tags dynamiquement
  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
