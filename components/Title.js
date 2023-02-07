import styles from '../styles/Title.module.css';

 function Title(props) {
  return (
    <h1 className={styles.h1__title}> {props.title}</h1>
  )
}

export default Title