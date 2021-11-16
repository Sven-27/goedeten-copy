import React from "react";
import styles from "styles/customer/Pijlers.module.scss";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const image = "/assets/images/eiwittenbanner.PNG";

const Eiwitten = () => {
	return (
		<div className={styles.container}>
			<div className={styles.photo}>
				<img src={image} alt="" />
			</div>
			<div className={styles.bar1}>.</div>
			<div className={styles.text}>
				<div className={styles.breadcrumb}>
					<Breadcrumbs separator="›" aria-label="breadcrumb">
						<Link href="/goedeten">
							<a>GoedEten</a>
						</Link>
						<Link href="/duurzaamheid">
							<a>duurzaamheid</a>
						</Link>
						<Typography color="textPrimary">plantaardige eiwitten</Typography>
					</Breadcrumbs>
				</div>

				<div className={styles.kop}>
					<h2>plantaardige eiwitten</h2>
					<br></br>
					<p>
						Niet alle gerechten zijn volledig vega(n). Toch kunnen ze als
						duurzame maaltijd bestempeld worden volgens de GoedEten
						duurzaamheidspijlers. Hoe zit dat? Let’s talk about eiwitten.
					</p>
					<br></br>
					<br></br>
					<p>
						Zowel dieren als planten kunnen bronnen zijn van eiwit in de
						voeding. Dierlijk = vlees, zuivel, ei en vis en plantaardig =
						granen, noten, bonen en peulvruchten. Gemiddeld halen Nederlanders
						nu 61% van de eiwitten uit dierlijke bronnen en 39% uit plantaardige
						bronnen (bron: @voedingscentrum). Voor het milieu is het handig als
						die percentages gaan verschuiven. Maar ook bínnen de groepen kunnen
						duurzamere keuzes gemaakt worden.
					</p>
					<br></br>
					<br></br>
					<p>
						Er zijn namelijk grote verschillen in het effect op het milieu
						tussen de verschillende dierlijke en de verschillende plantaardige
						eiwitbronnen. Zo heeft rundvlees een veel hogere milieudruk dan kip
						en zijn cashewnoten milieubelastender dan pinda’s. Per productgroep
						kan er gekeken worden naar verschillende milieuaspecten zoals
						landgebruik, watergebruik en CO2-uitstoot.
					</p>
					<br></br>
					<br></br>
					<p>
						Wij zijn ervan overtuigd dat elke stap een bijdrage levert, hoe
						groot of klein die ook is. Daarnaast houden we erg van een positieve
						aanpak en willen we de keuze ook echt bij jou als consument laten.
						Om die duurzamere eiwittransitie wel met elkaar te kunnen maken,
						bieden we je de informatie en een platform om een bewuste maaltijd
						te bestellen. Zo hoef je niet zelf te puzzelen en te onderzoeken
						(maar dat mag natuurlijk wel). In onze menu’s focussen we ons dus
						graag op die granen, noten en peulvruchten als basis. Dus
						bijvoorbeeld niet: ‘niet rundergehakt’, maar wel: ‘wel
						kikkererwten’.
					</p>
					<br></br>
					<br></br>
					<p>
						Dit is de algemene beschrijving van deze pijler. Wil je weten waarom
						deze pijler gevoerd wordt door een kok? Bekijk dan de beschrijving
						bij het specifieke gerecht.
					</p>
					<br></br>
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

export default Eiwitten;
