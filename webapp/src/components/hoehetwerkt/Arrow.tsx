import styles from "styles/customer/hoehetwerkt/Arrow.module.scss"
import ArrowRightAltIcon from  "@material-ui/icons/ArrowRightAlt" 
import { Logos } from "data/logos"

const Arrow = () => {
  const { accolade } = Logos
  return (
  <div className={styles.arrow_container}>
    <section className={styles.arrowContainerLeft}>
      <span className={styles.calendarButton_selected}>Vandaag</span>
      <ArrowRightAltIcon className={styles.arrowIconLeft}  />
    </section>
    <section className={styles.arrowContainerRight}>
      <div className={styles.spanContainer}>
      <span className={styles.calendarButton}>Morgen</span>
      <span className={styles.calendarButton}>Overmorgen</span>
      </div>
      <img className={styles.accolade} src={ accolade } alt="accolade" />
      <ArrowRightAltIcon className={styles.arrowIconRight} />
    </section>
  </div>
  )
}

export default Arrow
