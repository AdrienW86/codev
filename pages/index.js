import Head from 'next/head'
import Title from '@/components/Title/Title'
import Banner from '@/components/Banner/Banner'
import BannerVideo from '@/components/Banner/BannerVideo'

import Background2 from '@/assets/background2.png'
import Background3 from '@/assets/background3.png'
import Background4 from '@/assets/background4.png'
import Sticker from '@/components/Sticker/Sticker'
import Description from '@/components/Description/Description'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>CODEV</title>
        <meta name="description" content="Codev, solutions numériques" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       <Title title="Solutions numériques"/>
       <BannerVideo link ='/contact'/>
       <Description 
        txt = "CONTACT"
        link = '/contact'
        color = "white"
        description = "Chez Codev nous développons des sites web et des applications mobiles qui vous aident à vous démarquer dans le monde numérique. Nous comprenons votre entreprise et apportons des solutions adaptées à vos besoins. Faites confiance à notre expertise pour construire votre identité numérique et atteindre vos objectifs en ligne.  "/>
       <Sticker 
        sticker = "Les sites web" 
        color = "black"
      />
       <Banner link = '/web' background={Background2}/>
       <Description 
        txt = "VOIR"
        link = '/web'
        color = "black"
        description = "Nous développons des sites web selon vos besoins et votre budget. Vous avez la possibilité entre plusieurs types de sites web: site vitrine, e-commerce, portfolio, blog... ou tout autre demande. Voici quelques exemples pour vous faire une idée.  "/>
       <Sticker 
        sticker = "Les applications web" 
        color = "white"
        />
       <Banner link = '/appli' background={Background3}/>
       <Description 
        txt = "VOIR"
        link = '/appli'
        color = "white"
        description = "Nous développons applications web pour répondre à des demandes spécifiques selon vos besoins (générateur de facture, gestion de stock, application de messagerie...).  "/>
       <Sticker 
        sticker = "Les applications mobiles" 
        color = "black" />
       <Banner link = '/mobiles' background={Background4}/>
       <Description
        txt = "VOIR"
        link = '/mobiles'
        color = "black"
        description = "Nous développons des applications mobiles selon vos objectifs et vos besoins (commercialisation de votre application sur les stores, utilisation personnelle ou besoin métier pour votre entreprise)."/>
      </main>
    </>
  )
}