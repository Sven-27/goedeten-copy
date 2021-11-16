import * as React from "react";
import { TableHead, ThemeProvider } from "@material-ui/core";
//import { createMuiTheme } from "@material-ui/core/styles"
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
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
} from "@material-ui/core";
import { IPaginatedList } from "models/PaginatedList";
import { IDish } from "models/Dish";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";

interface Props {
  data: IPaginatedList<IDish>;
  page: number;
  rowsPerPage: number;
  handleChangePage: (event: any, newPage: number) => void;
  handleDelete: (dish: IDish) => void;
  handleChangePageSize: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRowSelect: (row: IDish) => void;
  handleUpdate: (row: IDish) => void;
}

export default observer(function DishTable({
  data,
  page,
  rowsPerPage,
  handleChangePage,
  handleDelete,
  handleChangePageSize,
  handleRowSelect,
  handleUpdate,
}: Props) {
  const { userStore } = useStore();
  return (
    <TableContainer component={Paper}>
      <TablePagination
        size="small"
        rowsPerPageOptions={[15, 30, 60, 100]}
        component="div"
        count={data.totalCount}
        rowsPerPage={rowsPerPage}
        page={page - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangePageSize}
      />
      <Table id="myDishTable" size="small" aria-label="custom pagination table">
        <TableHead>
          <TableRow key="tableTitle">
            <TableCell style={{ width: "25%" }}> Naam</TableCell>
            <TableCell style={{ width: "10%" }}> Keuken</TableCell>
            <TableCell style={{ width: "15%" }}> Kok</TableCell>
            <TableCell style={{ width: "5%" }}> Prijs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.items.map((row) => (
            <TableRow
              key={row.id}
              hover={true}
              onClick={() => handleRowSelect(row)}
            >
              <TableCell style={{ width: "25%" }}>{row.name}</TableCell>
              <TableCell style={{ width: "10%" }} align="left">
                {row.cuisineName}
              </TableCell>
              <TableCell style={{ width: "15%" }} align="left">
                {row.cookName}
              </TableCell>              
              <TableCell style={{ width: "5%" }}>
                €{row.priceLarge.toFixed(2)}
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
                  disabled = {userStore.user?.role != "SuperAdmin"}
                >
                  Verwijderen{" "}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
});
