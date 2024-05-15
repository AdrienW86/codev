import React from 'react'
import Link from 'next/link'

import styles from './description.module.css'

export default function Description(props) {
  return (
    <section>
        <p className={styles.p}> {props.description} </p>
        <Link className={styles.btn} href={props.link}> {props.txt} </Link>
    </section>
  )
}
