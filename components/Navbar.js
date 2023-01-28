import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Menu from './Menu';

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}> 
            Code <span className={styles.v_span}>v</span>
        </div>
        <ul className={styles.navigation}>
            <li className={styles.nav_link}>
                <Link href='/'> 
                    <p className={styles.p}> Accueil </p>  
                </Link> 
            </li>
            <li className={styles.nav_link}>
                <Link href='/templates'> 
                    <p className={styles.p}> Modèles </p> 
                </Link> 
            </li>
            <li className={styles.nav_link}>
                <Link href='/tarifs'> 
                    <p className={styles.p}> Tarifs </p> 
                </Link> 
            </li>
            <li className={styles.nav_link}>
                <Link href='/contact'> 
                <   p className={styles.p}> Contact </p> 
                </Link> 
            </li>
        </ul>       
        <Menu className={styles.menu}/>    
    </nav>
  )
}
export default Navbar