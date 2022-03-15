import styles from "styles/customer/hoehetwerkt/Koks.module.scss"
import {Logos} from "data/logos"

const Koks = () => {
  const { 
    jitske
  } = Logos
  return (
    <div className={styles.koks}>
      <span className={styles.calendarButton}>Alle Koks</span>
      <p className={styles.text1}>
        Klik op de knop 'alle koks' in het beginscherm en lees daar 
        verhalen zodat je de kok(s) leert kennen.
      </p>
      <p className={styles.text_options}>of</p>
      <img className={styles.jitske} src={jitske} alt="photo jitske" />
      <p className={styles.text2}>
        Bekijk elk gerecht, welke kok heeft gemaatk, wat de kok 
        belangrijk vindt en voor welke smaken er gekozen wordt.
      </p>
    </div>
  )
}

export default Koks
