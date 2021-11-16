import { Button, Paper } from '@material-ui/core'
import React, { useEffect } from 'react'
import styles from "styles/admin/customer/CustomerDashboard.module.scss";
import PlanningLocation from '../planning/PlanningLocation';
import { useStore } from 'contexts/admin/store';
import { observer } from 'mobx-react';
import CustomerChoice from './CustomerChoice';
import CustomerTable from './CustomerTable';


export default observer(function CustomerDashboard() {
  const {planningStore, customerStore } = useStore()

  useEffect(() => {
    customerStore.loadData()
  }, [])

  return (
    <div>

      <Paper className={styles.container}>
        <Paper className={styles.filter}>
        <h3>Selecteer een weergave:</h3>
          <Paper className={styles.filterList}>
          <CustomerChoice />
          </Paper>
        </Paper>
        <Paper className={styles.location}>
        <h3>Selecteer een locatie : <b> {planningStore.selectedLocation}</b></h3>
          <Paper className={styles.locationSelect}>
          <PlanningLocation />
          </Paper>
        </Paper>

        {/* 
        <Paper elevation={1} className={styles.dates}>
          <h3>Selecteer een dag:</h3>

          </Paper>
        </Paper>
        <Paper className={styles.cooks}>
          <h3>Selecteer koks die deze dag koken: <b> {planningStore.selectedDay}</b></h3>
          <Paper className={styles.cooksList}>

          </Paper>
        </Paper>
        <Paper className={styles.dishes}>
          <h3>Selecteer gerechten: <b> {planningStore.selectedCook?.name}</b></h3>
          <Paper className={styles.dishesList}>

          </Paper>
        </Paper> 
        */}
        <Paper variant="outlined" className={styles.overview}>
          <h3>Overzicht van klanten</h3>
          <Paper className={styles.overviewList}>
            <CustomerTable/>
          </Paper>
        </Paper>
      </Paper>

    </div>
  )
})
