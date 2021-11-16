import React, { useEffect } from "react";
import { useState } from "react";
import styles from "styles/customer/Deliverydetails.module.scss";
import TextField from "@material-ui/core/TextField";
import { useRouter } from "next/router";
import NoZipcode from "./NoZipcode";
import { useStore } from "contexts/customer/store";
import { useForm } from "react-hook-form";
import { observer } from "mobx-react";
import agent from "adapters/agent";
import { IDeliveryForm } from "models/Purchase";
import { useLocalStorage } from "data/useLocalStorage";
import Image from "next/image";
import { Logos } from "data/logos";

const { tomaatTextTaglineDonkerGroen } = Logos;

const DeliveryDetails = () => {
	const { zipcodeStore, cartStore } = useStore();
	const router = useRouter();
	const [isVisible, setIsVisible] = useState(false);
	const [lastName, setLastName] = useLocalStorage<string>("lastName", "");
	const [firstName, setFirstName] = useLocalStorage<string>("firstName", "");
	const [houseNumber, setHouseNumber] = useLocalStorage<string>("houseNumber", "");
	const [addHouseNumber, setAddHouseNumber] = useLocalStorage<string>("addHouseNumber", "");
	const [street, setStreet] = useLocalStorage<string>("street", "");
	const [city, setCity] = useLocalStorage<string>("city", "");
	const [email, setEmail] = useLocalStorage<string>("email", "");
	const [phone, setPhone] = useLocalStorage<string>("phone", "");
	const [details, setDetails] = useLocalStorage<string>("details", "");
	const [dietDetails, setDietDetails] = useLocalStorage<string>("dietDetails", "");
	const [combiError, setCombiError] = useState<any | string>("");

	const defaultValues = {
		zipcode: zipcodeStore.zipCode,
	};
	const [zipcode, setZipcode] = useLocalStorage<string>("zipcode", defaultValues.zipcode);

	const {
		register,
		handleSubmit,
		reset,
		setValue,
		getValues,	
		formState: { errors },
	} = useForm<IDeliveryForm>({
		mode: "onChange",
	});
	

	const checkZipcode = async (postalCode: string, numberOfHouse: string) => {
		try {
			const res = await agent.zipCodes.checkZip(postalCode, numberOfHouse);
			if (res.status === "1") {
				setStreet(res.streetName);
				setCity(res.city);
			} else {
				setCombiError(
					<span className={styles.error}>
						Combinatie postcode en huisnummer bestaat niet
					</span>
				);
				setTimeout(() => setCombiError(""), 6000);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const onSubmitForm = async (data: IDeliveryForm) => {
		//console.log(data);
		//--------------------------------------
		cartStore.deliveryDetails = data;
		let result = await agent.zipCodes.byZip(data.zipcode);
		cartStore.getLocalStorage();
		try {
			if (result === false) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
				router.push("/payment");
			}
		} catch (error) {
			console.log(error);
		}
		//--------------------------------------
	};

	useEffect(() => {
		setValue("lastName", lastName);
		setValue("firstName", firstName);
		setValue("zipcode", zipcode);
		setValue("houseNumber", +houseNumber);
		setValue("addHouseNumber", addHouseNumber);
		setValue("street", street);
		setValue("city", city);
		setValue("email", email);
		setValue("phone", phone);
		setValue("details", details);
		setValue("dietDetails", dietDetails);
	}, [
		lastName,
		firstName,
		zipcode,
		houseNumber,
		addHouseNumber,
		street,
		city,
		email,
		phone,
		details,
		dietDetails,
	]);

	useEffect(() => {
		setValue("zipcode", zipcodeStore.zipCode);
	}, []);

	return (
		<div className={styles.deliverydetails}>
			<div className={styles.gelogo}>
					<Image
						className={styles.gelogo}
						src={tomaatTextTaglineDonkerGroen}
						alt="Goedeten-logo"
						width="250"
						height="80"
					/>
				</div>
			<div className={styles.container}>
				<h2>Afleveradres</h2>
				<form onSubmit={handleSubmit(onSubmitForm)}>
					<TextField
						{...register("lastName", {
							required: true,
						})}
						label="Achternaam"
						margin="dense"
						variant="outlined"
						onChange={(e) => setLastName(e.target.value)}
						value={lastName}
					/>
					{errors.lastName && (
						<span className={styles.error}>Voer achternaam in</span>
					)}
					<TextField
						{...register("firstName", {
							required: true,
						})}
						label="Voornaam"
						margin="dense"
						variant="outlined"
						onChange={(e) => setFirstName(e.target.value)}
						value={firstName}
					/>
					{errors.firstName && (
						<span className={styles.error}>Voer voornaam in</span>
					)}
					<TextField
						{...register("zipcode", {
							required: true,
							pattern: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i,
							minLength: 6,
							maxLength: 6,
						})}
						margin="dense"
						variant="outlined"
						label="Postcode"
						onChange={(e) => setZipcode(e.target.value)}
						value={zipcode}
					/>
					{/* {combiError} */}
					{errors.zipcode && errors.zipcode.type === "required" && (
						<span className={styles.error}>Voer postcode in</span>
					)}
					{errors.zipcode && errors.zipcode.type === "minLength" && (
						<span className={styles.error}>
							Moet minimaal 6 karakters lang zijn
						</span>
					)}
					{errors.zipcode && errors.zipcode.type === "maxLength" && (
						<span className={styles.error}>
							Mag niet langer dan 6 karakters zijn
						</span>
					)}
					<TextField
						{...register("houseNumber", {
							required: "Voer huisnummer in",
							pattern: {
								value: /^[0-9\b]+$/,
								message: "Voer een geldig huisnummer in",
							},
						})}
						onBlur={(e) => checkZipcode(getValues("zipcode"), e.target.value)}
						label="Huisnummer"
						margin="dense"
						variant="outlined"
						onChange={(e) => setHouseNumber(e.target.value)}
						value={houseNumber}
					/>
					{combiError}
					{errors.houseNumber && (
						<span className={styles.error}>{errors.houseNumber.message}</span>
					)}
					<TextField
						{...register("addHouseNumber", {
							required: false,
						})}
						label="Toevoeging huisnummer"
						margin="dense"
						variant="outlined"
						onChange={(e) => setAddHouseNumber(e.target.value)}
						value={addHouseNumber}
					/>
					<TextField
						{...register("street", {
							required: true,
						})}
						label="Straatnaam"
						margin="dense"
						variant="outlined"
						onChange={(e) => setStreet(e.target.value)}
						value={street}
					/>
					{errors.street && (
						<span className={styles.error}>Voer straatnaam in</span>
					)}
					<TextField
						{...register("city", {
							required: true,
						})}
						label="Plaats"
						margin="dense"
						variant="outlined"
						onChange={(e) => setCity(e.target.value)}
						value={city}
					/>
					{errors.city && (
						<span className={styles.error}>Voer plaatsnaam in</span>
					)}
					<TextField
						{...register("email", {
							required: "Voer email in",
							pattern: {
								value:
									/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: "Voer een geldig email adres in",
							},
						})}
						label="E-mail"
						margin="dense"
						variant="outlined"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					{errors.email && (
						<span className={styles.error}>{errors.email.message}</span>
					)}
					<TextField
						{...register("phone", {
							required: "Voer telefoonnummer in",
							pattern: {
								value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
								message: "Voer een geldig telefoonnummer in",
							},
						})}
						label="Telefoon"
						margin="dense"
						variant="outlined"
						onChange={(e) => setPhone(e.target.value)}
						value={phone}
					/>
					{errors.phone && (
						<span className={styles.error}>{errors.phone.message}</span>
					)}
					<TextField
						{...register("details", {
							required: false,
						})}
						multiline
						label="Opmerking m.b.t. levering:"
						margin="dense"
						variant="outlined"
						onChange={(e) => setDetails(e.target.value)}
						value={details}
					/>
					<TextField
						{...register("dietDetails", {
							required: false,
						})}
						multiline
						label="Dieetwensen:"
						margin="dense"
						variant="outlined"
						onChange={(e) => setDietDetails(e.target.value)}
						value={dietDetails}
					/>
					<div className={styles.buttonCenter}>
						{isVisible && <NoZipcode />}
						<button
							type="submit"
							// disabled={!isVisible}
							className={styles.greenButton}
						>
							<span className={styles.totalText}>BETALEN</span>
							<span>€ {cartStore.cartPrice.toFixed(2)}</span>
						</button>
					</div>
				</form>
			</div>
			<div className={styles.container}>
				<div className={styles.tekstBlock}>
					<p>
						Let op!
						<br />
						Als er een andere postcode wordt ingevoerd, zal opnieuw worden
						gecontroleerd of deze binnen het bezorggebied valt.
					</p>
				</div>
			</div>

			<section className={styles.buttonCenter}>
				<button className={styles.generalButton} onClick={() => router.back()}>
					TERUG
				</button>
			</section>
		</div>
	);
};

export default observer(DeliveryDetails);
