import React from "react"
import styles from "styles/customer/FAQ.module.scss"
import { useRouter } from "next/router"

const FAQ = () => {
  const router = useRouter() 

  return (
	  <div className={styles.faq}>
        <h2 className={styles.title}>Veelgestelde vragen</h2>
      <main className={styles.vragen}>
          <h3 className={styles.subtitle}>Waarom moet ik voor 11:00 uur bestellen?</h3>
          <p className={styles.antwoorden}>
            De maaltijden worden op de dag zelf vers bereid en bezorgd met de fiets. 
            We vragen jou voor 11:00 uur te bestellen zodat wij zonder verspilling de 
            gerechten efficiënt kunnen bereiden. Na 11:00 uur kun je wel al voor de 
            volgende dag (en zelfs tot 2 weken vooruit) bestellen. Je ziet alle 
            mogelijkheden terug in de kalender op de homepage.
          </p>
          <h3 className={styles.subtitle}>Wanneer worden mijn maaltijden geleverd?</h3>
          <p className={styles.antwoorden}>
            De maaltijden in Den Haag worden geleverd tussen 17:00 en 19:00 uur. 
            Helaas kunnen we geen specifiek tijdslot aangeven. Mocht je niet thuis 
            zijn, dan zullen we altijd bij de buren vragen of het aangenomen 
            kan worden. Mochten we het bij de buren afgeven, vragen we er altijd 
            bij of zij het koel willen bewaren voor je. Mocht geen van de buren 
            thuis zijn of het willen aannemen, dan moeten we helaas de bestelling 
            weer meenemen. De bestelling kan om deze reden niet gecrediteerd worden.
          </p>
          <h3 className={styles.subtitle}>Als ik voor verschillende dagen bestel, wordt er dan op verschillende dagen geleverd?</h3>
          <p className={styles.antwoorden}>
            Op het GoedEten-platform kun je voor meerdere dagen bestellen en alles in één keer afrekenen. 
            Onze maaltijden worden dagvers bereid en dus geleverd op de dag waarop deze aangeboden worden op het platform. 
            Bestel je op maandagochtend voor maandagavond, dinsdagavond en donderdagavond, dan zie je de vrolijke 
            bezorger dus 3 keer.
          </p>
          <h3 className={styles.subtitle}>Hoe kan ik meer te weten komen over de koks?</h3>
          <p className={styles.antwoorden}>
            GoedEten is het platform om als zelfstandige kok duurzame maaltijden te kunnen verkopen. 
            Over elke kok kun je dus heel veel informatie terugvinden. Op de homepage kun je op 
            ‘Alle koks’ klikken en de verhalen (motivatie, specialiteiten, kijk op duurzaamheid) per kok lezen. 
            Ook kun je bij een gerecht op de foto van de kok klikken en zo meer over deze kok te weten komen. 
            De kok schrijft ook per gerecht op waarom deze maaltijd duurzaam is.
          </p>
          <h3 className={styles.subtitle}>Wat moet ik doen als ik niet tevreden ben over een maaltijd of bezorging?</h3>
          <p className={styles.antwoorden}>
            Wij vinden het natuurlijk niet leuk als jij niet tevreden bent en horen graag hoe wij onze diensten en producten
            kunnen verbeteren. Stuur alsjeblieft een mail naar klantenservice@goedeten.online, zodat wij jouw 
            feedback kunnen behandelen en samen naar een oplossing kunnen zoeken.
          </p>
          <h3 className={styles.subtitle}>Hoe weet ik of een maaltijd duurzaam is?</h3>
          <p className={styles.antwoorden}>
            Bij elke maaltijd zie je boven de foto een of meer iconen staan. Deze iconen geven aan, 
            aan welke <a className={styles.links} href="/duurzaamheid">duurzaamheidspijlers</a> de maaltijd voldoet. 
            Ook kun je door op de maaltijd te klikken, meer lezen over het gerecht en waarom deze 
            desbetreffende duurzaamheidspijler(s) mag voeren
          </p>
          <h3 className={styles.subtitle}>Waar gaat het geld dat ik betaal voor mijn maaltijd naartoe?</h3>
          <p className={styles.antwoorden}>
             Als jij jouw maaltijd betaalt, zie jij dat je het geld overmaakt naar Stichting GoedEten. 
             Binnen deze stichting valt het platform waar jij zojuist je bestelling op hebt geplaatst en alle promotionele 
             activiteiten rondom dit platform. 5% van het bedrag dat jij hebt betaald gaat naar de stichting voor 
             alle online activiteiten (maaltijdbestelplatform en online marketing). De rest gaat naar de coöperatie van 
             koks in de stad waarin jij je bestelling hebt geplaatst. Dit wordt o.a. gebruikt voor het betalen van de 
             huur van de keuken, de beloningen van de koks en fietsers en de ingrediënten. Wil je precies weten hoe de 
             coöperatie omgaat met jouw geld? Kijk dan op de website van de coöperatie. Als je in het menu naar 
             ‘over GoedEten’ gaat, vind je meer informatie over de coöperaties.
          </p>
          <h3 className={styles.subtitle}>Wat moet ik doen als ik mijn maaltijden via het GoedEten-platform wil verkopen?</h3>
          <p className={styles.antwoorden}>
            Op onze website kun je kijken of er in jouw stad al een coöperatie van koks is die het GoedEten-platform 
            gebruikt om maaltijden te verkopen. Mocht dit het geval zijn, dan kun je contact opnemen met deze coöperatie 
            voor meer informatie. Mocht dit niet het geval zijn en wil jij in jouw stad een coöperatie starten? Heel leuk 
            en we helpen je graag! Voor meer informatie kun je mailen naar koks@goedeten.online.
          </p>
          <h3 className={styles.subtitle}>Wat moet ik doen als ik op de fiets GoedEten-maaltijden wil bezorgen in mijn stad?</h3>
          <p className={styles.antwoorden}>
            Op onze website kun je kijken of er in jouw stad al een coöperatie van koks is die het GoedEten-platform 
            gebruikt om maaltijden te verkopen. Deze coöperatie verzorgt zelf de bezorging van de maaltijden. 
            Je kunt contact opnemen met de coöperatie voor meer informatie. Als je in het menu naar ‘over GoedEten’ gaat, 
            vind je meer informatie over de coöperaties.
          </p>
          <h3 className={styles.subtitle}>Waar komen de ingrediënten vandaan</h3>
          <p className={styles.antwoorden}>
            Elke coöperatie van koks werkt met leveranciers in en rondom de stad(/gebied) waarin zij koken. 
            Door naar de website van deze coöperatie te gaan, kun je meer te weten komen over de leveranciers waarmee 
            er gewerkt wordt. Als je in het menu naar ‘over GoedEten’ gaat, vind je meer informatie over de coöperaties.
          </p>
          <h3 className={styles.subtitle}>Hoelang kan ik de maaltijd(en) bewaren?</h3>
          <p className={styles.antwoorden}>
            Onze maaltijden worden dagvers bereid en op dezelfde dag gekoeld geleverd. We houden een bewaartermijn 
            van maximaal 2 dagen (in de koelkast) aan. Laat de maaltijd niet langer dan 2 uur buiten de koelkast staan. 
            Verwarm de maaltijd door en door voordat je het gerecht gaat eten (per gerecht wordt een advies gegeven 
            door de kok hoe je het goed en lekker opwarmt; dit zie je terug bij de gerechtenpagina).
          </p>
          <p className={styles.overig}>
            Staat jouw vraag er niet bij? Kijk dan ook eens bij <a className={styles.links} href="/hoehetwerkt">Zo werkt het</a>. En anders kun je natuurlijk ook altijd 
            even <a className={styles.links} href="/contact">contact</a> met ons opnemen.
          </p>
      </main>
      <button 
        className={styles.calendarButton}
        onClick={() => router.back()}
      >
        Terug
      </button>
    </div>
  );
};

export default FAQ
