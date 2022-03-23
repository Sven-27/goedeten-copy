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
						<Typography color="textPrimary">lokaal en seizoensgebonden</Typography>
					</Breadcrumbs>
				</div>

				<div className={styles.kop}>
					<h2>lokaal en seizoensgebonden</h2>
					<br></br>
					<p>
						Eén van de duurzaamheidspijlers van GoedEten is lokaal produceren en consumeren. 
            Nederland heeft ons zoveel lekkers te bieden! Waarom vinden we dit belangrijk?
					</p>
					<br></br>
					<br></br>
					<strong>Er zijn twee redenen:</strong>
          <ul className={styles.list}>
            <li>
              Consumeren uit je eigen omgeving betekent automatisch minder voedselkilometers. Simpel toch? De appels uit de 
              Betuwe doen er minder lang over om op je bord te komen dan de avocado uit Mexico. 
              Minder transport, minder CO2-uitstoot.
            </li>
            <li>
              Door de afstand tussen product en consument kort te houden, is de kans op persoonlijker contact 
              tussen deze twee groter. Wanneer je weet waar je eten vandaan komt, ben je bewuster van wat er voor nodig 
              is om het te maken. Als je wel eens een avocadopit tot boom met avocado’s hebt geprobeerd te kweken, 
              dan weet je dat dat zo simpel niet is. Wij geloven dat korte ketens gezonde bedrijven en duurzame 
              voedselketens stimuleren.
            </li>
          </ul>
					<br></br>
					<br></br>
					<p>
						Wanneer je lokaal eet, eet je automatisch ook meer uit het seizoen. Eén van de beste voorbeelden zijn aardbeien. 
            Ja, een toetje met verse aardbeien in het kerstmenu is natuurlijk heerlijk. 
            Echter worden deze aardbeien geproduceerd voor de vraag van de consument en niet omdat het op dat moment 
            het beste moment is om een aardbei te laten groeien. De oogst is dan klein en vaak zijn de aardbeien minder vol van smaak. Supermarkten gaan
            daarom op zoek naar een aardbeienproducent verder weg - waar het klimaat op dat moment geschikter is.
					</p>
					<br></br>
					<br></br>
					<p>
						Hoe meer kilometers jouw product moet afleggen, hoe meer dit het milieu belast. 
            Wij gebruiken liever de producten wanneer ze lokaal in het seizoen zijn. Wanneer ze echt lekker hebben kunnen groeien, 
            zoals het de bedoeling is.
					</p>
					<br></br>
					<br></br>
					<h3><strong>
						Waar moet de maaltijd aan voldoen om deze duurzaamheidspijler te mogen dragen?
          </strong></h3>
					<br></br>
					<br></br>
          <p>
						De maaltijd bestaat uit verschillende componenten, namelijk: A.G.F (aardappel, groente, fruit), 
            zuivel (melk, kaas), eieren, vlees/vis en droogwaren (zoals o.a. meel, rijst, smaakmakers, etc.). 
            Al deze componenten hebben een verschillende houdbaarheid. Lokaal produceren en consumeren heeft alles te 
            maken met de afstand die jouw eten heeft moeten afleggen en hoe dat transport geregeld is.
					</p>
					<br></br>
					<br></br>
          <p>
						In het kort kun je zeggen: "hoe korter de houdbaarheidsdatum, hoe lokaler het gegeten zou moeten worden" 
            en "hoe langer houdbaar, hoe groter de hoeveelheid die je inkoopt om efficiënt/duurzaam te transporteren".
					</p>
					<br></br>
					<br></br>
          <p>
						Ook kun je bij droogwaren nadenken over de manier van transport die gebruikt is. 
            Denk aan vliegtransport ten opzichte van windtransport (per zeilschip). Klinkt logisch, 
            maar waar liggen dan de grenzen? Wat is heel duurzaam, wat een beetje duurzaam en wat echt niet? 
            Kortom: wanneer mag deze pijler bij het gerecht gezet worden?
					</p>
					<br></br>
					<br></br>
          <strong>De regels zijn als volgt:</strong>
          <ul className={styles.list}>
            <li>
              Alle verse ingrediënten (aardappelen, groenten, fruit, zuivel, eieren, vlees/vis) komen uit Nederland, 
              waarvan minimaal 50% een maximale afstand naar de keuken heeft afgelegd van 50 kilometer.
            </li>
            <li>
              De droogwaren komen altijd uit Europa.
            </li>
          </ul>
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

export default Lokaal;
