// Import
import Head from 'next/head';
import Banner from '../components/Banner';
import Intro from '../components/Intro';
import Description from '../components/Description';
import Services from '../components/Services';

// Styles
import styles from '../styles/Home.module.css';

 const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Codev</title>
        <meta name="description" content="Création de sites web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Intro />
      <main>
        <Description /> 
        <Services />                           
      </main>
    </div>
  )
}
export default Home