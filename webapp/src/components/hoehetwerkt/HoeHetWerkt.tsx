import styles from "styles/customer/hoehetwerkt/HoeHetWerkt.module.scss"
import Arrow from "./Arrow"
import Options from "./Options"
import KiesMaaltijd from "./KiesMaaltijd";
 
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
      <hr className={styles.hr_lines}/>
      <section className={styles.kies_maaltijdContainer}>
        <h1>Kies de maaltijd waar jij trek in hebt</h1>
        <KiesMaaltijd />
      </section>
      <hr className={styles.hr_lines}/>
      <hr className={styles.hr_lines}/>
    </main>
  );
};

export default HoeHetWerkt;
