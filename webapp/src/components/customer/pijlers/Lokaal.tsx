import React from "react";
import styles from "styles/customer/Pijlers.module.scss";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const Lokaal = () => {
	return (
		<div className={styles.container}>
			<div className={styles.photo}>
				<img src="/assets/images/lokaalbanner.png" alt="" />
			</div>
			<div className={styles.bar1}></div>
			<div className={styles.text}>
				<div className={styles.breadcrumb}>
					<Breadcrumbs separator="›" aria-label="breadcrumb">
						<Link href="/goedeten">
							<a>GoedEten</a>
						</Link>
						<Link href="/duurzaamheid">
							<a>duurzaamheid</a>
						</Link>
						<Typography color="textPrimary">lokaal</Typography>
					</Breadcrumbs>
				</div>

				<div className={styles.kop}>
					<h2>lokaal</h2>
					<br></br>
					<p>
						Eén van de duurzaamheidspijlers van GoedEten is lokaal produceren en
						consumeren. Nederland heeft ons zoveel lekkers te bieden! Waarom
						vinden we dit belangrijk? Er zijn eigenlijk twee redenen:
					</p>
					<br></br>
					<br></br>
					<p>
						• Consumeren uit je eigen omgeving betekent automatisch minder
						voedselkilometers. Simpel toch? De appels uit de Betuwe doen er
						minder lang over om op je bord te komen dan de avocado uit Mexico.
						Minder transport, minder CO2 uitstoot;
						<br />• Door de afstand tussen product en consument kort te houden
						is er meer kans op persoonlijker contact tussen deze twee. Wanneer
						je weet waar je eten vandaan komt, ben je bewuster van wat er voor
						nodig is om het te maken. Als je wel eens een avocadopit tot boom
						met avocado’s hebt geprobeerd te kweken, dan weet je dat dat niet zo
						simpel is. Wij geloven dat korte ketens gezonde bedrijven stimuleren
						en duurzame voedselketens.
					</p>
					<br></br>
					<br></br>
					<p>
						Dit is de algemene beschrijving van deze pijler. Wil je weten waarom
						deze pijler gevoerd wordt door een kok? Bekijk dan de beschrijving
						bij het specifieke gerecht.
					</p>
					<br></br>
				</div>
			</div>

			<div className={styles.links}>
				<Link href="/">
					<button className={styles.generalButton}>POSTCODE CHECK</button>
				</Link>
				<Link href="javascript:javascript:history.go(-1)">
					<button className={styles.generalButton}>TERUG</button>
				</Link>
			</div>

			<div className={styles.bar2}>.</div>
		</div>
	);
};

export default Lokaal;
