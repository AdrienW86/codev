// Imports
import Image from 'next/image';
import Card from './Card';
import Subscribe from './Subscribe';
import background from '../assets/background.jpg';
import background2 from '../assets/background2.jpg';
import background3 from '../assets/background3.jpg';

// Data 
import { card, subscribe } from '../pages/api/card';

// Styles
import styles from '../styles/Background.module.css';

 const Background = () => {
 
  return (  
    <section className={styles.background__container}>     
        <div className={styles.background}>
            <div className={styles.article__container}>         
                <Image 
                    src={background}  
                    className={styles.background__image} 
                    priority='blur'
                    alt="fond d'écran d'une personne avec sa carte de paiement et son clavier"
                />             
                {card.map((el, index) => {
                    return <Card key = {index} title = {el.title} content = {el.content} />
                })}             
            </div>
        </div>
        <div className={styles.banner__text}> 
            <h2 className={styles.h2__banner__text}> Nos abonnements </h2>
            <p> Afin d'assurer une bonne mise en ligne de votre site et pour vous permettre de vous concentrer uniquement
                sur votre activité, nous proposons à nos clients plusieurs solutions de déploiement adapté à toutes les situations.
                Que vous désiriez gérez vous-même votre site intégralement, en partie ou pas du tout, nous saurons trouver
                la solution qui vous correspond.
            </p>
        </div>
        <div className={styles.background} >
            <div className= {styles.subscribe__container}>
                <Image 
                    src={background2}  
                    className={styles.background__image}
                    priority='blur'
                    alt="fond d'écran d'un bureau avec un café et un clavier"
                    />
                {subscribe.map((el, index) => {
                    return <Subscribe key = {index} title = {el.title} price = {el.price} content ={el.content}/>
                })}         
            </div>
        </div>
        <div className={styles.background}>
            <div>         
                <Image 
                    src={background3}  
                    className={styles.background__image}
                    priority='blur'
                    alt="fond d'écran avec un clavier"
                />          
            </div>
        </div>
    </section>     
  )
}
export default Background