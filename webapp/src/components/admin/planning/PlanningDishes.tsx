import React, { useEffect, useState } from "react";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import styles from "styles/admin/planning/PlanningDishes.module.scss";
import { IDishPlanning } from "models/DishAvailability";

export default observer(function PlanningDishes() {
  const { planningStore } = useStore();
  const { selectedCook, selectedDay } = planningStore;
  const [disabled, setDisabled] = useState(
    planningStore.selectedCook?.available
  );
  useEffect(() => {
    setDisabled(!planningStore.selectedCook?.available);
  }, [planningStore.selectedCook?.available]);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: IDishPlanning
  ) => {
    planningStore.selectedDish = index;
  };

  const handleCheckboxClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: IDishPlanning
  ) => {
    (index.planned  //&& index.currentQuantity == index.plannedQuantity ////// toevoegen als algorithm duidelijk is
      ? planningStore.disableDish(index.id)
      : planningStore.enableDish({
          ...index,
          planned: true,
          date: planningStore.selectedDay,
        })
    ).then(() => planningStore.loadDishesPlanning());
    if (index.currentQuantity != index.plannedQuantity){
      alert ("Er zijn aantal gerechten verkocht!!!!!")    
    }
  };

  const handleChange = (
    item: IDishPlanning,
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    planningStore.selectedDish = item;
    let oldValue,
      oldValueCurrent,
      difference = 0;
    oldValue = planningStore.selectedDish?.plannedQuantity;
    oldValueCurrent = planningStore.selectedDish?.currentQuantity;
    let newValue = event.target.value as number;
    difference = newValue - oldValue;    
    if (oldValueCurrent + difference >= 0) {
      item.currentQuantity = oldValueCurrent + difference;
      item.plannedQuantity = newValue;
      planningStore
        .updateDish({
          ...item,
          date: planningStore.selectedDay,
        })
        .then(() => planningStore.loadDishesPlanning());
    } else {
      alert("Jij hebt bestelling ! Operatie is onmogelijk! ");
    }
  };

  return (
    <div className={styles.container}>
      <Table>
        <TableHead>
          <TableRow  key = "tableheader">
          <TableCell ></TableCell>
            <TableCell align="left" >Naam van gerecht</TableCell>
            <TableCell  align="center"> Soort gerecht </TableCell>
            <TableCell align="center" className={styles.currentQuantity}>
              totaal
            </TableCell>
            <TableCell align="center" className={styles.currentQuantity}>
              besteld
            </TableCell>
            <TableCell align="center" className={styles.currentQuantity}>
              over
            </TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedCook &&
            selectedDay &&
            planningStore.planningDishesPerCook?.map((item) => (
              <TableRow key = {item.dishId}              
                onClick={(event) => handleListItemClick(event, item)}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={item.planned}
                    disabled={disabled}
                    onClick={(event) => handleCheckboxClick(event, item)}
                  />
                </TableCell>

                <TableCell align="left" >
                  {item.dishName}
                </TableCell>
                <TableCell align="center" >
                  {item.dishCategory}
                </TableCell>
               
                <TableCell className={styles.currentQuantity}>
                  {item.planned && planningStore.selectedCook?.available ? (
                    <Select
                      className={styles.select}
                      label="Aantal"
                      value={item.plannedQuantity}
                      onChange={(event) => {
                        handleChange(item, event);
                      }}
                    >
                      {Array.from(
                        { length: item.plannedQuantity + 20 },
                        (_, i) => i + 1
                      ).map((selectOption) => (
                        <MenuItem
                          key={`${selectOption}_key`}
                          value={selectOption}
                        >
                          <label>{selectOption}</label>
                        </MenuItem>
                      ))}
                    </Select>
                  ) : (
                    <p className={styles.planned}>
                      {item.plannedQuantity}
                    </p>
                  )}
                </TableCell>

                <TableCell align="center" className={styles.currentQuantity}>
                  {item.plannedQuantity - item.currentQuantity}
                </TableCell>
                <TableCell align="center" className={styles.currentQuantity}>
                  {item.currentQuantity}
                </TableCell>
                
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
});
