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
			<p>
			<b>Stichting GoedEten</b> (KvK 81230001) en <b>Coöperatie GoedEten U.A.</b> (KvK 80247962) ('wij', 'onze', 'ons' of 'GoedEten') 
			streven ernaar de privacy van alle gebruikers van onze websites 
			<b>goedeten.online</b> en <b>goedetendenhaag.nl</b> (gezamenlijk de 'Sites' genoemd) te beschermen. 
			Wij verzoeken je dit privacybeleid, waarin uiteen wordt gezet hoe wij jouw gegevens gebruiken en beschermen, aandachtig door te lezen. Wij zijn de ‘verwerkingsverantwoordelijke’ voor de gegevens die wij verwerken, tenzij anders aangegeven.
			</p>
			
			<h2>1. Contactgegevens</h2>
			<p>
			Als je vragen of een verzoek hebt over dit privacybeleid of meer in het algemeen over hoe wij met jouw gegevens omgaan, 
			dan kun je contact met ons opnemen via <b><a href="mailto:klantenservice@goedeten.online?subject=Vraag over privacybeleid">klantenservice@goedeten.online</a></b>.
			</p>

			<h2>2. Hoe wij jouw gegevens verzamelen</h2>
			<p>
			Wij verzamelen jouw persoonsgegevens wanneer je met ons contact hebt of als je gebruikmaakt van onze diensten, 
			bijvoorbeeld als je via onze Sites een bestelling plaatst. Wij bekijken ook hoe bezoekers onze Sites gebruiken, 
			om zo onze diensten te kunnen verbeteren en de klantervaring te kunnen optimaliseren.
			</p>
			<p>
			Wij verzamelen gegevens:
			</p>
			<ol className={styles.list}>
				<li> als je een account bij ons aanmaakt of jouw accountinstellingen wijzigt;</li>
				<li> als je een bestelling bij ons plaatst en gedurende het bestelproces (inclusief voor de betaling en de bezorging);</li>
				<li> als je ons toestemming geeft om contact met je op te nemen per e-mail, telefoon, 
					post of sms over marketingcampagnes of om je uit te nodigen voor enquêtes over onze diensten;
				</li>
				<li> als je rechtstreeks contact met ons opneemt per e-mail, telefoon, post, sms of chat; en</li>
				<li> als je browset op en gebruikmaakt van onze Sites (voor en nadat je een account bij ons maakt).</li>
			</ol>
			<p>
			We verzamelen daarnaast gegevens van websites van derden, zoals advertentieplatforms en onze provider van fraudepreventie.
			</p>

			<h2>3. Welke gegevens wij over jou verzamelen</h2>
			<p>
			In het kader van ons streven de privacy van onze klanten en de bezoekers van onze Sites in het algemeen te beschermen, 
			willen wij graag duidelijkheid verschaffen over de soorten gegevens die wij over jou verzamelen.
			</p>
			<p>
			Als je onze Sites bezoekt of via de Sites een GoedEten-bestelling plaatst, word je verzocht informatie over jezelf te verstrekken, 
			zoals jouw naam, contactgegevens, 
			bezorgadres, bijzonderheden over jouw bestelling en betalingsgegevens, zoals creditcard- of betaalpasgegevens.
			</p>
			<p>
			Daarnaast verzamelen wij gegevens over jouw gebruik van de Sites en informatie over jou uit berichten die je op de Sites 
			plaatst of als je contact met ons opneemt of ons feedback verschaft, 
			inclusief per e-mail, post, telefoon of chat. 
			</p>
			<p>
			Wij verzamelen technische gegevens over jouw mobiele apparaat of computer, zoals het besturingssysteem, 
			het apparaat- en verbindingstype en het IP-adres dat je gebruikt om onze Sites te bezoeken.
			</p>
			<p>
			Wij verzamelen ook technische gegevens over jouw gebruik van onze diensten via een mobiel apparaat, bijvoorbeeld de provider, 
			locatiegegevens en prestatiegegevens zoals mobiele betaalmethoden, interactie met andere retail-technologieën zoals het gebruik 
			van NFC-tags, QR-codes en/of het gebruik van mobiele vouchers. Tenzij je via de instellingen van 
			jouw apparaat en/of platform hebt gekozen om anoniem te blijven, kunnen deze gegevens automatisch door ons worden verzameld en 
			worden gebruikt als je de dienst gebruikt op jouw mobiele apparaat/apparaten via de browser 
			van jouw mobiele apparaat of op een andere wijze.
			</p>
			<p>
			Wij verwerken jouw gezondheidsgegevens alleen als je hier vrijwillig toestemming voor geeft, 
			bijvoorbeeld als je aangeeft dat je allergieën hebt.
			</p>

			<h2>4. Gebruik van jouw gegevens</h2>
			<p>
			Wij verwerken uitsluitend de (persoons)gegevens die wij over jou verzamelen als daar een reden voor bestaat en deze reden 
			is toegestaan op grond van de wetgeving inzake gegevensbescherming.
			</p>
			<p>
			Wanneer wij jouw persoonsgegevens moeten verwerken om je de verzochte diensten te kunnen verlenen of een overeenkomst met 
			je aan te gaan, gebruiken wij jouw persoonsgegevens:
			</p>
			<ul className={styles.list}>
				<li>om je toegang te kunnen verlenen tot de betreffende gedeelten van de Sites;</li>
				<li>om je de verzochte diensten aan te bieden;</li>
				<li>om betaling van jou te verkrijgen; en</li>
				<li>om contact met je op te nemen wanneer dit nodig is in verband met het verlenen van de diensten, 
					bijvoorbeeld om problemen met jouw bestelling op te lossen.
				</li>
			</ul>
			<p>
			Verder verwerken wij jouw gegevens als wij daarvoor gerechtvaardigde redenen hebben; 
			bijvoorbeeld om onze diensten aan jouw persoonlijke voorkeuren aan te passen, waaronder om het mogelijk te maken 
			jouw bestellingen gemakkelijker en sneller te plaatsen. Deze redenen staan hieronder vermeld:
			</p>
			<ul className={styles.list}>
				<li>het verbeteren van de effectiviteit en kwaliteit van de dienstverlening die onze klanten in de toekomst van ons kunnen verwachten;
				</li>
				<li>om de content die wij of onze maaltijdbereiders of advertentiepartners aan jou tonen af te stemmen op jouw voorkeuren, 
					bijvoorbeeld om je alleen koks in jouw omgeving te tonen of alleen de voor jou meest relevante advertenties te tonen, 
					gebaseerd op de door ons vastgestelde criteria;
				</li>
				<li>om onze klantenondersteuning in staat te stellen jou op de meest efficiënte wijze te helpen als je vragen 
					of klachten hebt en je een positieve klantervaring te bieden;
				</li>
				<li>om contact met je op te nemen zodat wij jou kunnen vragen naar jouw mening en feedback over onze dienstverlening, 
					of de dienstverlening en/of producten van onze partners, en om je in kennis te stellen over 
					belangrijke wijzigingen of ontwikkelingen op de Sites of in onze dienstverlening en, 
					indien je hebt aangegeven deze informatie te willen ontvangen, je te laten weten 
					of wij onze dienstverlening hebben uitgebreid naar andere gebieden;
				</li>
				<li>om jouw activiteiten op de Sites te analyseren ter administratie, ondersteuning, verbetering en 
					ontwikkeling van onze bedrijfsvoering en voor statistische en analytische doeleinden en om 
					ons te ondersteunen bij het voorkomen van fraude.
				</li>
			</ul>

			<p>
			Wij verwerken jouw gegevens ook om naleving van de bepalingen van de met jou afgesloten overeenkomsten en andere overeenkomsten 
			af te dwingen, rechtsvorderingen in te stellen of daartegen verweer te voeren en de rechten van GoedEten, koks of anderen te 
			beschermen (waaronder om fraude te voorkomen);
			</p>
			<p>
			Als je commentaar en feedback over de Sites en de diensten verstrekt, kunnen wij dat commentaar en die feedback gebruiken 
			op de Sites en in marketing- of advertentiemateriaal. Wij identificeren je in dat geval alleen bij jouw voornaam en woonplaats.
			</p>
			<p> 
			Wanneer wij een beroep doen op onze gerechtvaardigde belangen als rechtsgrond voor de verwerking van jouw persoonsgegevens, 
			maken wij een belangenafweging om vast te stellen of de verwerking noodzakelijk is en dat jouw fundamentele privacyrechten 
			niet zwaarder wegen dan onze gerechtvaardigde belangen. Als je meer informatie over deze belangenafweging wilt krijgen, 
			dan kun je mailen naar <b><a href="mailto:klantenservice@goedeten.online?subject=Informatie over deze belangenafweging">klantenservice@goedeten.online</a></b>.
			</p>
			<p>
			Als een daartoe strekkende wettelijke verplichting op ons rust, kunnen wij jouw persoonsgegevens 
			gebruiken om een administratie van jouw bestelling(en) bij te houden en overige op ons rustende wettelijke verplichtingen 
			of toepasselijke regelgeving na te leven.
			</p>

			<h2>
			5. Directe marketing
			</h2>
			<p>
			Als je ons daarvoor toestemming hebt gegeven, of als wij daarvoor een gerechtvaardigd belang hebben 
			(en dit op grond van de wet is toegestaan), gebruiken wij jouw persoonsgegevens om je te informeren over onze andere producten 
			en diensten waarvan wij denken dat je daarin geïnteresseerd kunt zijn. Wij kunnen daarvoor per e-mail contact met je opnemen. 
			Je hebt het recht om bezwaar te maken tegen het ontvangen van dit soort berichten. 
			Dit kun je doen via de afmeldoptie in onze e-mails of door contact met ons op te nemen door middel 
			van de contactgegevens in dit privacybeleid.
			</p>

			<h2>
			6. Bewaren van jouw gegevens
			</h2>
			<p>
			Door ons verzamelde gegevens worden bewaard zo lang als noodzakelijk is voor de in het onderdeel 
			'Gebruik van jouw gegevens' omschreven doeleinden, overeenkomstig onze gerechtvaardigde belangen of de in 
			de toepasselijke wet- of regelgeving voorgeschreven termijn, bijvoorbeeld voor verslaggevingsdoeleinden.
			Door ons verzamelde gegevens worden bewaard zo lang als noodzakelijk is voor de in het onderdeel 
			'Gebruik van jouw gegevens' omschreven doeleinden, overeenkomstig onze gerechtvaardigde belangen of de in de 
			toepasselijke wet- of regelgeving voorgeschreven termijn, bijvoorbeeld voor verslaggevingsdoeleinden.
			</p>
			<p>
			Bij het vaststellen van de toepasselijke bewaartermijnen nemen wij onder andere de volgende factoren in acht:
			</p>
			<ul className={styles.list}>
				<li>onze contractuele verplichtingen en rechten ten aanzien van de betreffende gegevens;</li>
				<li>wettelijke verplichting(en) om gegevens gedurende een bepaalde termijn te bewaren;</li>
				<li>de wettelijke verjaringstermijnen volgens het toepasselijke recht;</li>
				<li>onze gerechtvaardigde belangen waarvoor wij een belangenafweging hebben gemaakt (zie onderdeel 'Gebruik van jouw gegevens');</li>
				<li>(mogelijke) geschillen; en</li>
				<li>door de betreffende gegevensbeschermingsautoriteiten uitgevaardigde richtlijnen.</li>
			</ul>
			<p>
			In alle andere gevallen vernietigen wij jouw gegevens op een veilige manier zodra deze niet meer nodig zijn voor het 
			doel waarvoor ze waren verzameld.
			</p>

			<h2>
			7. Hoe wij jouw gegevens delen
			</h2>
			<p>
			De gegevens die wij over jou verzamelen worden overgedragen naar en opgeslagen op onze servers binnen de EU. 
			Wij zijn heel voorzichtig en transparant ten aanzien van de partijen met wie wij jouw gegevens delen.
			</p>
			<p>
			Wij delen jouw gegevens met andere bedrijven binnen de GoedEten-groep voor zover nodig in 
			verband met de in onderdeel 4 genoemde doeleinden. Wij delen jouw persoonsgegevens met externe 
			dienstverleners die diensten verlenen namens ons. 
			Het soort externe dienstverleners met wie wij jouw gegevens delen zijn bijvoorbeeld:
			</p>
			<ul className={styles.list}>
				<li>aanbieders van betaaldiensten (waaronder online aanbieders van betaaldiensten en fraudeopsporing);</li>
				<li>IT-dienstverleners (waaronder leveranciers van clouddiensten);</li>
				<li>maaltijdbereiders;</li>
				<li>transportpartners/fietsers;</li>
				<li>klantondersteuning partners; en</li>
				<li>marketing- en advertentiepartners.</li>
			</ul>
			<p>
			GoedEten neemt alle stappen die redelijkerwijs nodig zijn om ervoor te zorgen dat, 
			indien jouw gegevens worden overgedragen aan derden, 
			deze veilig en overeenkomstig dit privacybeleid worden behandeld.
			</p>
			<p>
			Wij kunnen jouw gegevens tevens delen:
			</p>
			<ul className={styles.list}>
				<li>als wij verplicht zijn (en/of als wij van oordeel zijn dat wij verplicht zijn) jouw persoonsgegevens 
					bekend te maken of te delen om te voldoen aan een wettelijke plicht of voorschrift. 
					Hiertoe behoort ook het uitwisselen van informatie met andere ondernemingen en andere organisaties 
					ter bescherming tegen en voorkoming van fraude;
				</li>
				<li>om naleving van de bepalingen van onze overeenkomst met jou of enige andere overeenkomst af te dwingen;
				</li>
				<li>ter bescherming van de rechten van GoedEten, koks of anderen, inclusief om fraude te voorkomen; en
				</li>
				<li>met derden als wij dat redelijkerwijs noodzakelijk achten ter voorkomen van misdrijven, bijv. de politie.
				</li>
			</ul>

			<h2>
			8. Beveiliging
			</h2>
			<p>
			We hebben krachtige technologieën en beleidsmaatregelen ingevoerd die ervoor zorgen dat de door ons bewaarde gegevens 
			over jou afdoende zijn beschermd.
			</p>
			<p>
			Wij hebben maatregelen getroffen om jouw persoonsgegevens te beschermen tegen onbevoegde inzage en onrechtmatige verwerking, 
			niet-opzettelijk verlies, vernietiging en schade.
			</p>
			<p>
			Als je ervoor hebt gekozen een wachtwoord in te stellen voor bepaalde onderdelen van de Sites, 
			ben je zelf verantwoordelijk voor de geheimhouding daarvan. Wij raden je aan jouw wachtwoord met niemand te delen.
			</p>
			<p>
			Helaas is het verzenden van gegevens via het internet nooit helemaal veilig. 
			Hoewel wij maatregelen treffen ter bescherming van jouw persoonsgegevens, 
			kunnen wij de beveiliging van jouw gegevens die worden verzonden naar de Sites nooit helemaal garanderen; 
			elke verzending is dan ook voor jouw eigen risico. Zodra jouw persoonsgegevens door ons zijn ontvangen, 
			passen wij strikte procedures en beveiligingsmaatregelen toe om deze te beschermen tegen onbevoegde inzage.
			</p>
			
			<h2>
			9. Jouw rechten
			</h2>
			<p>
			Je hebt op grond van de toepasselijke wetgeving bepaalde rechten ten aanzien van de gegevens die wij over jou bewaren. 
			Als je deze rechten wilt uitoefenen, kun je contact opnemen via de hierboven vermelde wijze. 
			Voor meer informatie over jouw rechten kun je contact opnemen met jouw gegevensbeschermingsautoriteit. 
			Tevens verwijzen wij naar de informatie hieronder.
			</p>
			<p>
			Op grond van de wetgeving in jouw jurisdictie, kun je toegang verkrijgen tot jouw persoonsgegevens of 
			ons vragen jouw gegevens te corrigeren, bij te werken, aan te passen of te wissen. 
			Je kunt ons ook vragen de verwerking van de gegevens te beperken door contact met ons op te 
			nemen via e-mailadres <b><a href="mailto:klantenservice@goedeten.online?subject=Vragen over de verwerking van de gegevens">klantenservice@goedeten.online</a></b>. 
			</p>
			<p>
			Je hebt het recht jouw persoonsgegevens te verkrijgen in een toegankelijke en overdraagbare vorm, 
			zodat je deze kunt hergebruiken voor jouw eigen doeleinden bij andere dienstverleners.
			</p>
			<p>
			Voor zover wettelijk toegestaan, heb je het recht om de toestemming die je ons eerder hebt gegeven 
			in te trekken of op elk moment met een legitieme reden bezwaar te maken tegen het verwerken van jouw persoonsgegevens. 
			Wij passen jouw voorkeuren vanaf dan toe. 
			Dit maakt ons gebruik van jouw persoonsgegevens ten tijde van jouw toestemming echter niet onrechtmatig.
			</p>

			<h2>
			10. Wijzigingen in ons Privacybeleid
			</h2>
			<p>
			Elke wijziging in ons Privacybeleid wordt geplaatst op de Sites en, waar van toepassing, 
			zullen wij jou op de hoogte brengen van de wijzigingen, bijvoorbeeld per e-mail.
			</p>
			<p>
			Dit privacybeleid is meest recentelijk herzien op: <b>09-12-2021</b>
			</p>

			<h2>
			14. Klachten
			</h2>
			<p>
			Indien je niet tevreden bent met ons antwoord op een klacht of indien je van mening bent dat onze verwerking van 
			jouw gegevens niet voldoet aan de wetgeving inzake gegevensbescherming, 
			dan kan je een klacht indienen bij de Autoriteit Persoonsgegevens via de volgende contactgegevens: i
			</p>
			<p>Adres: Postbus 93374</p>
			<p>2509 AJ Den Haag </p>
			<p>Nederland</p>
			<p>Telefoon: (+31) - (0)70 - 888 85 00</p>
			<p>Website:	<b><a target="_blank" href="https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/gebruik-uw-privacyrechten/klacht-melden-bij-de-ap" rel="noopener noreferrer">
				https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/gebruik-uw-privacyrechten/klacht-melden-bij-de-ap</a></b>
			</p>
			<p>Stichting GoedEten, KvK 81230001, Den Haag, The Netherlands</p>
			<p>Coöperatie U.A. GoedEten Den Haag, KvK 80247962, Den Haag, The Netherlands</p>
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
