import styles from "styles/customer/home/Home.module.scss"
import dynamic from 'next/dynamic'

const Dishes = dynamic(() => import("./Dishes"), { ssr: false })
const Cooks = dynamic(() => import("./Cooks"), { ssr: false })
const Dates = dynamic(() => import("./Dates"), { ssr: false })

const Home = () => {

 return (
    <div className={styles.home}>
        <section className={styles.slogan}>
          <div className={styles.title}>
            <h1>zin in goedeten</h1>
            </div>
        </section>
        <section className={styles.calendar}>
          <Dates />
        </section>
        <section className={styles.dishes}>
          <Dishes />
        </section>
        <section className={styles.cooks}>
          <Cooks />
        </section>
      </div>
  )
}

export default Home
