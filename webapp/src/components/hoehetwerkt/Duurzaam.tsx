import styles from "styles/customer/hoehetwerkt/Duurzaam.module.scss"
import TrendingFlat from '@material-ui/icons/TrendingFlat'
import { Logos } from "data/logos"

const Duurzaam = () => {
  const { 
    duurzaamGroen, 
    kopStaartGroen, 
    lokaalGroen,
    plantaardigGroen, 
    seizoenGroen 
  } = Logos

  return (
    <div className={styles.duurzaam}>
      <TrendingFlat className={styles.arrowOne} />
      <p className={styles.text1}>
        Per gerecht vind je een of meerdere iconen. In de
        omschrijving van het gerecht zie je wat daarmee bedoeld
        wordt voor deze specifieke maaltijd.
      </p>
      <div className={styles.logos}>
        <img className={styles.logo}  src={duurzaamGroen} alt="logo duurzaam" />
        <img className={styles.logo} src={kopStaartGroen} alt="logo kopstaart" />
        <img className={styles.logo} src={lokaalGroen} alt="logo lokaal" />
        <img className={styles.logo} src={plantaardigGroen} alt="logo plantaardig" />
        <img className={styles.logo} src={seizoenGroen} alt="logo seizoen" />
      </div>
      <p className={styles.text_options}>en</p>
      <TrendingFlat className={styles.arrowTwo} />
      <p className={styles.text2}>
        Als je het overkoepelende verhaal wilt lezen per
        duurzaamheidspijler, ga dan naar 'over GoedEten'
        in het menu bovenaan de pagina.
      </p>
    </div>
  )
}

export default Duurzaam