import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import * as React from "react";
import styles from "styles/admin/Search.module.scss";

export default observer(function CookSearchComponent() {
  const { cookStore } = useStore();
    const{sortField,activeFilter,nameFilter,
     handleClearAll,handleChangeActiveFilter,handleChangeLocationFilter,
    handleChangeSortField,handleChangeNameFilter} = cookStore;   
  return (
    <div className={styles.zip__container}  >
      <form>
      <label> Sorteren op:</label>
      <select
        key = "sortField"
        value={sortField}
        onChange={(e) => handleChangeSortField(e.target.value)}
      >
        <option value="name">Naam(default)</option>
        <option value="locationName">Locatie</option>
        <option value="active">Actief</option>
      </select>

      <label> Naam:</label>
      <input     
        key="nameSearch"
        placeholder="naam..."
        size={10}
        value={nameFilter}
        onChange={(e)=> handleChangeNameFilter(e.target.value)}
        
      />
      <button type="button" onClick={() => handleChangeNameFilter("")}>x</button>
      <label> Locatie:</label>
      <input     
        key="locationSearch"
                placeholder="locatie..."
        value={cookStore.locationFilter}
        onChange={(e) =>  handleChangeLocationFilter(e.target.value)}
      />
      <button type="button" onClick={()=> handleChangeLocationFilter("") }>x</button>
      
      <select
        key = "active"
        value={activeFilter != null ? activeFilter.toString() : "undefined"}
        onChange={(e) => handleChangeActiveFilter(e.target.value)}
      >
        <option value="undefined">All</option>
        <option value="true">Actief</option>
        <option value="false">Onactief</option>
      </select>

      <button type="button" onClick={() => handleClearAll()}>Verwijder filters</button>
      </form>
    </div>
  );
})
