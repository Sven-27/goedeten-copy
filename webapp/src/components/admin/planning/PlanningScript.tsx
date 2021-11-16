import { Button, Paper } from "@material-ui/core";
import React, { useEffect } from "react"
import { DragHandleRounded } from "@material-ui/icons";
import agent from "adapters/agent";
import { dates } from "data/datesObject"
import { IDish } from "models/Dish";
import { IDishPlanning } from "models/DishAvailability";
import styles from "styles/admin/planning/PlanningDashboard.module.scss";


export default function PlanningScript() {
  const [data, setData] = React.useState<IDish[]>([])
  const [valueA, setValueA] = React.useState("")
  async function getList() {
    const res = await agent.dishes.list()
    setData(res)

  }
  async function createRow(value: IDishPlanning) {
    try {
      await agent.dishAvailabilities.create(value)

    }
    catch (e) {
      console.log(e)
    }

  }
  useEffect(() => {
    void getList()
  }, [])

  // TODO: Altered because it was broken!!!
  async function handlerCreatePlaning() {
    dates.forEach(element => {
      data.forEach(dish => {
        const newRow: IDishPlanning = {
          id: 0,
          date: element.date2,
          currentQuantity: dish.maxQuantity,
          dishId: dish.id,
          plannedQuantity: dish.maxQuantity,          
          dishName:"",
          dishCategory:"",
          cookId:0,
          planned: true
        }
        setValueA(element.date2 + " " + dish.name)
        createRow(newRow)
      })
    });

  }
  return (
    <Paper className={styles.script}>
      <Button variant="contained" color="default"
        onClick={handlerCreatePlaning}
      >
        Druk op de knop om dishes planning voor volgende 14 dagen aan te maken
      </Button>

    </Paper>
  );
}
