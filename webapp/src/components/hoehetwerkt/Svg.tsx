import styles from "styles/customer/hoehetwerkt/Svg.module.scss"

const Svg = () => {
  return (
    <svg width="60%" className={styles.svg_container}>
      <line x1="50%" x2="50%" y1="0" y2="10" className={styles.line_top} />
      <line x1="5%" x2="95%" y1="10" y2="10" className={styles.line_horizontal} />
      <defs>
        <marker id="arrowhead-left" markerWidth="10" markerHeight="7" 
          refX="0" refY="3.5" orient="auto"
        >
          <polygon points="0,1.6 4,3.5 0,5" className={styles.triangle_left} />
        </marker>
        <marker id="arrowhead-right" markerWidth="10" markerHeight="7" 
          refX="0" refY="3.5" orient="auto"
        >
          <polygon points="0,1.6 4,3.5 0,5" className={styles.triangle_left} />
        </marker>
      </defs>
      <line x1="5%" x2="5%" y1="9" y2="30" 
        className={styles.line_left} marker-end="url(#arrowhead-left)" 
      />
      <line x1="95%" x2="95%" y1="9" y2="30" 
        className={styles.line_right} marker-end="url(#arrowhead-right)"
      />
    </svg>
  )
}

export default Svg
