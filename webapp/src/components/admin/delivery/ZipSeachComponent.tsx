import * as React from "react";
import styles from "styles/admin/Search.module.scss";

interface Props {
  sortField: string;
  handleChangeSortField: (sortField: string) => void;
  zipFilter: string;
  streetFilter: string;
  cityFilter: string;
  activeFilter: boolean | null;
  handleChangeZipFilter: (zipFilter: string) => void;
  handleChangeCityFilter: (cityFilter: string) => void;
  handleChangeStreetFilter: (streetFilter: string) => void;
  handleChangeActiveFilter: (st: string) => void;
  handleClearAll: () => void;
  disabled: boolean;
}
export default function ZipSearchComponent({
  sortField,
  handleChangeSortField,
  zipFilter,
  streetFilter,
  cityFilter,
  activeFilter,
  handleChangeZipFilter,
  handleChangeCityFilter,
  handleChangeStreetFilter,
  handleChangeActiveFilter,
  handleClearAll,
  disabled,
}: Props) {
  return (
    <div
      className={styles.zip__container}
      style={disabled ? { pointerEvents: "none", opacity: "0.4" } : {}}
    >
      <label> Sorteren op:</label>
      <select
        value={sortField}
        onChange={(e) => handleChangeSortField(e.target.value)}
      >
        <option value="zip">Zip(default)</option>
        <option value="street">Straat</option>
        <option value="city">Stad</option>
        <option value="active">Actief</option>
      </select>

      <label> Postcode:</label>
      <input
        key="zipSearch"
        className={styles.zip__containerInput}
        placeholder="postcode..."
        size={10}
        value={zipFilter}
        onChange={(e) => handleChangeZipFilter(e.target.value)}
      />
      <button onClick={() => handleChangeZipFilter("")}>x</button>
      <label> Straat:</label>
      <input
        key="streetSearch"
        className={styles.zip__containerInput}
        placeholder="straat..."
        value={streetFilter}
        onChange={(e) => handleChangeStreetFilter(e.target.value)}
      />
      <button onClick={() => handleChangeStreetFilter("")}>x</button>
      <label> City:</label>
      <input
        key="citySearch"
        className={styles.zip__containerInput}
        placeholder="stad..."
        value={cityFilter}
        onChange={(e) => handleChangeCityFilter(e.target.value)}
      />
      <button onClick={() => handleChangeCityFilter("")}>x</button>
      <select
        value={activeFilter != null ? activeFilter.toString() : "undefined"}
        onChange={(e) => handleChangeActiveFilter(e.target.value)}
      >
        <option value="undefined">All</option>
        <option value="true">Actief</option>
        <option value="false">Onactief</option>
      </select>

      <button onClick={() => handleClearAll()}>Verwijder filters</button>
    </div>
  );
}
