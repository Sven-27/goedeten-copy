import React from 'react';

import DashboardTile from './DashboardTile';
import styles from 'styles/admin/Dashboard.module.scss'

 
export default function Dashboard() {
  // const{commonStore, userStore} = useStore();
  return (
    <div className={styles.grid_container}>
      <DashboardTile/>
    </div>
  );
}