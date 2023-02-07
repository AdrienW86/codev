import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import Image from 'next/image';
import styles from '../styles/Services.module.css';

const ServicesCard = (props) => {

    const [isVisible, setIsVisible] = useState(false)

  return ( 
    <Waypoint 
      onEnter={() => setIsVisible(true)} 
      onLeave={() => setIsVisible(false)} 
    >   
    {isVisible 
        ?
        <div className={styles.services__articles}  > 
            <article className={styles.article}> 
                <h3 className={styles.article__title}> {props.title} </h3>
                <p className={styles.article__p}> {props.article} </p>
            </article>  
                  
            <Image 
                className={styles.article__image}             
                priority='blur'        
                src={props.image}  
                alt={props.alt}                     
            />
           
        </div> 
        :
        null
    }     
    </Waypoint>  )
}
export default ServicesCard