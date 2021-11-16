import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import dates from 'data/datesPlanning';
import styles from 'styles/admin/planning/PlanningDatesPerMonth.module.scss'
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useStore } from 'contexts/admin/store';

export default observer(function PlanningDatesPerMonth() {
    const { planningStore } = useStore();
    const { selectedYear, days } = planningStore;
    const [selectedIndex, setSelectedIndex] = useState(0);


    const handleMonthItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: string,
    ) => {
        planningStore.selectedMonth = index
        planningStore.selectedDay = undefined;
    };

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
        ISODate: string,
    ) => {
        setSelectedIndex(index);
        planningStore.selectedDay = ISODate;
        planningStore.loadCooksList();
        planningStore.loadDishesPlanning();
        planningStore.selectedCook = undefined;
    };

    return (
        <div className={styles.container}>
            <List component="nav" aria-label="main" className={styles.months}>
                {dates.Months.map(month => 
                    <ListItem
                        key = {month}
                        button
                        selected={planningStore.selectedMonth === month}
                        onClick={(event) => handleMonthItemClick(event, month)}
                    >
                        <ListItemText primary={`${month}`} />
                    </ListItem>
                )}
            </List>
            <List component="nav" aria-label="main" className={styles.days}>
                {days.map(day =>
                    <ListItem
                        key  = {day.id}
                        button
                        selected={planningStore.selectedDay === day.ISOdate}
                        onClick={(event) => handleListItemClick(event, day.id, day.ISOdate)}
                    >
                        <ListItemText primary={`${day.dayStr} ${day.day}`} />
                    </ListItem>
                )}
            </List>
        </div>
    );
})