import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import styles from '../styles/Background.module.css';

const Card = (props) => {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <Waypoint 
        onEnter={() => setIsVisible(true)} 
        onLeave={() => setIsVisible(false)} 
    >      
    {isVisible ?                            
        <div style={{ display: isVisible ? 'flex' : 'none' }}className={styles.article}> 
            <h3 className={styles.article__title}> {props.title} </h3>
                <p> {props.content} </p>
        </div>  
    : null  
    }              
    </Waypoint>                                                 
  )
}
export default Card