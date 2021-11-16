import React from "react";
import styles from "styles/customer/Pijlers.module.scss";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const Seizoen = () => {
	return (
		<div className={styles.container}>
			<div className={styles.photo}>
				<img src="/assets/images/seizoensbanner.png" alt="" />
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
						<Typography color="textPrimary">seizoensgebonden</Typography>
					</Breadcrumbs>
				</div>

				<div className={styles.kop}>
					<h2>seizoensgebonden</h2>
					<br></br>
					<p>
						Eten wat het seizoen je biedt op het moment dat het geboden wordt,
						is minder belastend voor het milieu. Eén van de beste voorbeelden
						zijn aardbeien. Ja, een toetje met verse aardbeien in het kerstmenu
						is natuurlijk heerlijk. Deze aardbeien worden echter geproduceerd
						voor de vraag van de consument, niet omdat het op dat moment het
						beste moment is om een aardbei te laten groeien. De oogst is dan
						klein en vaak zijn de aardbeien minder vol van smaak. Supermarkten
						gaan daarom op zoek naar een aardbeienproducent ver weg waar het
						klimaat wel goed is om een aardbei te laten groeien.
					</p>
					<br></br>
					<br></br>
					<p>
						Hoe meer kilometers jouw product moet afleggen, hoe meer dit het
						milieu belast. Wij gebruiken liever de producten wanneer ze in het
						seizoen zijn. Wanneer ze echt lekker hebben kunnen groeien, zoals
						het de bedoeling is om ze te laten groeien. Bang dat je weken achter
						elkaar rode kool met appel op je bord krijgt in de winter? Dan ken
						je de creativiteit van de koks misschien nog niet.
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

export default Seizoen;
