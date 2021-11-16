import { Checkbox, FormControl, MenuItem } from "@material-ui/core";
import { Button, List, ListItem, ListItemText, Select } from "@material-ui/core"
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import { ICookPlanning } from "models/Cook";
import React from "react"
import { useEffect } from "react";
import styles from "styles/admin/planning/PlanningCooks.module.scss"

export default observer(function PlanningLocation(){
    const { planningStore, locationStore} = useStore()
    const { locationsRegistry } = locationStore;
    const { selectedDay } = planningStore;
  
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        value: ICookPlanning,
    ) => {
        planningStore.selectedCook = value;
        planningStore.loadDishesListPerCook();

    };

    const handleCheckboxClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        index: ICookPlanning,
    ) => {
        (index.available
        ? planningStore.disableCook({...index, available:false}) 
        : planningStore.enableCook({...index, available:true}))
        .then(() =>{ 
            planningStore.loadDishesPlanning()          
        }
        )
    }

    
    return (
        <div className={styles.container}>
             <List component="ul" aria-label="main" className={styles.list}>
                {selectedDay && planningStore.cookListFiltered?.map(cook => 
                    <ListItem
                        key = {cook.cookId}
                        button
                        selected={planningStore.selectedCook === cook}
                        onClick={(event) => handleListItemClick(event, cook)}
                    >
                        <ListItemText primary={`${cook.name}`} />
                        <Checkbox 
                        checked = {cook.available}
                        onClick = {(event) => handleCheckboxClick(event, cook)}
                        />
                    </ListItem>
                )}
                
            </List>
        </div>
    )
})