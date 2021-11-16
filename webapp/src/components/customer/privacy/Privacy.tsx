import React from "react";
import styles from "styles/customer/Privacy.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Logos } from "data/logos";

const Privacy = () => {
	const { tomaatTextTaglineDonkerGroen } = Logos;

	return (
		<div className={styles.container}>
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
				<h1>PRIVACY VERKLARING</h1>
			</div>
			<main className={styles.main}>
				<h2>Privacy Verklaring</h2>
				<p>
					<b>GoedEten</b> gevestigd aan <b>Reinkenstraat 66K te Den Haag</b>, is
					verantwoordelijk voor de verwerking van persoonsgegevens zoals
					weergegeven in deze privacyverklaring.
				</p>
				<h2>Contactgegevens:</h2>
				<p>
					https://www.<b>goedetendenhaag</b>.nl
				</p>
				<p>070-7370717</p>
				<h2>Persoonsgegevens die wij verwerken</h2>
				<p>
					GoedEten verwerkt uw persoonsgegevens doordat u gebruik maakt van onze
					diensten en/of omdat u deze zelf aan ons verstrekt. Hieronder vindt u
					een overzicht van de persoonsgegevens die wij verwerken:
				</p>
				<ul className={styles.list}>
					<li>Voor- en achternaam</li>
					<li>Geslacht</li>
					<li>Geboortedatum</li>
					<li>Geboorteplaats</li>
					<li>Adresgegevens</li>
					<li>Telefoonnummer</li>
					<li>E-mailadres</li>
					<li>IP-adres</li>
					<li>
						Overige persoonsgegevens die u actief verstrekt bijvoorbeeld door
						een profiel op deze website aan te maken, in correspondentie en
						telefonisch
					</li>
					<li>Locatiegegevens</li>
					<li>Gegevens over uw activiteiten op onze website</li>
					<li>
						Gegevens over uw surfgedrag over verschillende websites heen
						(bijvoorbeeld omdat dit bedrijf onderdeel is van een
						advertentienetwerk)
					</li>
					<li>Lijst met contactgegevens van de klant via een app</li>
					<li>Internetbrowser en apparaat type</li>
					<li>Bankrekeningnummer</li>
				</ul>
				<h2>Bijzondere en/of gevoelige persoonsgegevens die wij verwerken</h2>
				<p>
					<b>GoedEten</b> verwerkt de volgende bijzondere en/of gevoelige
					persoonsgegevens van u:
				</p>
				<ul>
					<li>ras</li>
					<li>godsdienst of levensovertuiging</li>
					<li>politieke voorkeur</li>
					<li>seksuele leven</li>
					<li>lidmaatschap vakbond</li>
					<li>gezondheid</li>
					<li>strafrechtelijk verleden</li>
					<li>kredietwaardigheidscheck</li>
				</ul>
				<h2></h2>
				<p>
					<i>
						Bij <b>GoedEten</b> is het mogelijk om achteraf te betalen voor de
						producten die u koopt. Om dit mogelijk te maken en u en onszelf te
						beschermen tegen misbruik, laten we uw kredietwaardigheid toetsen.
						Dit doen wij door de noodzakelijke persoonsgegevens (waaronder uw
						adresgegevens) te verstrekken aan een kredietwaardigheidsbeoordelaar
						[naam & eventueel adresgegevens beoordelaar], die deze gegevens
						alleen voor dit doel mag gebruiken.
					</i>
				</p>
				<ul>
					<li>
						gegevens van personen jonger dan 16 jaar<br></br>
						<i>
							Onze website en/of dienst heeft niet de intentie gegevens te
							verzamelen over websitebezoekers die jonger zijn dan 16 jaar.
							Tenzij ze toestemming hebben van ouders of voogd. We kunnen echter
							niet controleren of een bezoeker ouder dan 16 is. Wij raden ouders
							dan ook aan betrokken te zijn bij de online activiteiten van hun
							kinderen, om zo te voorkomen dat er gegevens over kinderen
							verzameld worden zonder ouderlijke toestemming. Als u er van
							overtuigd bent dat wij zonder die toestemming persoonlijke
							gegevens hebben verzameld over een minderjarige, neem dan contact
							met ons op via
							<b> info@goedetendenhaag.nl</b>, dan verwijderen wij deze
							informatie.
						</i>
					</li>
					<li>Burgerservicenummer (BSN)</li>
					<li>Biometrische gegevens</li>
					<li>Genetische gegevens</li>
				</ul>
				<h2>
					Met welk doel en op basis van welke grondslag wij persoonsgegevens
					verwerken
				</h2>
				<p>
					<b>GoedEten</b> verwerkt uw persoonsgegevens voor de volgende doelen:
				</p>
				<br></br>- Het afhandelen van uw betaling<br></br>
				<br></br>- Verzenden van onze nieuwsbrief en/of reclamefolder<br></br>
				<br></br>- U te kunnen bellen of e-mailen indien dit nodig is om onze
				dienstverlening uit te kunnen voeren<br></br>
				<br></br>- U te informeren over wijzigingen van onze diensten en
				producten - U de mogelijkheid te bieden een account aan te maken
				<br></br>
				<br></br>- Om goederen en diensten bij u af te leveren<br></br>
				<br></br>- <b>GoedEten</b> analyseert uw gedrag op de website om daarmee
				de website te verbeteren en het aanbod van producten en diensten af te
				stemmen op uw voorkeuren<br></br>
				<br></br>- <b>GoedEten</b> volgt uw surfgedrag over verschillende
				websites waarmee wij onze producten en diensten afstemmen op uw behoefte
				<br></br>
				<br></br>- <b>GoedEten</b> verwerkt ook persoonsgegevens als wij hier
				wettelijk toe verplicht zijn, zoals gegevens die wij nodig hebben voor
				onze belastingaangifte<br></br>
				<br></br>
				<h2>Geautomatiseerde besluitvorming</h2>
				<p>
					<b>GoedEten</b> neemt niet op basis van geautomatiseerde verwerkingen
					besluiten over zaken die (aanzienlijke) gevolgen kunnen hebben voor
					personen. Het gaat hier om besluiten die worden genomen door
					computerprogramma’s of -systemen, zonder dat daar een mens
					(bijvoorbeeld een medewerker van <b>GoedEten</b>) tussen zit.{" "}
					<b>GoedEten </b>
					gebruikt de volgende computerprogramma’s of -systemen: [aanvullen met
					naam van het systeem, waarom het gebruikt wordt, onderliggende logica,
					belang en verwachte gevolgen voor betrokkene].
				</p>
				<h2>Hoe lang we persoonsgegevens bewaren</h2>
				<p>
					<b>GoedEten</b> bewaart uw persoonsgegevens niet langer dan strikt
					nodig is om de doelen te realiseren waarvoor uw gegevens worden
					verzameld. Wij hanteren de volgende bewaartermijnen voor de volgende
					(categorieën) van persoonsgegevens: Categorie klanten: de langste
					periode tussen twee contactmomenten is ongeveer 1 jaar, na een jaar
					waarin geen contact is geweest tussen u en <b>GoedEten</b> zullen wij
					u vragen of u nog langer in ons bestand wilt blijven en aanbiedingen
					wilt blijven ontvangen. Uiteraard kunt u zich op elk gewenst moment
					uitschrijven uit ons bestand.
				</p>
				<h2>Delen van persoonsgegevens met derden</h2>
				<p>
					<b>GoedEten</b> deelt uw persoonsgegevens met verschillende derden als
					dit noodzakelijk is voor het uitvoeren van de overeenkomst en om te
					voldoen aan een eventuele wettelijke verplichting. Met bedrijven die
					uw gegevens verwerken in onze opdracht, sluiten wij een
					bewerkersovereenkomst om te zorgen voor eenzelfde niveau van
					beveiliging en vertrouwelijkheid van uw gegevens. <b>GoedEten</b>{" "}
					blijft verantwoordelijk voor deze verwerkingen.
				</p>
				<h2 id='cookies'>
					Cookies, of vergelijkbare technieken, die wij gebruiken
				</h2>
				<p>
					<b>GoedEten</b> gebruikt functionele, analytische en tracking cookies.
					Een cookie is een klein tekstbestand dat bij het eerste bezoek aan
					deze website wordt opgeslagen in de browser van uw computer, tablet of
					smartphone. <b>GoedEten</b> gebruikt cookies met een puur technische
					functionaliteit. Deze zorgen ervoor dat de website naar behoren werkt
					en dat bijvoorbeeld uw voorkeursinstellingen onthouden worden. Deze
					cookies worden ook gebruikt om de website goed te laten werken en deze
					te kunnen optimaliseren. Daarnaast plaatsen we cookies die uw
					surfgedrag bijhouden zodat we op maat gemaakte content en advertenties
					kunnen aanbieden. Bij uw eerste bezoek aan onze website hebben wij u
					al geïnformeerd over deze cookies en toestemming gevraagd voor het
					plaatsen ervan. U kunt zich afmelden voor cookies door uw
					internetbrowser zo in te stellen dat deze geen cookies meer opslaat.
					Daarnaast kunt u ook alle informatie die eerder is opgeslagen via de
					instellingen van uw browser verwijderen. Zie voor een toelichting:
					<br></br>
					<a
						href="https://veiliginternetten.nl/themes/situatie/cookies-wat-zijn-het-en-wat-doe-ik-ermee/"
						target="_blank"
					>
						https://veiliginternetten.nl/themes/situatie/cookies-wat-zijn-het-en-wat-doe-ik-ermee/
					</a>
				</p>
				<h2>Gegevens inzien, aanpassen of verwijderen</h2>
				<p>
					U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of
					te verwijderen. Daarnaast heeft u het recht om uw eventuele
					toestemming voor de gegevensverwerking in te trekken of bezwaar te
					maken tegen de verwerking van uw persoonsgegevens door <b>GoedEten</b>{" "}
					en heeft u het recht op gegevensoverdraagbaarheid. Dat betekent dat u
					bij ons een verzoek kunt indienen om de persoonsgegevens die wij van u
					beschikken in een computerbestand naar u of een ander, door u genoemde
					organisatie, te sturen. U kunt een verzoek tot inzage, correctie,
					verwijdering, gegevensoverdraging van uw persoonsgegevens, verzoek tot
					intrekking van uw toestemming of bezwaar op de verwerking van uw
					persoonsgegevens sturen naar <b>info@goedetendenhaag.nl</b>. Om er
					zeker van te zijn dat het verzoek tot inzage door u is gedaan, vragen
					wij u een kopie van uw identiteitsbewijs met het verzoek mee te
					sturen. Maak in deze kopie uw pasfoto, MRZ (machine readable zone, de
					strook met nummers onderaan het paspoort), paspoortnummer en
					Burgerservicenummer (BSN) zwart. Dit ter bescherming van uw privacy.
					We reageren zo snel mogelijk, maar binnen vier weken, op uw verzoek.
					<b> GoedEten</b> wilt u er tevens op wijzen dat u de mogelijkheid
					heeft om een klacht in te dienen bij de nationale toezichthouder, de
					Autoriteit Persoonsgegevens. Dat kan via de volgende link:<br></br>
					<a
						href="https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons"
						target="_blank"
					>
						https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons
					</a>
				</p>
				<h2>Hoe wij persoonsgegevens beveiligen</h2>
				<p>
					<b>GoedEten</b> neemt de bescherming van uw gegevens serieus en neemt
					passende maatregelen om misbruik, verlies, onbevoegde toegang,
					ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan.
					Als u de indruk heeft dat uw gegevens niet goed beveiligd zijn of er
					aanwijzingen zijn van misbruik, neem dan contact op met onze
					klantenservice of via
					<b> info@goedetendenhaag.nl</b>
				</p>
				<br></br>
			</main>
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

export default Privacy;
