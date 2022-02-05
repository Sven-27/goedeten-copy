import React, { useState } from "react";
import Link from "next/link";
import styles from "styles/customer/Zipcode.module.scss";
import { Logos } from "data/logos";
import { useForm } from "react-hook-form";
import CloseIcon from "@material-ui/icons/Close";
import moment from "moment-timezone";
import Image from "next/image";
import { observer } from "mobx-react";
import { useStore } from "contexts/customer/store";
import agent from "adapters/agent";
import { useStateSafe } from "data/useStateSafe"; //custom hook
import LinearDeterminate from "./Loadbar";

type IZipcodeForm = {
	zipcode: string;
};
type IEmailForm = {
	email: string;
	agree: boolean;
};

const Zipcode = () => {
	const { zipcodeStore } = useStore();
	const [input, setInput] = useState<string>("");
	const [message, setMessage] = useStateSafe<any | string>("");
	const [succeed, setSucceed] = useState<any | string>("");
	const [buttonState, setButtonState] = useStateSafe<boolean>(false);

	const { tomaatText } = Logos;

	// console.log(API)
	//https://goed-eten-webapi.azurewebsites.net/api/ZipCode/zip/2511BZ
	//const res: AxiosResponse = await axios.get(`${API}api/ZipCode/zip/${zipcode}`)
	const checkZipcode = async (zipcode: string) => {
		try {
			const res = await agent.zipCodes.byZip(zipcode);
			if (res === false) {
				setMessage(
					<span className={styles.error}>
						Deze postcode valt buiten ons bezorggebied
					</span>
				);
				setButtonState(true);
				setTimeout(() => setMessage(""), 3000);
			} else {
				setMessage(
					<span className={styles.success}>
						Postcode valt binnen het bezorggebied. <br />
						Je wordt doorgeleid naar de bestelpagina.
						<br></br>
						<div className={styles.loadBar}>
							<LinearDeterminate />
						</div>
					</span>
				);
				setTimeout(() => setMessage(""), 3500);

				if (typeof window !== "undefined") {
					zipcodeStore.zipCode = zipcode;
					setTimeout(() => (window.location.href = "/home"), 3000);
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	const registerEmail = async (data: string) => {
		// const res: AxiosResponse = await axios.post<boolean>(`${API}api/customer`, {
		// const abortController = new AbortController()
		// const signal = abortController.signal
		const res = await agent.customers.create({
			id: 0,
			email: data,
			zipcode: input,
			isDeliveryRange: false,
			date: moment().tz("Europe/Amsterdam").format("YYYY-MM-DD").toString(),
		});
		return res;
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IZipcodeForm>({
		mode: "onChange",
	});

	const {
		register: register2,
		handleSubmit: handleSubmit2,
		formState: { errors: errors2, isValid },
	} = useForm<IEmailForm>({
		mode: "onChange",
	});

	const onSubmitZipcode = (data: IZipcodeForm) => {
		checkZipcode(data.zipcode.toUpperCase());
		setInput(data.zipcode.toUpperCase());
	};

	const onSubmitEmail = (data: IEmailForm) => {
		registerEmail(data.email)
			.then((result) => btnHandler(result))
			.catch(() => {
				setSucceed(
					<span className={`${styles.error} ${styles.registered}`}>
						Er is iets fout gegaan. Ongeldig e-mail adres?
					</span>
				);
				setTimeout(() => setSucceed(""), 4000);
			});
	};

	const btnHandler = (result: boolean) => {
		//console.log('result', result)
		setButtonState(false);
		if (result) {
			setSucceed(
				<span className={`${styles.success} ${styles.registered}`}>
					Je email is geregistreerd.
				</span>
			);
		} else {
			setSucceed(
				<span className={`${styles.error} ${styles.registered}`}>
					Deze combinatie van e-mail en postcode is al geregistreerd.
				</span>
			);
		}
		setTimeout(() => setSucceed(""), 4000);
	};

	return (
		<div className={styles.zipcode}>
			<div className={styles.container}>
				<div className={styles.title}>
					<section className={styles.geLogo}>
						<Image
							src={tomaatText}
							alt="Goedeten-logo"
							width="250"
							height="80"
						/>
					</section>
				</div>

				{/* Section 1: zipcode validation */}
				<section className={styles.check}>
					<form
						autoComplete="off"
						className={styles.zipcodeForm}
						onSubmit={handleSubmit(onSubmitZipcode)}
					>
						<div className={styles.label} >
							<h2 className={styles.title}>
								Wil je weten of wij ook bij jou bezorgen?
							</h2>
							<p className={styles.subtitle}>
								Vul dan je postcode in om te zien of het binnen ons bezorggebied
								valt of wil je weten 
                <Link href="/hoehetwerkt"><a className={styles.greenButton}>Hoe het werkt</a></Link>
							</p>
          
							<p>Voor 11.00 besteld = tussen 17.00 - 19.00 in huis.</p>
							<p>
								Klik{" "}
								<Link href="/goedeten">
									<span>hier</span>
								</Link>{" "}
								voor meer informatie over GoedEten!
							</p>
						</div>
						<div className={styles.inputContainer}>
							<input
								{...register("zipcode", {
									required: "This is required",
									pattern: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i,
									minLength: 6,
									maxLength: 6,
								})}
								type="search"
								className={styles.input}
								placeholder="1111AA"
							/>
							<button className={styles.buttonSearch} type="submit">
								ZOEK
							</button>
						</div>

						{message}
						{errors.zipcode && errors.zipcode.type === "required" && (
							<span className={styles.error}>Dit veld is vereist</span>
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
						{errors.zipcode && errors.zipcode.type === "pattern" && (
							<span className={styles.error}>Voer een geldige postcode in</span>
						)}
					</form>
				</section>
				{/* Section 2: register email */}
				<section className={styles.email}>
					{buttonState && (
						<form
							autoComplete="off"
							onSubmit={handleSubmit2(onSubmitEmail)}
							className={styles.emailForm}
						>
							<div className={styles.email__label}>
								<label htmlFor="email">
									<div className={styles.closeIcon}>
										<CloseIcon
											className={styles.close}
											onClick={() => setButtonState(false)}
										/>
									</div>
									<h2 className={styles.subtitle}>
										Vul je emailadres in en blijf op de hoogte van GoedEten en
										andere acties!
									</h2>
								</label>
							</div>
							<input
								type="email"
								{...register2("email", {
									required: "Voer email in",
									pattern: {
										value:
											/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
										message: "Voer een geldig email adres in",
									},
								})}
								placeholder="naam@voorbeeld.com"
								className={styles.inputEmail}
							/>
							{errors2.email && (
								<p className={styles.error}>{errors2.email.message}</p>
							)}
							{/* </div> */}
							<div className={styles.checkbox}>
								<label htmlFor="agree">
									<input
										id="agree"
										className={styles.checkboxInput}
										type="checkbox"
										{...register2("agree", {
											required: "This is required",
										})}
									/>
								</label>
								<p>
									Ik ga akkoord met de
									<Link href="/privacy">
										<a className={styles.zipcodeCheck__agreePrivacy}>
											Privacy Verklaring
										</a>
									</Link>
								</p>
							</div>
							<button
								className={styles.calendarButton}
								type="submit"
								disabled={!isValid}
							>
								REGISTREER
							</button>
						</form>
					)}
					{succeed}
				</section>
			</div>
		</div>
	);
};

export default observer(Zipcode);
