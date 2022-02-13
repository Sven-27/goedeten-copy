import styles from "styles/customer/hoehetwerkt/Koks.module.scss"
import TrendingFlat from '@material-ui/icons/TrendingFlat'

const Koks = () => {
  return (
    <div className={styles.koks}>
      <TrendingFlat className={styles.arrowOne} />
      <p className={styles.text1}>
        Klik op de knop 'alle koks' in het beginscherm en lees daar 
        verhalen zodat je de kok(s) leert kennen.
      </p>
      <p className={styles.text_options}>of</p>
      <TrendingFlat className={styles.arrowTwo} />
      <p className={styles.text2}>
        Bekijk elk gerecht, welke kok heeft gemaatk, wat de kok 
        belangrijk vindt en voor welke smaken er gekozen wordt.
      </p>
    </div>
  )
}

export default Koks
