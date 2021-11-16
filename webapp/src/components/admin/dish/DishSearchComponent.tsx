import * as React from "react"
import styles from "styles/admin/Search.module.scss"

interface Props {
  sortField:string;
  handleChangeSortField:(sortField:string)=>void;
   nameFilter:string;
  cookFilter:string;
  cuisineFilter:string;
  handleChangeNameFilter:(nameFilter:string)=>void;
  handleChangeCookFilter:(cookFilter:string)=>void;
  handleChangeCuisineFilter:(cuisineFilter:string)=>void;
  handleClearAll:()=>void;
 
}
export default function ZipSearchComponent({sortField, handleChangeSortField,
  nameFilter,cookFilter,cuisineFilter,handleChangeNameFilter,handleChangeCookFilter,
  handleChangeCuisineFilter,handleClearAll}:Props)
{
return    (
    <div className={styles.zip__container} >   
    <label> Sorteren op:</label>
          <select            
             value={sortField}
             onChange = {(e)=>handleChangeSortField(e.target.value)}
              >
            <option value="name"  >Naam(default)</option>
            <option value="cuisineName"> Cuisine</option>
            <option value="cookName"> Kook</option>
            
          </select>    
          <label> Naam:</label>
          <input key ="nameSearch" className={styles.zip__containerInput}
            placeholder="naam..."
            size = {20}
             value={nameFilter}
             
             onChange={(e) => handleChangeNameFilter(e.target.value)}
          />
          <button
           onClick={() =>  handleChangeNameFilter("")}
           >x</button>
          <label> Keuken:</label>
          <input
            key ="cuisineSearch"
            placeholder="keuken..."
            size = {20}
             value={cuisineFilter}
             onChange={(e) => handleChangeCuisineFilter(e.target.value)}
          />
          <button 
          onClick={() => handleChangeCuisineFilter("")}
          >x</button>
          <label> Kok:</label>
          <input
            key ="cookSearch"
            placeholder="kook ..."
            size = {20}
             value={cookFilter}
             onChange={(e) => handleChangeCookFilter(e.target.value)}
          />
          <button 
          onClick={() => handleChangeCookFilter("")}
          >x</button>
         
          
          <button onClick={()=>handleClearAll()} >
            Verwijder filters

          </button>
        </div>
    

)}