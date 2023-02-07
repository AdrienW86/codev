import React from 'react';
import Image from 'next/image';
import styles from '../styles/Banner.module.css'
import imgBanner from '../assets/banner.jpg'

const Banner = () => {
  return (
    <section className={styles.banner}> 
        <h1 className={styles.title}>
          Création de  <br/> <a className= {styles.link__title} href="https://nextjs.org"> sites web </a>
        </h1>
        <Image
          src= {imgBanner}
          sizes ='responsive'
          priority='blur'
          className={styles.banner__image}           
          alt= "photo"
        />           
    </section>
  )
}
export default Banner