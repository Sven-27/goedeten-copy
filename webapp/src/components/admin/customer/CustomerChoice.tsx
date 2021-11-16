import { FormControl, MenuItem } from "@material-ui/core";
import { Button, List, ListItem, ListItemText, Select } from "@material-ui/core"
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import React from "react"
import { useEffect } from "react";
import styles from "styles/admin/planning/PlanningFilter.module.scss"

export default observer(function CustomerChoice(){
    const {planningStore} = useStore()
    const { planningFilter, years } = planningStore;
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (planningFilter == 1) handleOpen()
    }, [planningFilter])

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {

    };

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        planningStore.selectedYear = (event.target.value as string)
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };

    return (
        <div className={styles.container}>
            {/* <Button variant="outlined">
                Komende 30 Dagen
            </Button> */}
             <List component="nav" aria-label="main" className={styles.list}>
                    <ListItem
                        button
                        selected={false}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemText primary={"Klanten"} />
                    </ListItem>
                    <ListItem
                        button
                        selected={true}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemText primary={"Geïnteresseerden buiten bezorggebied"} />
                    </ListItem>
            </List>
        </div>
    )
})