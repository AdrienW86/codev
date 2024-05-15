import React from 'react'
import Link from 'next/link'
import styles from './phone.module.css'

export default function Phone() {
  return (
    <section className={styles.web}>
        <h2 className={styles.h2}> Applications mobiles </h2>
            <p className={styles.p}> 
                Vous avez une idée d'application mobile ? Vous avez un concept innovant à mettre en avant ?
                Le développement et la monétisation d'une application mobile peut-être très rentable mais il y 
                a beaucoup de chose à prendre en compte et à savoir avant de se lancer sur les stores.
            </p>       
            <p className={styles.description}> 
                En effet le développement d'une application mobile bien qu'il puisse être très lucratif, 
                possède bon nombre d'aspects à prendre en compte. Pour monétiser votre application vous devrez 
                la déployer sur l'app store pour les appareils IOS ou sur l'app store pour les appareils android.
                Bien entendu vous pouvez également la déployer sur les deux plateformes, ce qui est recommandé. 
                Il existe plusieurs manières de faire en fonction du résultat espérer et des priorités 
                (performances, budget...). Venez nous parler de votre projet pour étudier la manière la 
                plus efficace de le réaliser.
                
            </p>
            <div className={styles.box}>
                <Link href='/contact' className={styles.btn}> NOUS CONTACTER </Link>
            </div>
    </section>
  )
}