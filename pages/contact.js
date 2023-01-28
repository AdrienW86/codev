import React from 'react'
import Head from "next/head";

import Form from '../components/Form'

export default function Contact() {
  return (
	<>
		<Head>
			<title>Contact</title>
		</Head>
		
		<h1 style={{textAlign: "center"}}>Contact</h1>
		<Form />
	</>
  )
}
