import styles from 'styles/customer/Success.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'
import { useStore } from 'contexts/customer/store'
import { observer } from 'mobx-react'
import { Logos } from "data/logos";

const Success = () => {
  const { cartStore } = useStore()
  useEffect(() => { cartStore.cleanCart() }, [])
  const { tomaatTextTaglineDonkerGroen } = Logos;

  return (
    <div className={styles.background}>
      <div className={styles.logo}>
        <img src={tomaatTextTaglineDonkerGroen} />
      </div>
      <div className={styles.content}>
        <h1>De betaling is geslaagd!</h1><span><br></br>Je krijgt nog een bevestiging per e-mail en je bestelling wordt bezorgd op de door jou gekozen datum. <br></br><br></br> Wij wensen je alvast smakelijk eten toe.</span>
      </div>

      <Link
        href="/home"
      >
        <button className={styles.generalButton}>
          Terug
        </button>

      </Link>

    </div>
  )
}

export default observer(Success)
