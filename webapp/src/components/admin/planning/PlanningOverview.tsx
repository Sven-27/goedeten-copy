
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import React from "react";

import DataTable from "../generics/DataTable";

export default observer(function PlanningOverview() {
  const { planningStore } = useStore();
  const { selectedDay } = planningStore;
  const callback = (a:number, b:number) => {
    return a + b ;
  }
  const fields = ['currentQuantity', 'soldQuantity']
  return (
    <div >
       <DataTable
          columnData={[
            {
              id: 'cookName',
              name: 'Kok',
              enableSort: true,
              align: "left"
            },
            {
              id: 'dishCategoryName',
              name: 'Soort gerecht',
              enableSort: true,
              align: "left"
            },
            {
              id: 'dishName',
              name: 'gerecht',
              enableSort: true,
              align: "left"
            },
            {
              id: 'plannedQuantity',
              name: 'totaal',
              enableSort: true,
              align: "left"            
            },
            {
              id: 'soldQuantity',
              name: 'besteld',
              enableSort: true,
              align: "left"
            },
            {
              id: 'currentQuantity',
              name: 'over',
              enableSort: true,
              align: "left"
            },

            // {
            //   id: 'test',
            //   name: 'Calctest',
            //   enableSort: true,
            //   align: "left",
            //   calculated: true,
            //   calculation: {callback, fields}
            // }
          ]}
          rows={planningStore.planningDishes.filter((item)=>item.locationName == planningStore.selectedLocation)}  
          showActions                  
          showExport
          paginationTop
          firstSortBy='cookName'
        
        />
    </div>
  );
});
