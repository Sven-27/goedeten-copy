import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import * as React from "react";
import styles from "styles/admin/Search.module.scss";

export default observer(function LocationSearchComponent() {
  const { locationStore } = useStore();
  const {
    filter,
    handleChangeNameFilter,
    handleClearAll,
    isComponentDisabled: disabled,
  } = locationStore;



  return (
    <div
      className={styles.zip__container}
      style={disabled ? { pointerEvents: "none", opacity: "0.4" } : {}}
    >
      <label> Naam:</label>
      <input
        key="searchField"      
        placeholder="naam..."
        size={50}
        value={filter}
        onChange={(e) => handleChangeNameFilter(e,e.target.value)}
      />
      <button onClick={() => handleClearAll()}>x</button>
    </div>
  );
});
