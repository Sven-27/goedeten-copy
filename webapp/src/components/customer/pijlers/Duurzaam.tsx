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
						Ook over deze pijler hoefden we niet lang na te denken. We noemen het bewust ‘duurzaam voor je lijf’ en niet 
            ‘gezond’ of ‘healthy’ of een ander powerfood-woord. Wat we belangrijk vinden, is dat de maaltijden voedzaam zijn; 
            een bijdrage kunnen leveren aan jouw gezondheid en dat je voldaan bent na het eten ervan. 
            Dat je niet té vol zit, maar ook niet dat je na een half uur weer trek hebt.
					</p>
					<br></br>
					<br></br>
					<p>
						Daarbij houden we vooral de <a className={styles.externalLink} href="https://www.gezondheidsraad.nl/documenten/adviezen/2015/11/04/richtlijnen-goede-voeding-2015">Richtlijnen Goede Voeding aan</a>. 
            In het kort houdt het in dat de maaltijden voldoende groenten bevatten, maar ook peulvruchten, noten, gezonde vetten, 
            vezelrijke granen, etc. Zonder in te leveren op de smaak, zorgen we ervoor dat we de ingrediënten gebruiken die net 
            wat duurzamer zijn voor je lijf. Denk aan zilvervliesrijst in plaats van witte rijst, olijfolie in plaats van 
            kokosolie en verse kruiden en smaakmakers (en geen zakjes of pakjes).
					</p>
					<br></br>
					<br></br>
					<p>
						De mogelijkheden hiermee zijn oneindig en reken maar op de creativiteit van de koks; er kan veel heerlijks 
            gecreëerd worden. Per gerecht wordt aangeven voor welke voedingsmiddelen er zijn gekozen om deze 
            duurzaamheidspijler te mogen voeren. Juist omdat je met kleine stapjes een groots effect kunt realiseren, 
            kan een gezonde en voedzame maaltijd zelfs nog lekkerder zijn.
					</p>
					<br></br>
					<br></br>
          <h3><strong>
						Waar moet de maaltijd aan voldoen om deze duurzaamheidspijler te mogen dragen?
          </strong></h3>
          <br></br>
					<br></br>
					<p>
						De maaltijd bestaat uit verschillende ingrediënten. Per productgroep wordt er een duurzame keuze gemaakt voor het lijf. 
            Soms is er een minimum of maximum en soms uitsluiting van bepaalde producten. Zo past het gerecht dat de kok maakt 
            binnen de <a className={styles.externalLink} href="https://www.gezondheidsraad.nl/documenten/adviezen/2015/11/04/richtlijnen-goede-voeding-2015">Richtlijnen Goede Voeding</a>.
					</p>
					<br></br>
					<br></br>
          <strong>De regels zijn als volgt:</strong>
          <ul className={styles.list}>
            <li>De maaltijd bevat minimaal 200 gram groenten (bereid gewicht,&nbsp; 
              <a className={styles.externalLink} href="https://www.voedingscentrum.nl/nl/gezonde-recepten/kookhulp/hoelang-kook-ik-.aspx">meer info</a>).</li>
            <li>De granen die gebruikt worden in het gerecht zijn altijd volkoren (denk aan zilvervliesrijst, volkoren pasta/meel/couscous, quinoa, etc.).</li>
            <li>De maaltijd bevat geen boter, kokosolie, harde margarine.</li>
            <li>De maaltijd bevat plantaardige olie, zoals zonnebloemolie of olijfolie.</li>
            <li>Het gerecht bevat geen (bewerkt) rood vlees.</li>
            <li>Een portie bevat maximaal 100 gram vlees, vis, ei, vegetarische keuze.</li>
            <li>Een portie bevat maximaal 25 gram noten.</li>
            <li>Een portie bevat maximaal 60 gram peulvruchten.</li>
            <li>Er zit maximaal 1 eetlepel suiker (kristal-, basterd-, kokosbloesem-, oer-, rietsuiker, ed.), stroop, siroop of honing in het gerecht.</li>
            <li>De maaltijd bevat maximaal 2,0 gram zout.</li>
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

export default Duurzaamheid;
