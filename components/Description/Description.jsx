import React from 'react'
import Link from 'next/link'

import styles from './description.module.css'

export default function Description(props) {
  return (
    <section className={props.color === 'white' ? styles.white : styles.black}>
        <p className={styles.p}> {props.description} </p>
        <Link className={props.color === 'white' ? styles.btnWhite : styles.btnBlack} href={props.link}> {props.txt} </Link>
    </section>
  )
}
