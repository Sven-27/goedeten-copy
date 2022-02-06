import styles from "styles/customer/hoehetwerkt/HoeHetWerkt.module.scss"
import Arrow from "./Arrow"
import Options from "./Options"
 
const HoeHetWerkt = () => {
  return (
    <main className={styles.hoehetwerkt}>
      <section className={styles.ontvangen}>
        <h1>Kies de dag waarop je het wilt ontvangen</h1>
        <p className={styles.optionText}>Je hebt hier 2 opties:</p>
        <span className={styles.vertical_line}></span>
        <div className={ styles.option_container}>
        <hr/>
        <Arrow />
        <Options />
        </div>
      </section>
      <hr/>
      <hr/>
      <hr/>
    </main>
  );
};

export default HoeHetWerkt;
