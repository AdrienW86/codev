"use client"

import React from 'react'
import { motion } from "framer-motion"
import styles from './title.module.css'

export default function Title(props) {
  return (
    <div className={styles.container}>
      <motion.h1 
        className={styles.h1}
        initial={{ opacity: 0, x: 150 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }}
      >
        {props.title} 
      </motion.h1>
    </div>
   
  )
}
