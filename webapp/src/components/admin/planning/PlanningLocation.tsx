
import {List, ListItem, ListItemText } from "@material-ui/core"
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import React from "react"
import styles from "styles/admin/planning/PlanningLocation.module.scss"

export default observer(function PlanningLocation(){
    const { planningStore, locationStore } = useStore()
    const { locationsRegistry } = locationStore;
  
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: string,
    ) => {
        planningStore.selectedLocation = index;
        planningStore.selectedDay = undefined;
        planningStore.selectedCook = undefined;
    };


    return (
        <div className={styles.container}>
             <List component="nav" aria-label="main" className={styles.list}>
                {locationsRegistry.map(location => 
                    <ListItem
                        key = {location.id}
                        button
                        selected={planningStore.selectedLocation === location.name}
                        onClick={(event) => handleListItemClick(event, location.name)}
                    >
                        <ListItemText primary={`${location.name}`} />
                        
                    </ListItem>
                    
                )}
                
            </List>
        </div>
    )
})