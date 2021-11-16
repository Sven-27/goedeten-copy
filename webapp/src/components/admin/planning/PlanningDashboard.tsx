import { Paper } from '@material-ui/core'
import React, { useEffect } from 'react'
import styles from "styles/admin/planning/PlanningDashboard.module.scss";
import PlanningScript from './PlanningScript'
import PlanningLocation from './PlanningLocation';
import PlanningFilter from './PlanningFilter';
import PlanningDatesPerDay from './PlanningDatesPerDay';
import PlanningCooks from './PlanningCooks';
import PlanningDishes from './PlanningDishes';
import PlanningOverview from './PlanningOverview';
import PlanningDatesPerMonth from './PlanningDatesPerMonth';
import { useStore } from 'contexts/admin/store';
import { observer } from 'mobx-react';


export default observer(function PlanningDashboard() {
  const { planningStore,locationStore } = useStore()

  useEffect(() => {
    locationStore.loadData()
  }, [])
  return (
    <div>

      <Paper className={styles.container}>
        <Paper elevation={3} className={styles.filter}>
        <h3>Selecteer een weergave:</h3>
          <Paper className={styles.filterList}>
          <PlanningFilter />
          </Paper>
        </Paper>
        <Paper className={styles.location}>
        <h3>Selecteer een locatie : <b> {planningStore.selectedLocation}</b></h3>
          <Paper className={styles.locationSelect}>
          <PlanningLocation />
          </Paper>
        </Paper >
        <div className={styles.button14days}>
        <PlanningScript />
        </div>
        <Paper elevation={1} className={styles.dates}>
          <h3>Selecteer een dag:</h3>
          <Paper className={styles.datesList}>
            {planningStore.planningFilter
              ? <PlanningDatesPerMonth />
              : <PlanningDatesPerDay />
            }
          </Paper>
        </Paper>
        <Paper className={styles.cooks}>
          <h3>Selecteer koks die deze dag koken: <b> {planningStore.selectedDay}</b></h3>
          <Paper className={styles.cooksList}>
            <PlanningCooks />
          </Paper>
        </Paper>
        <Paper className={styles.dishes}>
          <h3>Selecteer gerechten: <b> {planningStore.selectedCook?.name}</b></h3>
          <Paper className={styles.dishesList}>
            <PlanningDishes />
          </Paper>
        </Paper>
        <Paper variant="outlined" className={styles.overview}>
          <h3>Alle gerechten van deze dag:<b> {planningStore.selectedDay}</b></h3>
          <Paper className={styles.overviewList}>
            <PlanningOverview />
          </Paper>
        </Paper>
      </Paper>

    </div>
  )
})



