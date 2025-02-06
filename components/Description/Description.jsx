"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import de la bibliothèque
import styles from './description.module.css';

export default function Description(props) {
  // Animation pour la balise <p> (fade-in et translation vers la droite)
  const textAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  // Animation pour la balise <Link> (fade-in et translation vers la gauche)
  const linkAnimation = {
    hidden: { opacity: 0, x: 100 }, // Départ de la droite
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Arrêt au centre
  };

  // Hook pour détecter si l'élément est visible
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation rejouée chaque fois que l'élément entre dans la vue
    threshold: 0.1, // Déclenche l'animation lorsque 10% de l'élément est visible
  });

  return (
    <section className={props.color === 'white' ? styles.white : styles.black}>
      {/* Animation de la balise <p> uniquement */}
      <motion.p
        ref={ref} // Attacher l'observateur à la balise <p>
        className={styles.p}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // L'animation se déclenche chaque fois que l'élément est visible
        variants={textAnimation}
      >
        {props.description}
      </motion.p>
      
      {/* Animation de la balise <Link> (inverse du mouvement de <p>) */}
      <motion.div
        ref={ref} // Attacher l'observateur à la balise <Link>
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={linkAnimation}
      >
        <Link
          className={props.color === 'white' ? styles.btnWhite : styles.btnBlack}
          href={props.link}
        >
          {props.txt}
        </Link>
      </motion.div>
    </section>
  );
}

