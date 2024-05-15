import React from 'react'
import styles from './sticker.module.css'

export default function Sticker(props) {
  return (
    <h2 className={props.color === 'white' ? styles.white : styles.black}>{props.sticker} </h2>
  )
}
