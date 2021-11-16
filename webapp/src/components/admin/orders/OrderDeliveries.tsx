import { FormControl, InputLabel, OutlinedInput, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import styles from "styles/admin/order/OrderDetailDialog.module.scss";
import { useFormContext } from "react-hook-form";
import DataTable from "../generics/DataTable";

// export observer(function OrderDeliveries() {
//   const { orderStore } = useStore();
//   const methods = useFormContext();
//   const data = orderStore.dataRow;
//   return (
//     <DataTable
//     // columnData={[
//     //     {
//     //         id: 'id',
//     //         name: 'Id',
//     //         enableSort: true,
//     //         align: "left"
//     //     },
//     //     {
//     //         id: 'orderNumber',
//     //         name: 'Ordernummer',
//     //         enableSort: true,
//     //         align: "left"
//     //     },
//     //     {
//     //         id: 'orderDate',
//     //         name: 'Datum',
//     //         enableSort: true,
//     //         align: "left",
//     //         calculated: true,
//     //         calculation: { callback:(a: string) => a.split("T")[0], fields:['orderDate'] }
//     //     },
//     //     {
//     //         id: 'orderTime',
//     //         name: 'Tijd',
//     //         enableSort: true,
//     //         align: "left",
//     //         calculated: true,
//     //         calculation: { callback:(a: string) => a.split("T")[1], fields:['orderDate'] }
//     //     },
//     //     {
//     //         id: 'orderStatus',
//     //         name: 'Orderstatus',
//     //         enableSort: true,
//     //         align: "left",
//     //         calculated: true,
//     //         calculation: { callback:(a: number) => OrderStatus[a], fields:['status'] }
//     //     },
//     //     {
//     //         id: 'totalAmount',
//     //         name: 'Bedrag',
//     //         enableSort: true,
//     //         align: "left",
//     //         calculated: true,
//     //         calculation: { callback:(a: number) => `€ ${a.toFixed(2).padStart(7, "\u2000")}`, fields:['totalAmount'] }
//     //     },
//     //     {
//     //         id: 'email',
//     //         name: 'Email',
//     //         enableSort: true,
//     //         align: "left"
//     //     },

//     // ]}
//     rows={orderStore.dataRow.deliveries}
//     showActions
//     // onClick={handleRowClick}
//     // showEdit={userStore.user?.role == "SuperAdmin"}
//     renameEdit="Details"
//     disabled={orderStore.isComponentDisabled}
//     // disableEdit
//     onEdit={() => orderStore.editOpen = true}
//     // showDelete
//     // disableDelete={userStore.user?.role != "SuperAdmin"}
//     // onDelete={handleDelete}
//     //showId
//     paginationTop />
//   );
// });

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import OrderStore from "contexts/admin/orderStore";
import { IDelivery } from "models/Purchase";
import { DateTime } from "luxon";

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});



function Row(props: { row: IDelivery }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {DateTime.fromISO(row.deliveryDate).toLocaleString({weekday: "long", day: "2-digit", month: "short", year: "numeric"})}
        </TableCell>
        <TableCell align="right">€ {row.totalPrice.toFixed(2)}</TableCell>
        <TableCell align="right">€ {row.deliveryPrice.toFixed(2)}</TableCell>
        {/* <TableCell align="right">{row.}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography gutterBottom component="div">
                Leveringsdetails:
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Gerecht</TableCell>
                    <TableCell>Aantal</TableCell>
                    <TableCell align="right">Kok</TableCell>
                    <TableCell align="right">Prijs</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.dishOrders.map((dishOrder) => (
                    <TableRow key={dishOrder.id}>
                      <TableCell component="th" scope="row">
                        {dishOrder.dishName}
                      </TableCell>
                      <TableCell>{dishOrder.quantity}</TableCell>
                      <TableCell align="right">{dishOrder.cookName}</TableCell>
                      <TableCell align="right">€ {dishOrder.price.toFixed(2)}</TableCell>
                      {/* <TableCell align="right">{dishOrder.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(dishOrder.amount * row.price * 100) / 100} */}
                      {/* </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



export default observer(function CollapsibleTable() {
  const { orderStore } = useStore();

  const data = orderStore.dataRow;
  const rows = data.deliveries;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Datum levering</TableCell>
            <TableCell align="right">Totaalprijs</TableCell>
            <TableCell align="right">Prijs per levering</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
})
