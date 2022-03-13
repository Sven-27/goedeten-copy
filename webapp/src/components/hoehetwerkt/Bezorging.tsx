import React from 'react'
import styles from "styles/customer/hoehetwerkt/Bezorging.module.scss"
import {days} from "data/dagObject"
import ArrowRightAltIcon from  "@material-ui/icons/ArrowRightAlt" 

const Bezorging = () => {
  return (
    <div className={styles.bezorging}>
      {
        days.map(item => (
          <div className={styles.itemContainer} key={item.id}>
            <span className={item.id === 1 ? `${styles.calendarButton_selected}` : `${styles.calendarButton}`}>{item.day}</span>
            <ArrowRightAltIcon className={styles.arrows} />
            <p className={styles.bezorgTijd}>{item.time}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Bezorging