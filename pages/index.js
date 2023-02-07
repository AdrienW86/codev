// Import
import Head from 'next/head';
import Title from '../components/Title';
import HomeBackground from '../components/HomeBackground';

 const Home = () => {
  return (
    <>
      <Head>
        <title>Codev</title>
        <meta name="description" content="Création de sites web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title title='Création de sites web'/>
     <HomeBackground />     
    </>
  )
}
export default Home