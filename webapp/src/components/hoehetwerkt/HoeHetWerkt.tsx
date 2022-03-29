import styles from "styles/customer/hoehetwerkt/HoeHetWerkt.module.scss"
import Arrow from "./Arrow"
import Options from "./Options"
import KiesMaaltijd from "./KiesMaaltijd";
import Bezorging from "./Bezorging"
import Koks from "./Koks"
import Duurzaam from "./Duurzaam"
import { useRouter } from "next/router";
import HomeButton from "./../custom_controls/HomeButton";

const HoeHetWerkt = () => {
  const router = useRouter();

  return (
    <main className={styles.hoehetwerkt}>
      <HomeButton/>
      <section className={styles.ontvangen}>
        <h1>Kies de dag waarop je het wilt ontvangen</h1>
        <p className={styles.optionText}>Je hebt hier 2 opties:</p>
        <div className={ styles.option_container}>
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
      <section className={styles.bezorgingsContainer}>
        <h1>Wanneer wordt de maaltijd bezorgd?</h1>
        <p className={styles.letOp}>
          Let op: voor meerdere dagen besteld, dan 
          wordt er ook op meerdere dagen bezorgd.
        </p>
        <Bezorging />
      </section>
      <hr className={styles.hr_lines}/>
      <section className={styles.koksContainer}>
        <h1>Leer de kok(s) achter de maaltijd kennen</h1>
        <Koks />
      </section>
      <hr className={styles.hr_lines}/>
      <section className={styles.duurzaamContainer}>
        <h1>Waarom is jouw maaltijd duurzaam?</h1>
        <Duurzaam />
      </section>
      <div className={styles.backButtonContainer}>
        <button 
          className={styles.calendarButton}
          onClick={() => router.back()}
        >
          Terug
        </button>
      </div>
    </main>
  );
};

export default HoeHetWerkt;
