import styles from "styles/customer/hoehetwerkt/HoeHetWerkt.module.scss"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const Cloche = "/assets/images/cloche.png"
 
const HoeHetWerkt = () => {
  return (
    <main className={styles.hoehetwerkt}>
      <section className={styles.ontvangen}>
        <h1>Kies de dag waarop je het wilt ontvangen</h1>
        <p>Je hebt hier 2 opties:</p>
        <span className={styles.vertical_line}></span>
        <div className={ styles.option_container}>
        <hr/>
        <div className={styles.arrow_container}>
          <ArrowRightAltIcon className={styles.arrowIconLeft}  />
          <ArrowRightAltIcon className={styles.arrowIconRight} />
        </div>
        </div>
      </section>
      <hr/>
      <hr/>
      <hr/>
    </main>
  );
};

export default HoeHetWerkt;
