import Image from 'next/image';
import banner from '../assets/banner.jpg';
import background2 from '../assets/background2.jpg';
import background3 from '../assets/background3.jpg';

import { articles } from '../pages/api/articles';

// Components
import Intro from '../components/Intro';
import Description from '../components/Description';
import ServicesCard from '../components/ServicesCard';

import styles from '../styles/Background.module.css';

const HomeBackground = () => {

  return (
    <section className={styles.background__container}>     
        <div className={styles.background}>       
            <div className={styles.article__container}>         
                <Image 
                    src={banner}  
                    className={styles.background__image} 
                    priority='blur'
                    alt="fond d'écran d'une personne avec sa carte de paiement et son clavier"
                />             
                <Intro />               
            </div>
        </div>
        <div className={styles.background2} >
            <div className= {styles.subscribe__container}>
                <Image 
                    src={background2}  
                    className={styles.background__image2}
                    priority='blur'
                    alt="fond d'écran d'un bureau avec un café et un clavier"
                    />
                <div className={styles.h2__container}>
                <p> Afin de répondre à vos exigences, nous assurons un travail 
                    de qualité grâce à une veille technologique constante et une grande disponibilité.
                    <br/> N'hésitez pas à nous contacter pour un devis gratuit.
                </p>
                </div>
                <Description />      
            </div>            
        </div>
        <div className={styles.background3} >     
            <Image 
                    src={background3}  
                    className={styles.background__image3}
                    priority='blur'
                    alt="fond d'écran avec un clavier"
                />
                <div id='services' className={styles.services__title}>
                    <h2 className={styles.services__span}> Services </h2>
                   
                </div>
                
<section  className={styles.services}>
                {articles.map((el,index) => {
        return <ServicesCard  
                  key={index} title={el.title} 
                  article={el.article} image={el.image} alt={el.alt}
                />       
      })}
        </section>        
               
        </div>
        <div className={styles.background4} >
            <div className= {styles.subscribe__container}>
            
                
            </div>
        </div>
        <div className={styles.background}>
            <div>         
                <Image 
                    src={background3}  
                    className={styles.background__image3}
                    priority='blur'
                    alt="fond d'écran avec un clavier"
                />  
                
            </div>
        </div>
</section>  
  )
}
export default HomeBackground
