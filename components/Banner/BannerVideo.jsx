import React from 'react'
import Link from 'next/link'
import styles from './banner.module.css'

export default function BannerVideo(props) {
  return (
    <div className={styles.container}>  
      <Link href={`${props.link}`}>
        <section className={styles.bannervideo}>       
          <h1 className={styles.h1}> {props.title} </h1>
          <p className={styles.description}>                
            {props.description}
          </p>
          
          {/* Remplacer l'image par une vidéo */}
          <video
            src="/banner.mp4" // Utilise une URL de vidéo ou un chemin local
            autoPlay
            loop
            muted
            className={styles.backgroundvideo}
            type="video/mp4" // Assurez-vous que le type est correct
          />
        </section>                  
      </Link>
    </div>
  )
}