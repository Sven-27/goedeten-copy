import React from "react";
import styles from "styles/customer/cooperatieDH.module.scss";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import HomeButton from "./../../custom_controls/HomeButton";

const CooperatieDH = () => {
	return (
		<div className={styles.container}>
			<HomeButton/>
			<div className={styles.photo}></div>
			<div className={styles.bar1}></div>
			<div className={styles.text}>

			<div className={styles.breadcrumb}>
				<Breadcrumbs separator="›" aria-label="breadcrumb">
					<Link href="/goedeten">
						<a>GoedEten</a>
					</Link>
					<Typography color="textPrimary">coöperatie</Typography>
				</Breadcrumbs>
			</div>

			  <div className={styles.kop}>
				<h2>cooperatie goedeten <br></br> Den Haag </h2>
				<br></br>
				<p>
				In Den Haag zijn we de eerste coöperatie gestart en zijn daarmee dus de eerste maaltijdaanbieder 
        op het platform van stichting GoedEten. Deze coöperatie bestaat uit een groep koks die samen dingen delen 
        en regelen en zo dus vol aandacht op het koken kunnen storten. Zo maakt de coöperatie gebruik van de keuken van The
        Grey Space in het centrum van Den Haag en kopen de koks samen in bij speciaal gekozen leveranciers. 
				</p>
				<br></br>
				<br></br>
				<p>
				Zij kunnen op deze manier hun aandacht en passie in het koken stoppen, 
        zonder dat ze zelf alle randzaken hoeven te regelen. Samen kan er op grotere schaal ingekocht worden, 
        is er minder afval (voedselverspilling) en kan er in verhouding goedkoper geproduceerd worden.
				</p>
				<br></br>
				<br></br>
				<p>
				Dit maakt de coöperatie geschikt voor mensen die heel goed kunnen koken, 
        maar niet per se veel verstand hebben van (of zin hebben in) alle andere dingen die geregeld moeten worden. 
        De coöperatie verzorgt ook samen het transport naar de klant toe. Dit doen ze met hun eigen fietsteam onder leiding van Jelle.
				</p>
				<br></br>
				<br></br>
				<p>
				Dit maakt de coöperatie geschikt voor mensen die heel goed kunnen koken, 
        maar niet per se veel verstand hebben van (of zin hebben in) alle andere dingen die geregeld moeten worden. 
        De coöperatie verzorgt ook samen het transport naar de klant toe. Dit doen ze met hun eigen fietsteam onder leiding van Jelle.
				</p>
				<br></br>
				<br></br>
        <p>
          Wil jij meer weten over dit samenwerkingsverband? Wil jij als kok werken binnen deze coöperatie? 
          Of juist duurzame maaltijden door Den Haag fietsen? Op de site van <a href="https://www.goedetendenhaag.nl" target="_blank" rel="noreferrer noopener">
          Coöperatie GoedEten</a> vind je meer informatie.
        </p>

					<div className={styles.links}>
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
			</div>
			<div className={styles.bar2}></div>
		</div>
	);
};

export default CooperatieDH;
