import styles from "styles/customer/hoehetwerkt/HoeHetWerkt.module.scss"
import Arrow from "./Arrow"
import Options from "./Options"
import KiesMaaltijd from "./KiesMaaltijd";
import Koks from "./Koks"
import Duurzaam from "./Duurzaam"
 
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
      <section className={styles.koksContainer}>
        <h1>Leer de kok(s) achter de maaltijd kennen</h1>
        <Koks />
      </section>
      <hr className={styles.hr_lines}/>
      <section className={styles.duurzaamContainer}>
        <h1>Hoe herken je een duurzame maaltijd?</h1>
        <Duurzaam />
      </section>
    </main>
  );
};

export default HoeHetWerkt;
