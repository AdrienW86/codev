import React from 'react'

import styles from './description.module.css'

export default function Description(props) {
  return (
    <section>
        <p className={styles.p}> {props.description} </p>
    </section>
  )
}
