import styles from 'styles/customer/Canceled.module.scss'
import Link from 'next/link'
import { Logos } from "data/logos";

const Canceled = () => {
  const { tomaatTextTaglineDonkerGroen } = Logos;

  return (
    <div className={styles.background}>
      <div className={styles.logo}>
        <img src={tomaatTextTaglineDonkerGroen} />
      </div>
      <div className={styles.content}>
        <h1>De betaling is geannuleerd!</h1><span><br></br>probeer het nog eens of neem contact op met je bank.</span>
      </div>

      <Link
        href="/purchase"
      >
        <a className={styles.generalButton}>
          Terug
        </a>

      </Link>

    </div>
  )
}

export default Canceled
