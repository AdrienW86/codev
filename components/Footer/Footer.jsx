import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Instagram from '@/assets/instagram.svg'
import Facebook from '@/assets/facebook.svg'
import Twitter from '@/assets/twitter.svg'
import styles from './footer.module.css'

export default function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

  return (
    <footer className={styles.footer}>
        <div className={styles.p}>
            <Link href='https://www.instagram.com/codev66000/' className={styles.p} >
                <Image 
                    width={20}
                    height={20}
                    src={Instagram}
                    alt="logo instagram"
                />
            </Link>
            <Link href='https://www.facebook.com/profile.php?id=61550727002805&locale=fr_FR' className={styles.li} >
                <Image 
                    width={20}
                    height={20}
                    src={Facebook}
                    alt="logo facebook"
                />
            </Link>
            <Link href='https://twitter.com/Codev66' className={styles.li} >
                <Image 
                    width={20}
                    height={20}
                    src={Twitter}
                    alt="logo x"
                />
            </Link>
        </div>
        <div className={styles.p} > 
            <Link href='https://code-v.fr' className={styles.li} >
            Copyright © CODEV - {currentYear}. Tous droits réservés.
            </Link> 
        </div>
    </footer>
  )
}