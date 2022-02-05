import styles from "styles/customer/hoehetwerkt/HoeHetWerkt.module.scss"
import Svg from "./Svg"

const HoeHetWerkt = () => {
  return (
    <main className={styles.hoehetwerkt}>
      <section className={styles.ontvangen}>
        <h1>Kies de dag waarop je het wilt ontvangen</h1>
        <p>Je hebt hier 2 opties:</p>
        <Svg />
      </section>
      <hr/>
      <hr/>
      <hr/>
    </main>
  );
};

export default HoeHetWerkt;
