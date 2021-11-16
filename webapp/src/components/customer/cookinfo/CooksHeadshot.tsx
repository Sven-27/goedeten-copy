import React from "react";
import styles from "styles/customer/cookInfo/CooksHeadshot.module.scss";
import { observer } from "mobx-react";
import { useStore } from "contexts/customer/store";

export default observer(function CooksHeadshot() {
  const { cooksStore } = useStore();

  return (
    <div className={styles.headshot_container}>
      <img src={ cooksStore.selectedCook?.photo } className={styles.cook_picture} />
      <div className={styles.cook_name__Box}>
        <p className={styles.cook_name}>{ cooksStore.selectedCook?.name}</p>
      </div>
    </div>
  );
});
