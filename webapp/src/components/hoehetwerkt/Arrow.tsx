import styles from "styles/customer/hoehetwerkt/Arrow.module.scss"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const Arrow = () => {
  return (
  <div className={styles.arrow_container}>
    <ArrowRightAltIcon className={styles.arrowIconLeft}  />
    <ArrowRightAltIcon className={styles.arrowIconRight} />
  </div>
  )
}

export default Arrow
