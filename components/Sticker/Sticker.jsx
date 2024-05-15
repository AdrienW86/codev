import React from 'react'
import styles from './sticker.module.css'

export default function Sticker(props) {
  return (
    <h2 className={styles.description}>{props.sticker} </h2>
  )
}
