import { Button, Paper } from "@material-ui/core";
import React, { useEffect } from "react"
import agent from "adapters/agent";
import { IDish } from "models/Dish";
import { IDishPlanning } from "models/DishAvailability";
import styles from "styles/admin/planning/PlanningDashboard.module.scss";
import { useStore } from "contexts/admin/store";
import SaveIcon from "@material-ui/icons/Save";
import { toast } from "react-toastify";

export default function PlanningScript() {
  const [data, setData] = React.useState<IDish[]>([]);
  const [valueA, setValueA] = React.useState("");
  const { planningStore } = useStore();
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
    try {
      planningStore.planningDishes.forEach((dailyDish) => {
        const newRow: IDishPlanning = {
          id: 0,
          date: dailyDish.date,
          currentQuantity: dailyDish.currentQuantity,
          dishId: dailyDish.dishId,
          plannedQuantity: dailyDish.plannedQuantity,          
          dishName: dailyDish.dishName,
          dishCategory: dailyDish.dishCategoryName,
          cookId: dailyDish.cookId,
          planned: true
        };
        setValueA(dailyDish.date + " " + dailyDish.dishName);
        createRow(newRow);
      });
      toast.success("Planning bijgewerkt!", { autoClose: 1500 });
    }
    catch (e) {
      console.log(e);
      toast.error("Fout bij het bijwerken van de planning!", { autoClose: 1500 });
    }
    // dates.forEach(element => { 
    //   data.forEach(dish => {
    //     //console.log(dish);
    //     const newRow: IDishPlanning = {
    //       id: 0,
    //       date: element.date2,
    //       currentQuantity: dish.maxQuantity,
    //       dishId: dish.id,
    //       plannedQuantity: dish.maxQuantity,          
    //       dishName:"",
    //       dishCategory:"",
    //       cookId:0,
    //       planned: true
    //     }
    //     setValueA(element.date2 + " " + dish.name)
    //     createRow(newRow)
    //   })
    // });

  }
  return (
    <Paper className={styles.script}>
      <Button variant="contained" color="primary"
        onClick={handlerCreatePlaning} startIcon={<SaveIcon />}>
        Wijzigingen opslaan
      </Button>

    </Paper>
  );
}
