import styles from "styles/customer/hoehetwerkt/Options.module.scss"

const Cloche = "/assets/images/cloche.png"

const Options = () => {
  return (
    <div className={styles.options}>
      <div className={styles.optionsLeft}>
        <div className={styles.options_one}>
          <img src={Cloche} className={styles.image} alt="cloche-logo" />
          <p className={styles.text}>Voor vandaag: Kies uit de gerechten die er staan.  <span>let op:</span></p>
          <p className={styles.message}>Na 11:00 uur kun je niet meer voor vandaag bestellen.</p>
        </div>
        </div>
        <div className={styles.optionsRight}>
        <div className={styles.options_two}>
          <img src={Cloche} className={styles.image} alt="cloche-logo" />
          <p className={styles.text}>Voor een dag in de komende 2 weken (kalender in balk)</p>
          <p className={styles.message}>Het is mogelijk om voor meerdere dagen tegelijk te bestellen.</p>
        </div>
      </div>
    </div>
  )
}

export default Options
