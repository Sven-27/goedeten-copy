import React from "react";
import styles from "styles/customer/cooperatieDH.module.scss";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const CooperatieDH = () => {
	return (
		<div className={styles.container}>
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
				Coöperatie GoedEten in Den Haag is de eerste maaltijdaanbieder op het platform van GoedEten. 
				Deze coöperatie bestaat uit een groep koks die samen dingen delen en regelen. 
				Zo maakt de coöperatie gebruik van de keuken van de Kookfabriek in het pand van The New Farm en kopen ze samen in bij preferred suppliers. 
				De koks kunnen op deze manier hun aandacht en passie in het koken stoppen, 
				zonder dat ze alle randzaken zelf hoeven te regelen. Dit maakt de coöperatie geschikt voor mensen die heel goed kunnen koken,
				maar niet perse veel verstand hebben van (of zin hebben in) alle andere dingen die geregeld moeten worden. 
				</p>
				<br></br>
				<br></br>
				<p>
				De coöperatie regelt ook samen het transport naar de klant toe. Dit doen ze in samenwerking met de Haagse Zwam. 
				De Haagse Zwam kweekt oesterzwammen op koffiedik waardoor een prachtig circulair voedselproduct ontstaat. 
				Je zou denken: “zwammen en transport…?” Maar dat gaat in dit geval prima samen. 
				De Haagse Zwam is tevens een sociale onderneming die mensen met een afstand tot de arbeidsmarkt een kans biedt. 
				In tijden van corona is hierdoor naast het kweken van de oesterzwammen ook een transportteam ontstaan en brengt ook de maaltijden van coöperatie GoedEten naar de klanten in Den Haag.
				</p>
				<br></br>
				<br></br>
				<p>
				Coöperatie GoedEten in Den Haag koopt haar producten in bij de volgende leveranciers:
				</p>
				<br></br>
				<br></br>
				<div className={styles.list}>
					<ul >
						<li>Lekkernassuh voor lokale seizoensgebonden groenten en fruit;</li>
						<li>Hoeve Biesland voor biologisch dynamisch vlees uit de regio;</li>
						<li>Odin voor alle overige biologische producten;</li>
						<li>Udea voor alle overige biologische producten;</li>
					</ul>
				</div>
				<br></br>
				<p>Dit zijn de koks van coöperatie GoedEten.</p>

					<div className={styles.links}>
						<Link href="/cooks_static">
							<button className={styles.generalButton}>Koks GoedEten</button>
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
			</div>
			<div className={styles.bar2}></div>
		</div>
	);
};

export default CooperatieDH;
