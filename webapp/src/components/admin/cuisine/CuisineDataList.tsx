import * as React from "react"
import { TableHead } from "@material-ui/core"

import {
  Paper,
  Button,  
  TableCell,
  TableRow,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from "@material-ui/core"
import { ICuisine } from "models/Cuisine";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";


interface Props {
  data: ICuisine[];
  handleDelete: (value: ICuisine) => void;  
  handleRowClick: (value: ICuisine) => void;
  handleUpdate: (someBool: boolean) => void;
  disabled: boolean;
}


export default observer( function CuisineDataList({data, handleDelete,  
  handleRowClick,
  handleUpdate,
  disabled,
}: Props) {
  const { userStore } = useStore();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  return (
      <div style={disabled ? { pointerEvents: "none", opacity: "0.4" } : {}}>
        <TableContainer component={Paper}>
          <TablePagination
            size="small"
            rowsPerPageOptions={[5, 10, 20 ,40]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page} 
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <Table id="myDataTable" size="small" aria-label="custom pagination table">
            <TableHead >
              <TableRow >              
                <TableCell style={{ width: "50%" }}> <b>Naam </b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.id}
                  hover={true}
                  onClick={() => handleRowClick(row)}
                >
                  
                  <TableCell style={{ width: "50%" }} align="left">
                    {row.name}
                  </TableCell>
                  <TableCell style={{ width: "5%" }}>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => handleUpdate(disabled)}
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
                      disabled = {userStore.user?.role != "SuperAdmin"}
                    >
                      Verwijderen
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  )
})
