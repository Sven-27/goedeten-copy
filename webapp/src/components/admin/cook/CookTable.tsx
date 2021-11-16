import * as React from "react"
import { TableHead } from "@material-ui/core"
import {
  Paper,
  Button,
  Checkbox,
  TableCell,
  TableRow,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from "@material-ui/core"
import { observer } from "mobx-react";
import { useStore } from "contexts/admin/store";


export default observer(function CookTable() {

  const { cookStore,userStore } = useStore();
  const{ page,
    pageSize:rowsPerPage,
    handleChangePage,
    handleDelete,
    handleChangePageSize,
    setRow:handleRowSelect,
    handleUpdate} = cookStore;
  return (
  
      <TableContainer component={Paper}>
        <TablePagination
          size="small"
          rowsPerPageOptions={[15, 30, 60, 100]}
          component="div"
          count={cookStore.cooksRegistry.totalCount}
          rowsPerPage={rowsPerPage}
          page={page - 1}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangePageSize}
        />
        <Table id="myDishTable" size="small" aria-label="custom pagination table">
          <TableHead >
            <TableRow key="tableTitle" >
              <TableCell style={{ width: "10%" }}> <b>Naam</b></TableCell>
              <TableCell style={{ width: "20%" }}> <b>Locatie</b></TableCell>
              <TableCell style={{ width: "20%" }}> <b>Email</b></TableCell>
              <TableCell style={{ width: "5%" }}> <b>Actief</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {cookStore.cooksRegistry.items.map((row) => (
                <TableRow
                  key={row.id}
                  hover={true}
                  onClick={() => handleRowSelect(row)}
                >
                  <TableCell style={{ width: "20%" }}>{row.name}</TableCell>
                  <TableCell style={{ width: "20%" }} align="left">
                    {row.locationName}
                  </TableCell>
                  <TableCell style={{ width: "20%" }} align="left">
                    {row.email}
                  </TableCell>
                  <TableCell style={{ width: "5%" }}>
                    <Checkbox checked={row.active} />
                  </TableCell>
                  <TableCell style={{ width: "5%" }}>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => handleUpdate(row)}
                    >
                    Wijzigen  
                    </Button>
                  </TableCell>
                  <TableCell style={{ width: "5%" }}>
                    <Button                      
                      size="small"
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDelete(row)}
                      disabled={userStore.user?.role != "SuperAdmin"}
                    >
                      Verwijderen {" "}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

  )
}

)