import styles from "styles/customer/HoeHetWerkt.module.scss"

const HoeHetWerkt = () => {
  return (
    <main className={styles.hoehetwerkt}>
      <section className={styles.ontvangen}>
        <h1>Kies de dag waarop je het wilt ontvangen</h1>
        <p>Je hebt hier 2 opties:</p>
        <svg width="50%" height="10" className={styles.svg_container}>
          <line x1="50%" x2="50%" y1="0" y2="10" className={styles.line_top} />
          <line x1="4" x2="97.2%" y1="10" y2="10" className={styles.line_horizontal} />
          <defs>
            <marker id="arrowhead-left" markerWidth="10" markerHeight="7" 
                    refX="0" refY="3.5" orient="auto">
              <polygon points="0,1.6 4,3.5 0,5" className={styles.triangle_left} />
            </marker>
            <marker id="arrowhead-right" markerWidth="10" markerHeight="7" 
                    refX="0" refY="3.5" orient="auto">
              <polygon points="0,1.6 4,3.5 0,5" className={styles.triangle_left} />
            </marker>
          </defs>
          <line x1="5" x2="5" y1="10" y2="30" className={styles.line_left} marker-end="url(#arrowhead-left)" />
          <line x1="97%" x2="97%" y1="10" y2="30" className={styles.line_right} marker-end="url(#arrowhead-right)" />
        </svg>
      </section>
      <hr/>
      <hr/>
      <hr/>
    </main>
  );
};

export default HoeHetWerkt;
