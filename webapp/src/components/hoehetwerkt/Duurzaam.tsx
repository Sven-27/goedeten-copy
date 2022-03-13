import styles from "styles/customer/hoehetwerkt/Duurzaam.module.scss"
import { Logos } from "data/logos"

const Duurzaam = () => {
  const { 
    duurzaamGroen, 
    kopStaartGroen, 
    lokaalGroen,
    plantaardigGroen, 
    seizoenGroen, 
    menuLogo,
    overGoedeten,
    footerLogo
  } = Logos

  return (
    <div className={styles.duurzaam}>
      <div className={styles.logos}>
        <img className={styles.logo}  src={duurzaamGroen} alt="logo duurzaam" />
        <img className={styles.logo} src={kopStaartGroen} alt="logo kopstaart" />
        <img className={styles.logo} src={lokaalGroen} alt="logo lokaal" />
        <img className={styles.logo} src={plantaardigGroen} alt="logo plantaardig" />
        <img className={styles.logo} src={seizoenGroen} alt="logo seizoen" />
      </div>
      <p className={styles.text_options}>
        Aan de iconen bovenaan elk gerecht zie je aan welke 
        duurzaamheidspijler(s) het voldoet.
      </p>
      <figure className={styles.hamburgerContainer}>
        <img className={styles.menuLogo} src={menuLogo} alt="menu-logo" />
        <img className={styles.overGoedeten} src={overGoedeten} alt="goedeten-logo" />
      </figure>
      <p className={styles.menu}>
        Ga via het menu rechtsboven naar 'over GoedEten'
      </p>
      <p className={styles.of}>of</p>
      <img className={styles.footerLogo} src={footerLogo} alt="logo goedeten" />
      <p className={styles.infoGoedEten}>
        Klik linksonder op het logo om meer te lezen
        over het GoedEten concept.
      </p>
    </div>
  )
}

export default Duurzaam