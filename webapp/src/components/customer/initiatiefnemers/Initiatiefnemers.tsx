import React from "react";
import styles from "styles/customer/Initiatiefnemers.module.scss";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const Initiatiefnemers = () => {
	return (
		<div className={styles.container}>
			<div className={styles.photo}></div>
			<div className={styles.bar}>.</div>
			<div className={styles.text}>
				<div className={styles.breadcrumb}>
					<Breadcrumbs separator="›" aria-label="breadcrumb">
						<Link href="/goedeten">
							<a>GoedEten</a>
						</Link>
						<Link href="/stichting">
							<a>stichting</a>
						</Link>
						<Typography color="textPrimary">initiatiefnemers</Typography>
					</Breadcrumbs>
				</div>

				<div className={styles.kop}>
					<h2>Initiatiefnemers Goedeten</h2>
					<br></br>
					<p>
						Maak kennis met de initiatiefnemers van Stichting GoedEten &
						Coöperatie GoedEten, Jitske Bloemsma en Claudia Vork.
					</p>
				</div>
				<br></br>
				<div className={styles.Claudia}>
					<h2>Claudia</h2>
					<br></br>
					<p>
						Als je opgeleid bent als diëtist en een enorme kookgek bent, is het
						misschien wel een beetje vreemd dat je een maaltijdbezorgplatform
						gaat opbouwen. Toch is het voor mij logisch. Hoewel ik het
						hartstikke toejuich als je thuis lekkere, verse maaltijden kookt,
						snap ik ook dat je af en toe iets wilt bestellen. Omdat je even geen
						zin hebt om het zelf te doen of omdat je nieuwe smaken en gerechten
						wilt ontdekken. Echter is de keuze voor voedzame en duurzame opties
						daarbinnen nog minimaal of erg aan de prijs. En omdat ik altijd
						graag kijk naar 'wat wel' (wat is er wel mogelijk en hoe kan het
						wel?), ben ik ontzettend trots dat we al die punten bij GoedEten
						samen hebben kunnen brengen. Als creatieveling denk ik graag in
						concepten, maar boven alles moet het praktisch, haalbaar, heerlijk
						en eerlijk zijn. En laat ik nu precies op het juiste moment Jitske
						ontmoet hebben en steken we elkaar aan met ons enthousiasme. Al het
						bovengenoemde maken we mogelijk voor jou.
					</p>
					<br></br>
					<aside>
						<p>
							"Wat is er dan wel mogelijk? Hoe kan het wel? Door alleen de
							hobbels en obstructies te zien, komt er niets van de grond."
						</p>
					</aside>
					<br></br>
					<br></br>
					<br></br>
				</div>
				<div className={styles.Jitske}>
					<h2>Jitske</h2>
					<br></br>
					<p>
						Zolang als ik ondernemer ben (sinds 2014) is mijn missie om de markt
						van gemaksvoeding te verduurzamen. Ik vond (en vind nog steeds) dat
						het aanbod in fast food onevenredig verdeeld is. Ongezond eten is er
						er in veelvoud te verkrijgen en ook nog eens voor een zeer lage
						prijs. Ik houd zelf ontzetten van eten en ben een echte bourgondiër.
						Of eigenlijk, ik wás een echte bourgondiër. Halverwege mijn 20ste
						kreeg ik veel onduidelijke klachten, waardoor ik me onder andere ben
						gaan verdiepen in voeding. Ik kwam erachter dat ik prikkelbaar
						darmsyndroom had. Althans, bij gebrek aan een andere diagnose, kreeg
						ik deze stempel. Door mijzelf een ander voedingspatroon aan te
						leren, kwam ik erachter hoeveel voeding kan betekenen voor je
						algehele gezondheid. Sindsdien is het mijn persoonlijke missie
						geworden om gezond (en biologische) voeding toegankelijker te maken.
					</p>
					<br></br>
					<aside className={styles.aside}>
						<p>
							"Door mijzelf een ander voedingspatroon aan te leren, kwam ik
							erachter hoeveel voeding kan betekenen voor je algehele
							gezondheid."
						</p>
					</aside>
					<br></br>
					<br></br>
					<br></br>
				</div>
				<div className={styles.duurzaamheid}>
					<h2>Hoe pakken jullie dat duurzaamheidsconcept aan?</h2>
					<br></br>
					<p>
						Hoe voeg je nu al die waarden samen in een bestelplatform? Zodat je
						de duurzaamheid kunt borgen en tegelijkertijd ontzettend lekkere
						maaltijden kunt bezorgen? we vertellen jou graag meer over de kijk
						op duurzaamheid aan de hand van 5 pijlers.
					</p>
				</div>

				<div className={styles.links}>
					<Link href="/duurzaamheid">
						<button className={styles.generalButton}>LEES MEER</button>
					</Link>
					<br></br>
					<div className={styles.buttonCenter}>
						<Link href="/">
							<button className={styles.generalButton}>POSTCODE CHECK</button>
						</Link>
						<button
							className={styles.generalButton}
							onClick={() => history.back()}
						>
							TERUG
						</button>
					</div>
				</div>
			</div>
			<div className={styles.bar}>.</div>
		</div>
	);
};

export default Initiatiefnemers;
