import { MenuItem } from "@material-ui/core";
import { List, ListItem, ListItemText, Select } from "@material-ui/core"
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import React from "react"
import { useEffect } from "react";
import styles from "styles/admin/planning/PlanningFilter.module.scss"

export default observer(function PlanningFilter(){
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
        planningStore.planningFilter =  index;
        if (index){
            planningStore.selectedDay = undefined;
            planningStore.selectedCook = undefined;
        } else {
            planningStore.selectedDay = planningStore.todayISO;
        }
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
                        selected={planningFilter === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemText primary={"Komende 30 dagen"} />
                    </ListItem>
                    <ListItem
                        button
                        selected={planningFilter === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemText primary={"Per Maand"} />
                    </ListItem>
            </List>
            {(planningFilter == 1) && 

                        <Select
                        labelId="select-year"
                        id="selector-year"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={planningStore.selectedYear}
                        onChange={handleChange}
                        className={styles.dropdown}
                      >
                            <MenuItem value={years[0]}>{years[0]}</MenuItem>
                            <MenuItem value={years[1]}>{years[1]}</MenuItem>
                            <MenuItem value={years[2]}>{years[2]}</MenuItem>
                      </Select>

            }
        </div>
    )
})