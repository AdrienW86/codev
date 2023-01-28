import { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import Image from "next/image";
import styles from '../styles/Description.module.css';
import imgCard from '../assets/desktop-img.png';
import checked from '../assets/checkbox.svg';

const Description = () => {
 
  const [isVisible, setIsVisible] = useState(false)
  
  return (
    <Waypoint
      onEnter={() => setIsVisible(true)}
      onLeave={() => setIsVisible(false)}
    >
      {isVisible ?
        <section className={styles.description}>
          <div className={styles.description__img}>
            <Image 
              src={imgCard}            
              priority='blur'         
              alt= "illustration d'un ordinateur et d'un téléphone"
              className={styles.card__image}
            />
          </div>
          <div className={styles.description__card}>
            <h2 className={styles.h2__card}> Construisons ensemble votre identité numérique </h2>
                <div className={styles.ul__container}>
                  <ul className={styles.description__ul}>
                    <li className={styles.description__li}>
                      <Image src={checked} className={styles.checked} alt='checked'/> Prix abordable 
                    </li>
                    <li className={styles.description__li}> 
                      <Image src={checked} className={styles.checked} alt='checked'/> Disponibilité
                    </li>
                    <li className={styles.description__li}> 
                      <Image src={checked} className={styles.checked} alt='checked'/> Rendez-vous gratuit
                    </li>              
                  </ul>
                  <ul className={styles.description__ul}>         
                    <li className={styles.description__li}>
                      <Image src={checked} className={styles.checked} alt='checked'/> Créativité
                    </li>
                    <li className={styles.description__li}>
                      <Image src={checked} className={styles.checked} alt='checked'/> Support Réactif
                    </li>
                    <li className={styles.description__li}>
                      <Image src={checked} className={styles.checked} alt='checked'/> Solutions innovantes
                    </li>
                  </ul>
                </div>
          </div>
        </section> 
      : null
      }  
    </Waypoint>   
  )
}
export default Description