import React from "react";
import styles from "styles/customer/Pijlers.module.scss";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const Duurzaamheid = () => {
	return (
		<div className={styles.container}>
			<div className={styles.photo}>
				<img src="/assets/images/duurzaambanner.png" alt="" />
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
						<Typography color="textPrimary">duurzaam voor je lijf</Typography>
					</Breadcrumbs>
				</div>

				<div className={styles.kop}>
					<h2>duurzaam voor je lijf</h2>
					<br></br>
					<p>
						Ook over deze pijler hoefden we niet lang na te denken. En we noemen
						het bewust ‘duurzaam voor je lijf’ en niet ‘gezond’ of ‘healthy’ en
						gebruiken geen ander powerfoodwoord. Wat we belangrijk vinden, is
						dat de maaltijden voedzaam zijn; een bijdrage kunnen leveren aan
						jouw gezondheid en dat je voldaan bent na het eten ervan. Dat niet
						té vol zit, maar ook niet dat je na een half uurtje weer trek hebt.
					</p>
					<br></br>
					<br></br>
					<p>
						Daarbij houden we vooral de Richtlijnen Goede Voeding aan. In het
						kort houdt het in dat de maaltijden voldoende groenten bevatten,
						maar ook peulvruchten, noten, gezonde vetten, vezelrijke granen,
						etc. Zonder in te leveren op de smaak, zorgen we ervoor dat we de
						ingrediënten gebruiken die dus net wat duurzamer zijn voor je lijf.
						Denk aan zilvervliesrijst in plaats van witte rijst en olijfolie in
						plaats van kokosolie en verse kruiden en smaakmakers in plaats van
						een zakje of pakje.
					</p>
					<br></br>
					<br></br>
					<p>
						De mogelijkheden hiermee zijn oneindig en wees dus vooral niet bang
						voor alle creativiteit van de koks; er zal veel heerlijks gecreëerd
						gaan worden. Per gerecht zal de kok ook aangeven welke switches er
						zijn gemaakt of voor welke voedingsmiddelen er is gekozen om het zo
						onder deze pijler te laten vallen. Juist omdat je met kleine stapjes
						een groots effect kunt hebben, kan een gezonde en voedzame maaltijd
						zelfs nog lekker zijn ook.
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

export default Duurzaamheid;
