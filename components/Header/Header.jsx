"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion"
import styles from './header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  return (
  <header className={styles.header}>
    <section className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href='/'>
          <motion.img
            initial={{ opacity: 0, x: -150 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            width={90}
            height={90}
            src="/logo2.png"               
            alt="logo"
            >             
          </motion.img>         
        </Link>
      </div>
      <div className={styles.buttonBox}> 
        <button className={`${styles.hamburger} ${isMenuOpen ? styles.open : styles.close}`} onClick={handleMenuToggle} aria-label="hamburger button">
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </button>
      </div>
    </section>
    
    {isMenuOpen && 
      <section className={styles.menu}>
        <ul>
          <li> <Link className={styles.li} href="/" onClick={handleMenuToggle}> Accueil </Link></li>
          <li> <Link className={styles.li} href="/web" onClick={handleMenuToggle}> Sites web </Link></li>
          <li> <Link className={styles.li} href="/appli" onClick={handleMenuToggle}> Applications web </Link></li>
          <li> <Link className={styles.li} href="/mobiles" onClick={handleMenuToggle}> Applications mobiles </Link></li>
          <li> <Link className={styles.li} href="/contact" onClick={handleMenuToggle}> Contact </Link></li>
        </ul>
      </section>}
  </header>
  )
}