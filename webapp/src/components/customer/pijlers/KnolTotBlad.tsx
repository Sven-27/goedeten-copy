import React from "react";
import styles from "styles/customer/Pijlers.module.scss";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const KnolTotBlad = () => {
	return (
		<div className={styles.container}>
			<div className={styles.photo}>
				<img src="/assets/images/knoltotbladbanner.png" alt="" />
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
						<Typography color="textPrimary">knol tot blad</Typography>
					</Breadcrumbs>
				</div>

				<div className={styles.kop}>
					<h2>van knol tot blad</h2>
					<br></br>
					<p>
						Wanneer een kok dit icoon bij zijn gerechten plaatst, betekent dit
						dat deze kok bewust kookt om voedselverspilling tegen te gaan door
						middel van het gebruiken van een product in zijn geheel of juist
						gebruik te maken van restproducten die anders weggegooid worden.
					</p>
					<br></br>
					<br></br>
					<p>
						Je kan hierbij denken aan het gebruiken van bloemkoolbladeren om er
						chips van te maken; het verwerken van bierbostel in burgers; het
						inmaken van (seizoens)groenten en fermentatieprojecten zoals kimchi;
						of het maken van soepen van restgroenten. Maar denk ook aan het
						gebruiken van vlees van dieren die een mooi en fijn leven gehad
						hebben in plaats van dieren die gefokt worden voor consumptie.
					</p>
					<br></br>
					<br></br>
					<p>
						Er zijn vele manieren om deze pijler in te vullen. Het komt er in de
						basis op neer dat alles gebruikt wordt wat er is en zo min mogelijk
						voedselafval gecreëerd wordt. Verder blijft de voedselverspilling op
						voorhand al erg binnen de perken, omdat er natuurlijk op
						voorbestelling gekookt wordt. Om 11:00 uur gaat de kok aan de slag
						met de hoeveelheid maaltijden die voor die dag zijn besteld en
						blijft zo niet zitten met houdbare ingrediënten of bereid eten dat
						uiteindelijk weggegooid moet worden.
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

export default KnolTotBlad;
