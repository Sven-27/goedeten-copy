import styles from "styles/customer/hoehetwerkt/Options.module.scss"

const Cloche = "/assets/images/cloche.png"

const Options = () => {
  return (
    <div className={styles.options}>
      <div className={styles.optionsLeft}>
        <div className={styles.options_one}>
          <img src={Cloche} className={styles.image} alt="cloche-logo" />
          <p className={styles.text}>Voor vanavond: dit kun je bestellen tot 11:00 vandaag.</p>
          <p className={styles.message}>Na 11:00 uur kun je niet meer voor vandaag bestellen.</p>
        </div>
        </div>
        <div className={styles.optionsRight}>
        <div className={styles.options_two}>
          <img src={Cloche} className={styles.image} alt="cloche-logo" />
          <p className={styles.text}>Voor een dag in de komende 2 weken. (kalender in balk)</p>
          <p className={styles.message}>Je kunt ook bestellen voor meerdere dagen. - Kies per dag.</p>
        </div>
      </div>
    </div>
  )
}

export default Options
