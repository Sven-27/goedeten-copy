import styles from "styles/customer/hoehetwerkt/KiesMaaltijd.module.scss"
import TrendingFlat from '@material-ui/icons/TrendingFlat'

const ClocheBeige = "/assets/images/clochebeigefilling.png"

const KiesMaaltijd = () => {
  return (
    <div className={styles.kies_maaltijd}>
      <TrendingFlat className={styles.arrowOne}  />
      <p className={styles.text1}>
        Klik op de cloche bij de gewenste maaltijd om het gerecht te bestellen
      </p>
      <span className={styles.text_options}>of</span>
      <TrendingFlat className={styles.arrowTwo}  />
      <p className={styles.text2}>
        Bekijk het gerecht met beschrijving, ingredi&euml;nten,
        allergenen en het verhaal van de kok door op het gerecht te klikken.
        Klik daar dan op de cloche om het gerecht te bestellen. 
      </p>
      <figure className={styles.cloche_container}>
        <img className={styles.cloche_img} src={ClocheBeige} alt="cloche-icon" />
      </figure>
      <p className={styles.text3}><span>De cloche is de bestelknop</span></p>
      <p className={styles.text4}>
        Rechtsboven in het scherm vind je de cloche ook weer terug. 
        Daar kun je het overzicht van jouw bestelling(en) zien,
        eventueel nog toevoegen/aanpassen en uiteindelijk betalen.
      </p>
      <p className={styles.text5}>
          Heb je voor meerdere dagen besteld, dan wordt er ook
          op meerdere dagen bezorgd.
        </p>
    </div>
  )
}

export default KiesMaaltijd