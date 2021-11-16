import * as React from "react"
import styles from "styles/admin/Search.module.scss"

interface Props {
  nameFilter: string;
  handleChangeNameFilter: (valuer: string) => void;
  handleClearAll: () => void;
  disabled: boolean;
}
export default function CuisineSearchComponent({
  nameFilter,
  handleChangeNameFilter,
  handleClearAll,
  disabled,
}: Props) {
  return (
    <div
      className={styles.zip__container}
      style={disabled ? { pointerEvents: "none", opacity: "0.4" } : {}}
    >
      <label> Naam:</label>
      <input
        key="nameSearch"
        className={styles.zip__containerInput}
        placeholder="naam..."
        size={50}
        value={nameFilter}
        onChange={(e) => handleChangeNameFilter(e.target.value)}
      />
      <button onClick={() => handleClearAll()}>x</button>
    </div>
  )
}
