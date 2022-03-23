import React from "react";
import styles from "styles/customer/FAQ.module.scss";

const FAQ = () => {
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
      </main>
    </div>
  );
};

export default FAQ;
