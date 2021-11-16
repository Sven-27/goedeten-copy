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
import { IUser } from "models/User";


export default observer(function UserTable() {

  const { userStore } = useStore();
  
  const handleRowClick= (row:IUser) =>{
    userStore.selectedUser = row;
  }

  return (
  
      <TableContainer component={Paper}>

        <Table id="myDishTable" size="small" aria-label="custom pagination table">
          <TableHead >
            <TableRow key="tableTitle" >
              <TableCell style={{ width: "10%" }}> <b>UserNaam</b></TableCell>
              <TableCell style={{ width: "20%" }}> <b>DisplayNaam</b></TableCell>
              <TableCell style={{ width: "20%" }}> <b>Role</b></TableCell>              
            </TableRow>
          </TableHead>
          <TableBody>
              {userStore.usersList?.map((row) => (
                <TableRow
                  key={row.id}
                  hover={true}
                  onClick={() => handleRowClick(row)}
                  >
                 <TableCell style={{ width: "20%" }} align="left">
                    {row.username}
                  </TableCell>
              
                  <TableCell style={{ width: "20%" }} align="left">
                    {row.name}
                  </TableCell>
                  <TableCell style={{ width: "5%" }} align="left">
                    {row.role}
                  </TableCell>
                  
                  <TableCell style={{ width: "5%" }}>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => userStore.handleUpdate(row)}
                    >
                    Wijzigen  
                    </Button>
                  </TableCell>
                  <TableCell style={{ width: "25%" }}>
                    <Button                      
                      size="small"
                      variant="contained"
                      onClick={() => userStore.handlePasswordReset(row)}
                    >
                      Wachtwoord herstel Email {" "}
                    </Button>
                  </TableCell>
                  <TableCell style={{ width: "5%" }}>
                    <Button                      
                      size="small"
                      variant="contained"
                      color="secondary"
                      onClick={() => userStore.handleDelete(row)}
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