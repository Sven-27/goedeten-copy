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
        Lees hier meer om de kok(s) beter te leren kennen.
      </p>
      <p className={styles.text_options}>of</p>
      <img className={styles.jitske} src={jitske} alt="photo jitske" />
      <p className={styles.text2}>
        Bekijk elk gerecht, welke kok heeft gemaakt, wat de kok 
        belangrijk vindt en hoe dit zich vertaald naar de smaken
        op jouw bord.
      </p>
    </div>
  )
}

export default Koks
