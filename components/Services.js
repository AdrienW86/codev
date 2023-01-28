import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import Image from 'next/image';
import styles from '../styles/Services.module.css';

// Data
import { articles } from '../pages/api/articles';

 const Services = () => {

  const [isVisible, setIsVisible] = useState(false)

  return (
    <Waypoint 
      onEnter={() => setIsVisible(true)} 
      onLeave={() => setIsVisible(false)} 
    >    
      <section className={styles.services}>       
        {articles.map((el,index) => {
          return  <div style={{ display: isVisible ? 'flex' : 'none' }} key={index} className={styles.services__articles}  > 
            <article className={styles.article}> 
              <h3 className={styles.article__title}> {el.title} </h3>
              <p className={styles.article__p}> {el.article} </p>
            </article> 
            <Image 
              className={styles.article__image}             
              priority='blur'        
              src={el.image}  
              alt={el.alt}                     
            />
          </div>             
        })}
      </section> 
    </Waypoint>         
  )   
}
export default Services