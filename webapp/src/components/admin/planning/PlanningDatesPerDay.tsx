import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styles from 'styles/admin/planning/PlanningDatesPerDay.module.scss'
import { observer } from 'mobx-react';
import { useStore } from 'contexts/admin/store';

export default observer(function PlanningDatesPerDay() {
    const { planningStore } = useStore();
    const { days } = planningStore     

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
        ISOdate: string,
    ) => {
        planningStore.selectedDay = ISOdate;         
        planningStore.selectedCook = undefined;       
        planningStore.loadCooksList();
        planningStore.loadDishesPlanning();
    };

    return (
        <div className={styles.container}>
            <List component="nav" aria-label="main" className={styles.list}>
                {days.map(day =>
                    <ListItem
                        key = {day.id} 
                        button
                        selected={planningStore.selectedDay === day.ISOdate}
                        onClick={(event) => handleListItemClick(event, day.id, day.ISOdate)}
                    >
                        <ListItemText primary={`${day.dayStr} , ${day.day} ${day.month} ${day.year}`} />
                    </ListItem>
                )}
            </List>
        </div>
    );
})