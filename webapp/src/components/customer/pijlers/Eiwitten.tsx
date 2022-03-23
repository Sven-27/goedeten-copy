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
						Niet alle gerechten van GoedEten zijn volledig vega(n). Gerechten waar je het icoon voor 
            ‘Plantaardige eiwitten’ bij ziet staan, zijn dat wel. Let’s talk about eiwitten.
					</p>
					<br></br>
					<br></br>
					<p>
						Zowel dieren als planten kunnen bronnen zijn van eiwit in de voeding. Dierlijke producten zijn vlees, 
            zuivel, ei en vis. Plantaardige producten zijn bijvoorbeeld granen, noten, bonen en peulvruchten. 
            Gemiddeld halen Nederlanders nu 61% van de eiwitten uit dierlijke bronnen en 39% uit plantaardige 
            bronnen (bron: <a className={styles.externalLink} href="https://www.voedingscentrum.nl/nl/service/vraag-en-antwoord/vragen-aan-het-voedingscentrum/verhouding-plantaardig-en-dierlijk-eiwit.aspx">Voedingscentrum</a>). 
            Voor het milieu is het wenselijk als die percentages gaan verschuiven. 
            Maar ook binnen de groepen kunnen duurzamere keuzes gemaakt worden.
					</p>
					<br></br>
					<br></br>
					<p>
						Er zijn namelijk grote verschillen in het effect op het milieu tussen de verschillende dierlijke 
            en plantaardige eiwitbronnen. Zo heeft rundvlees een veel hogere milieudruk dan kippenvlees en zijn 
            cashewnoten milieubelastender dan pinda’s. Per productgroep kan er gekeken worden naar verschillende 
            milieuaspecten zoals landgebruik, watergebruik en CO2-uitstoot.
					</p>
					<br></br>
					<br></br>
					<p>
						Wij zijn ervan overtuigd dat elke stap een bijdrage levert, hoe groot of klein die ook is. 
            Daarnaast houden we erg van een positieve aanpak en willen we de keuze ook echt bij de consument laten. 
            Om die duurzamere eiwittransitie wel met elkaar te kunnen maken, bieden we de klant de informatie op het 
            platform om een bewuste maaltijd te bestellen.
					</p>
					<br></br>
					<br></br>
          <h3><strong>
						Waar moet de maaltijd aan voldoen om deze duurzaamheidspijler te mogen dragen?
          </strong></h3>
          <br></br>
					<br></br>
					<p>
						De maaltijd die deze pijler mag voeren, zal volledig vegan zijn. Er zullen dus geen enkele 
            dierlijke producten gebruikt worden tijdens de bereiding. Wat er wel gebruikt moet worden door 
            de kok om de pijler te mogen voeren, is ten minste 20 gram aan plantaardige eiwitten per maaltijd.
					</p>
					<br></br>
					<br></br>
					<p>
						Wil je weten waarom deze pijler gevoerd wordt door een kok? Bekijk dan de beschrijving bij het specifieke gerecht.
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

export default Eiwitten;
