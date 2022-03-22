import React from "react";
import styles from "styles/customer/Pijlers.module.scss";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const GezondeAarde = () => {
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
						<Typography color="textPrimary">Gezonde Aarde</Typography>
					</Breadcrumbs>
				</div>

				<div className={styles.kop}>
					<h2>Gezonde Aarde</h2>
					<br></br>
					<p>
						Wij geloven dat, als de aarde gezond is waarin wij ons eten (of het eten voor ons eten) laten groeien, 
            dit ook gezond is voor onszelf. Als we het hebben over de duurzaamheidspijler ‘Gezonde aarde’ bedoelen 
            we daarom ook letterlijk de aarde rondom die ene wortel of aardappel en het gras dat de koeien eten. 
            Dit zorgt niet alleen voor een goed voedselproduct voor de mens, maar het zorgt ook voor een goede omgeving 
            voor alle organismen die in en op die aarde leven.
					</p>
					<br></br>
					<br></br>
					<p>
						Wanneer een maaltijd deze duurzaamheidspijler voert, betekent dit dat er producten gebruikt 
            worden die gemaakt zijn met aandacht voor de aarde. Een aarde waarvoor geen chemische synthetische 
            bestrijdingsmiddelen gebruikt worden. En waar geen antibiotica gebruikt wordt bij de productie van dierlijke 
            producten voor de mens.
					</p>
					<br></br>
					<br></br>
					<p>
						Oftewel een omgeving waarin de bodem vol zit met wormen en insecten voor de vogels. 
            Waar de boer bijen houdt voor het bestuiven van onze gewassen. Er bloemen en kruiden 
            groeien langs de akkers voor meer biodiversiteit. En waar dieren in dienst staan van de akkerbouw 
            en de bodemontwikkeling ondersteunen. Een idealistisch plaatje? Jazeker! Een plaatje vol ideale kenmerken 
            voor mens, dier en planeet.
					</p>
					<br></br>
					<br></br>
          <h2>Waar moet de maaltijd aan voldoen om deze duurzaamheidspijlers te mogen dragen?</h2>
          <br></br>
					<br></br>
          <p>
						Als de kok deze pijler wil voeren bij een maaltijd, leggen we ons vertrouwen in biologisch of biologisch 
            dynamisch gecertificeerde producenten en leveranciers.
					</p>
					<br></br>
					<br></br>
          <p>Het is simpel:</p>
          <br></br>
          <ul className={styles.list}>
            <li>
              Alle plantaardige ingrediënten die gebruikt worden in het gerecht zijn minimaal biologisch 
              gecertificeerd (eventueel met een Demeter keurmerk);</li>
            <li>
              Alle dierlijke ingrediënten die gebruikt worden in het gerecht zijn biologisch dynamisch gecertificeerd (Demeter keurmerk).
            </li>
          </ul>
          <br></br>
					<br></br>
          <p>Wil je weten waarom deze pijler gevoerd wordt door een kok? Bekijk dan de beschrijving bij het specifieke gerecht.</p>
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

export default GezondeAarde;
