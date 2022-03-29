import React from "react";
import styles from "styles/customer/Terms.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Logos } from "data/logos";
import HomeButton from "./../../custom_controls/HomeButton";
const Terms = () => {
	const { tomaatTextTaglineDonkerGroen } = Logos;

	return (
		<div className={styles.container}>
			<HomeButton/>
			<div className={styles.gelogo}>
				<Image
					className={styles.gelogo}
					src={tomaatTextTaglineDonkerGroen}
					alt="Goedeten-logo"
					width="250"
					height="80"
				/>
			</div>
			<div className={styles.title}>
				<h1>Algemene Voorwaarden</h1>
			</div>
			<div className={styles.terms}>
				<h2> Algemene Voorwaarden</h2>
				<p>
					Dit zijn de Algemene Voorwaarden die gelden voor de dienstverlening
					van GoedEten, een initiatief van GOEDETEN BV, gevestigd op
					Reinkenstraat 66k te Den Haag, ingeschreven bij de Kamer van
					Koophandel onder nummer 81230001. Bekend bij de belastingdienst onder
					BTW nummer 111111111B01.<br></br>
					<br></br>
					1. Dienstverlening<br></br>
					1.1 GoedEten heeft als doelstelling om maaltijden te bereiden die op
					bestelling bij klanten worden bezorgd op het door hen opgegeven adres.
					<br></br>
					1.2 Je maaltijd kun je tot een dag van te voren via www.GoedEten.nl
					bestellen.<br></br>
					1.3 Een bestelling is definitief als GoedEten deze per e-mail aan je
					heeft bevestigd. Het staat GoedEten te allen tijde vrij om een
					bestelling te weigeren.<br></br>
					1.4 Je kunt je bestelling tot 11.00 uur op de dag van levering zonder
					kosten annuleren op www.GoedEten.nl. Daarna geldt niet het wettelijke
					“herroepingsrecht voor overeenkomsten die op afstand worden gesloten”,
					omdat de producten bederfelijk van aard zijn en niet kunnen worden
					teruggezonden.
					<br></br>
					<br></br>
					2. Account<br></br>
					2.1 Voordat je kunt bestellen, dien je je te registreren met de
					volgende gegevens: je naam, adres, (een eventueel alternatief
					bezorgadres), e-mailadres, telefoonnummer en bankrekeningnummer. Je
					geeft daarmee toestemming dat deze gegevens worden gebruikt voor het
					beheer van je account en in het kader van de bezorging en afrekening
					van je bestellingen.<br></br>
					2.2 Je staat er jegens GoedEten voor in dat de door jou verstrekte
					gegevens juist en volledig zijn. Eventuele wijzigingen in de gegevens
					dien je tijdig aan GoedEten door te geven, omdat anders je bestelling
					of de afrekening niet goed kan gaan.<br></br>
					2.3. Het staat GoedEten te allen tijde vrij om het aanmaken van een
					account naar eigen inzicht te weigeren en/of te beëindigen dan wel de
					toegang tot de account te ontzeggen zonder opgaaf van redenen. Een
					beëindiging van een account wordt schriftelijk medegedeeld door middel
					van het opgegeven e-mail adres.<br></br>
					2.4. Bij het aanmaken van een account krijg je een gebruikersnaam en
					wachtwoord die je kunt gebruiken voor het opgeven van je bestelling en
					het inzien van je eigen bestelpagina.
					<br></br>
					<br></br>
					3. Intellectuele eigendomsrechten<br></br>
					3.1 Alle intellectuele eigendomsrechten ten aanzien van onze website
					en onze dienstverlening berusten uitsluitend bij GoedEten en/of onze
					licentiegevers.<br></br>
					3.2 Het gebruik dat je mag maken van de website en onze
					dienstverlening is beperkt tot hetgeen is bepaald op de website en in
					deze Algemene Voorwaarden.<br></br>
					3.3 GoedEten heeft het recht om je ingezonden bijdragen, zoals
					recensies, te gebruiken voor al haar huidige en toekomstige
					activiteiten. Voor zover op deze bijdragen intellectuele
					eigendomsrechten rusten, draag je deze onvoorwaardelijk en kosteloos
					aan GoedEten over. Voor zover mogelijk doe je daarbij tevens afstand
					van eventuele persoonlijkheidsrechten. Je staat er jegens GoedEten
					voor in dat je het recht hebt om de ingezonden bijdragen ter
					beschikking te stellen en de rechten daarop zoals hierboven beschreven
					over te dragen.<br></br>
					3.4 GoedEten heeft het recht om je bijdrage naar eigen inzicht op de
					website te plaatsen en/of te verwijderen, al dan niet onder vermelding
					van de door de gebruiker opgegeven (gebruikers-)naam.
					<br></br>
					<br></br>
					4. Aansprakelijkheid<br></br>
					4.1 Aan de dienstverlening van GoedEten wordt de uiterste zorg besteed
					en de maaltijden voldoen aan de daaraan in redelijkheid te stellen
					kwaliteitseisen en eisen van voedsel hygiëne.<br></br>
					4.2 GoedEten garandeert echter niet dat de dienstverlening foutloos
					zal verlopen, volledig zal voldoen aan de opgegeven beschrijving en/of
					afbeelding, dan wel het door de gebruiker gewenste resultaat zal
					opleveren. GoedEten geeft geen garantie indien eventuele gebreken
					(mede) zijn veroorzaakt door de gebruiker zelf of een derde en/of
					gebreken die zijn veroorzaakt door externe factoren of verkeerd of
					onkundig gebruik.<br></br>
					4.3 GoedEten behoudt zich het recht voor indien nodig wijzigingen aan
					te brengen aan de af te leveren maaltijd. Van significante wijzigingen
					zal je uiterlijk 1 dag voorafgaand aan de overeengekomen bezorgdatum
					op de hoogte worden gesteld waarna je vanzelfsprekend de gelegenheid
					hebt de bestelling kosteloos te annuleren.<br></br>
					4.4 Eventuele klachten dien je meteen dan wel binnen redelijke termijn
					na aflevering te melden, onder duidelijke en volledige beschrijving
					van de klachten.<br></br>
					4.5 GoedEten is niet aansprakelijk voor enige indirecte of
					gevolgschade die optreedt door of als gevolg van het gebruikmaken van
					onze dienstverlening dan wel uit de onmogelijkheid om gebruik te maken
					van onze dienstverlening. Deze beperking van de aansprakelijkheid
					geldt niet in geval van opzet of grove schuld van GoedEten en/of onze
					bestuurders.<br></br>
					4.6 GoedEten is niet aansprakelijk in geval van een situatie die te
					wijten is aan overmacht.<br></br>
					4.7 GoedEten heeft het recht een reeds geaccepteerde bestelling
					uiterlijk 2 dagen voor de overeengekomen afleverdatum door middel van
					een e-mail bericht of telefonisch te annuleren, zonder daarvoor ten
					opzichte van jou aansprakelijk te worden.<br></br>
					4.8 Je bent zelf verantwoordelijk voor het gebruik dat je maakt van
					onze dienstverlening. (daaronder begrepen het gebruik dat wordt
					gemaakt door degenen met wie je de maaltijden deelt). Eventuele
					intoleranties voor bepaalde voedingsstoffen, allergieën en dergelijke
					behoren tot de risicosfeer van de gebruiker, ook als jij GoedEten
					daarvan tevoren op de hoogte hebt gesteld, en GoedEten kan niet
					verantwoordelijk worden gehouden voor eventuele hierdoor ontstane
					schade en/of gezondheidsproblemen.<br></br>
					4.9 Je vrijwaart GoedEten voor welke claim dan ook van jezelf of van
					derden op enige wijze voortvloeiend uit of verband houdende met het
					gebruik van onze dienstverlening.
					<br></br>
					<br></br>
					5. Prijs en betaling<br></br>
					5.1 De tarieven voor onze dienstverlening worden bekend gemaakt door
					middel van de website.<br></br>
					5.2 De verschuldigde betalingen voor je bestellingen worden eens per
					week achteraf op basis van een niet-storneerbare incasso op het door
					jou opgegeven bankrekeningnummer geincasseerd.<br></br>
					5.3 Betalingen worden niet teruggestort, behalve in geval van
					annulering van een bestelling op de wijze zoals op de website en/of in
					deze Algemene Voorwaarden bepaald.
					<br></br>
					<br></br>
					6. Privacy<br></br>
					6.1 GoedEten verwerkt en bewaart de door jou opgegeven gegevens in het
					kader van onze dienstverlening en houdt zich daarbij aan de wettelijke
					regels over de bescherming van persoonsgegevens.<br></br>
					6.2 Je persoonsgegevens zullen niet aan derden worden verstrekt,
					tenzij dit nodig is voor de uitvoering van onze dienstverlening dan
					wel indien wij daartoe op grond van de wet of een bevel van een
					bevoegde instantie verplicht zijn. We maken gebruik van cookies, die
					ons in staat stellen jouw computer te herkennen. Op die manier wordt
					het gebruikersgemak verhoogd omdat je niet telkens opnieuw je gegevens
					hoeft in te voeren.<br></br>
					6.3 We bewaren en verwerken jouw persoonsgegevens zo goed als
					redelijkerwijs mogelijk is, rekening houdend met de huidige stand van
					de techniek.<br></br>
					6.4 Je hebt te allen tijde het recht om jouw persoonsgegevens die door
					ons bewaard worden in te zien, te corrigeren of te wijzigen. Daartoe
					kun je met ons contact opnemen via info@GoedEten.nl.
					<br></br>
					<br></br>
					7. Algemeen<br></br>
					7.1 Deze Algemene Voorwaarden en de inhoud van onze dienstverlening
					kunnen te allen tijde door ons worden aangepast. Ook hebben we te
					allen tijde het recht om onze dienstverlening stop te zetten.<br></br>
					7.2 Op deze Algemene Voorwaarden en onze dienstverlening is Nederlands
					recht van toepassing. De bevoegde rechter te Amsterdam is bij
					uitsluiting bevoegd om van eventuele geschillen kennis te nemen.
					<br></br>
					7.3 In het geval een of meer bepalingen uit deze Algemene Voorwaarden
					nietig is en/of vernietigd wordt, blijven de overige bepalingen
					onverminderd van kracht. De nietige of vernietigde bepaling zal dan
					automatisch worden vervangen door een bepaling die zoveel mogelijk
					recht doet aan het doel van de nietige of vernietigde bepaling.
					<br></br>
					7.4 In het geval dat een of meer onderdelen of activa van de
					onderneming van GoedEten worden overgedragen, heeft GoedEten het recht
					om alle onderdelen van de website, daaronder begrepen eventuele
					bijdragen van gebruikers, en alle accounts, mede over te dragen.
					<br></br>
					<br></br>
					Den Haag,{" "}
					<i>
						<b>datum</b>
					</i>
				</p>
				<br></br>
			</div>
			<div className={styles.buttonCenter}>
				<Link href="/">
					<button className={styles.generalButton}>POSTCODE CHECK</button>
				</Link>
				<button className={styles.generalButton} onClick={() => history.back()}>
					TERUG
				</button>
			</div>
		</div>
	);
};

export default Terms;
