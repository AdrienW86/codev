// Librairies
import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from '../styles/Form.module.css'

const Form = () => {
	// Variables
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	// States
	const [isLoading, setIsLoading] = useState(false);
	const [isSended, setIsSended] = useState(false);

	// Méthode
	const onSubmitHandler = async (data) => {
		if (!isLoading) {
			setIsLoading(true);
      console.table(data)
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			setIsLoading(false);

			if (!response.ok) {
				console.log("error");
			} else {
				console.log("ok");
				reset();
				setIsSended(true);
			}
		}
	};

	return (
		<>
			<div style={{ textAlign: "center" }}>
				{/* Formulaire */}
				<form
					className={styles.form}					
					onSubmit={handleSubmit(onSubmitHandler)}
				>
					{isSended && (
						<p>
							Votre message a bien été envoyé avec
							succès nous vous répondrons rapidement.
						</p>
					)}
					<div
						style={{
							backgroundColor: "#f5f5f5",
							padding: "30px",
							borderRadius: "5px",
							textAlign: "left",
						}}
					>
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(2, 1fr)",
								gap: "15px",
							}}
						>
							<div style={{ margin: 0 }}>
								<label
									htmlFor="prenom"
									className={styles.label}
								>
									Prénom
								</label>
								<input
									className={styles.input}
									placeholder="Prénom"
									id="prenom"
									{...register("prenom", {
										required: true,
									})}
								/>
								{errors.prenom && (
									<small style={{color: "red"}}>
										Vous devez renseigner votre
										prénom.
									</small>
								)}
							</div>
							<div>
								<label
									htmlFor="nom"
									className={styles.label}
								>
									Nom
								</label>
								<input
									className={styles.input}
									placeholder="Nom"
									id="nom"
									{...register("nom", {
										required: true,
									})}
								/>
								{errors.nom && (
									<small style={{color: "red"}}>
										Vous devez renseigner votre
										nom.
									</small>
								)}
							</div>
						</div>
						<div style={{ marginTop: "15px" }}>
							<label htmlFor="phone" className={styles.label}>
								Téléphone
							</label>
							<input
								className={styles.input}
								placeholder="Votre téléphone"
								id="phone"
								{...register("phone", {
									required: true,
								})}
							/>
							{errors.email && (
								<small style={{color: "red"}}>
									Vous devez renseigner votre
									numéro de téléphone.
								</small>
							)}
						</div>
						<div style={{ marginTop: "15px" }}>
							<label htmlFor="email" className={styles.label}>
								Adresse email
							</label>
							<input
								className={styles.input}
								placeholder="Adresse email"
								id="email"
								{...register("email", {
									required: true,
								})}
							/>
							{errors.email && (
								<small style={{color: "red"}}>
									Vous devez renseigner votre
									adresse email.
								</small>
							)}
						</div>
					</div>

					<div
						style={{
							backgroundColor: "#f5f5f5",
							padding: "30px",
							borderRadius: "5px",
							textAlign: "left",
							marginTop: "15px",
						}}
					>
						<div>
							<label
								htmlFor="contenu"
								className={styles.label}
							>
								Contenu du message
							</label>
							<textarea
								className={styles.input}
								rows="9"
								placeholder="Bonjour..."
								{...register("contenu", {
									required: true,
								})}
							></textarea>
							{errors.contenu && (
								<small style={{color: "red"}}>
									Vous devez renseigner le contenu
									de votre message.
								</small>
							)}
						</div>
					</div>

					<div
						style={{
							display: "flex",
							justifyContent: "center",
							marginTop: "15px",
						}}
					>
						{!isLoading && (
							<button className={styles.form_btn }>
								Envoyer
							</button>
						)}
					</div>
				</form>
			</div>
		</>
	);
}

export default Form