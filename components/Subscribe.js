import { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import styles from '../styles/Background.module.css';

const Subscribe = (props) => {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <Waypoint 
        onEnter={() => setIsVisible(true)} 
        onLeave={() => setIsVisible(false)} 
    > 
    {isVisible ?  
        <div className={styles.subscribe__article}>               
            <div className={styles.article}> 
                <h3 className={styles.article__title}> {props.title} 
                    <span className={styles.price__span}> {props.price}€ </span> <span className={styles.month__span}> / mois </span> 
                </h3>                      
                <ul>
                    {props.content.map((el, index) => {
                        return <li key = {index}> {el} </li>
                    })}
                </ul>
            </div>
        </div>  
    : null
    }
    </Waypoint>          
  )
}
export default Subscribe