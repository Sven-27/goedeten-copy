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
						<Typography color="textPrimary">van knol tot blad</Typography>
					</Breadcrumbs>
				</div>

				<div className={styles.kop}>
					<h2>van knol tot blad</h2>
					<br></br>
					<p>
						Wanneer een kok dit icoon bij het gerecht plaatst, betekent dit dat deze kok bewust kookt om voedselverspilling 
            tegen te gaan. Dit doet hij/zij/hen door een product in zijn geheel te gebruiken of juist 
            door te koken met restproducten die anders weggegooid zouden worden.
					</p>
					<br></br>
					<br></br>
					<p>
						Het komt er in de basis op neer dat alles gebruikt wordt wat er is en zo min mogelijk voedselafval gecreëerd wordt. 
            Je kunt hierbij denken aan het gebruiken van bloemkoolbladeren om er chips van te maken; het verwerken van 
            bierbostel in burgers; het inmaken van (seizoens)groenten en fermentatieprojecten zoals kimchi; 
            of het maken van soepen van restgroenten. Maar denk ook aan het uitsluitend gebruiken van vlees van 
            dieren die een mooi en fijn leven gehad hebben in plaats van dieren die gefokt worden voor consumptie. 
            Er zijn vele manieren om deze pijler in te vullen.
					</p>
					<br></br>
					<br></br>
          <h3><strong>
						Waar moet de maaltijd aan voldoen om deze duurzaamheidspijler te mogen dragen?
          </strong></h3>
					<br></br>
					<br></br>
          <strong>Het gerecht moet minimaal voldoen aan één van de volgende drie eisen:</strong>
          <ol className={styles.list}>
            <li>Werken met geredde ingrediënten.</li>
            <li>Gebruik maken van grondstoffen die normaal gesproken niet gebruikt worden voor reguliere consumptie 
              (denk aan: bloemkoolbladeren, bierbostel, etc).</li>
            <li>Het gebruik maken van processen om producten langer houdbaar te maken (denk aan wecken of fermenteren).</li>
          </ol>
					<br></br>
					<br></br>
					<p>
						Bij deze pijler kijken we voornamelijk naar het verhaal van de kok. Dit verhaal wordt door minimaal 
            3 mensen binnen de stichting beoordeeld. Onderstaande voorbeelden geven aan hoe wij onze beoordeling onderbouwen.
					</p>
					<br></br>
					<br></br>
          <strong>Dit zijn voorbeelden die wel goedgekeurd zullen worden:</strong>
          <ul className={styles.list}>
            <li>Ik maak een menu rondom mijn befaamde kimchi's. Kimchi maken vind ik niet alleen erg leuk om te doen; 
              ik verwerk hierin ook nog eens flink wat kool en andere groenten die op deze manier langer goed blijven. 
              In mijn menu gebruik ik minimaal 3 verschillende kimchi's.</li>
            <li>Elke woensdag aan het einde van de dag ga ik naar de Haagse markt om groenten op te halen die niet meer 
              verkocht kunnen worden om hier vervolgens mee mijn maaltijden te maken.</li>
            <li>Ik overleg met de slager/veehouder welke stukken vlees weinig afzet hebben en de kans hebben om weggegooid te worden. 
              Dit kan dan ook per week verschillen.</li>
              <li>k werk samen met een kleine boerderij waar bokjes worden gehouden voor het bemesten van het land. 
                De bokjes die een fijn en volmaakt leven hebben gehad, worden geslacht. Ik gebruik alle onderdelen van 
                het dier in mijn gerechten.</li>
              <li>k verwerk de bierbostel van een lokale brouwerij in mijn vegaburgers.</li>
          </ul>
					<br></br>
					<br></br>
          <strong>BIj deze voorbeelden missen we nog informatie en kunnen we niet goedkeuren:</strong>
          <ul className={styles.list}>
            <li>Ik gebruik ook kimchi in mijn Koreaanse bibimbap.</li>
            <li>Aan het einde van de week kijk ik in de voorraadkast om de groenten op te maken die er nog zijn.</li>
            <li>Ik kook alleen met kippenlever, omdat ik weet dat die nooit meer gegeten worden.</li>
          </ul>
					<br></br>
					<br></br>
					<p>
						Wil je weten waarom deze pijler gevoerd wordt door een kok? Bekijk dan de beschrijving bij het specifieke gerecht.
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
