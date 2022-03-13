import styles from "styles/customer/hoehetwerkt/KiesMaaltijd.module.scss"
import {Logos} from "data/logos"

const KiesMaaltijd = () => {
  const {cloche, clocheRed} = Logos

  return (
    <div className={styles.kies_maaltijd}>
      <figure className={styles.cloche_containerTop}>
        <img className={styles.cloche_img} src={cloche} alt="cloche-icon" />
      </figure>
      <p className={styles.text1}>
        Klik op de cloche bij de gewenste maaltijd om het gerecht te bestellen
      </p>
      <span className={styles.text_options}>of</span>
      <figure className={styles.cloche_containerMiddle}>
        <img className={styles.cloche_img} src={cloche} alt="cloche-icon" />
      </figure>
      <p className={styles.text2}>
        Bekijk het gerecht met beschrijving, ingredi&euml;nten,
        allergenen en het verhaal van de kok door op het gerecht te klikken.
        Klik daar dan op de cloche om het gerecht te bestellen. 
      </p>
      <figure className={styles.cloche_containerBottom}>
        <img className={styles.cloche_img} src={cloche} alt="cloche-icon" />
        <span className={styles.orderNumber}>6</span>
      </figure>
      <p className={styles.text3}>
        Rechtsboven in het scherm vind je de cloche ook weer terug. 
        Daar kun je het overzicht van jouw bestelling(en) zien,
        eventueel nog toevoegen/aanpassen en uiteindelijk betalen.
      </p>
    </div>
  )
}

export default KiesMaaltijd