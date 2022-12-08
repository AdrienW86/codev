import React, {useState} from 'react';
import { Formik , Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from '../styles/Form.module.css';


const Formulaire = () => {

  const [toggle, setToggle] = useState(false)

  const initialValues = {
    firstname: "", 
    lastname: "", 
    email: "", 
    phone:"",
    formule:""  
}

const validationSchema = Yup.object().shape({
  firstname: Yup.string()
      .required("Votre prénom est requis"),
  lastname: Yup.string()
      .required("Votre nom est requis"),
  email: Yup.string()
      .required("Adresse email requise"),
  phone: Yup.string()
      .required("Numéro de téléphone requis"),
  formule: Yup.string()
      .required("Vous devez indiquer une formule")
});


  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit= {(values, {resetForm}) => {


          let re = /-/gi;
          values.firstname = values.firstname.charAt(0).toUpperCase() + values.firstname.slice(1)
          values.lastname = values.lastname.charAt(0).toUpperCase() + values.lastname.slice(1)
          values.email = values.email.charAt(0).toUpperCase() + values.street.slice(1)
          values.phone = values.zip.toString()
          values.formule = values.zip.toString()


            console.table(values)
            resetForm()
            setToggle(true)
        }}
    >
       <Form className={styles.form}>
          <label htmlFor="firstname"> Nom</label>
            <Field
                className={styles.input}
                aria-label="input for first name"
                placeholder="Entrez votre nom"
                type="text"
                name="firstname"
            />
            <ErrorMessage 
                name="firstname"
                style={{color: "#AB1E00"}}
                component="span"
            />
          <label htmlFor="lastname"> Prénom</label>
            <Field
                className={styles.input}
                aria-label="input for last name"
                placeholder="Entrez votre prénom"
                type="text"
                name= "lastname"
            />
            <ErrorMessage 
                className='error'
                name="lastname"
                style={{color: "#AB1E00"}}
                component="span"
            />  
             <label htmlFor="lastname"> Adresse mail</label>
            <Field
                className={styles.input}
                aria-label="input for last name"
                placeholder="Entrez votre adresse mail"
                type="text"
                name= "email"
            />
            <ErrorMessage 
                className='error'
                name="email"
                style={{color: "#AB1E00"}}
                component="span"
            />  
             <label htmlFor="lastname"> Téléphone</label>
            <Field
                className={styles.input}
                aria-label="input for last name"
                placeholder="Entrez votre numéro de téléphone"
                type="text"
                name= "phone"
            />
            <ErrorMessage 
                className='error'
                name="phone"
                style={{color: "#AB1E00"}}
                component="span"
            />  
                 <label htmlFor="department"> Formule </label>
            <Field  
                className={styles.input}
                as="select"         
                name="department"
                type="text"
                placeholder="Enter your street"         
            >                
                <option> Starter </option>
                <option> Medium</option>
                <option> Premium</option>
            </Field>  
            <ErrorMessage 
                className='error'
                name="department"
                style={{color: "#AB1E00"}}
                component="span"
            />    
          <button 
            className={styles.btn_submit} 
            type="submit" 
          >
            Envoyer
          </button>   
       </Form>
    </Formik>
  )
}

export default Formulaire
