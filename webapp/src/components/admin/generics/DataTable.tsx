import {
    createStyles,
    Paper,
    Button,
    Table,
    TableBody,
    TableContainer,
    TablePagination,
    Theme,
    Checkbox,
  } from "@material-ui/core";
  import {
    makeStyles,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
  } from "@material-ui/core";
  import SaveAltIcon from '@material-ui/icons/SaveAlt';
  import React from "react";
  import { CsvBuilder } from 'filefy';
  
  interface IDataTableColumn {
    id: string;
    name: string;
    enableSort?: boolean;
    align?: "center" | "inherit" | "justify" | "left" | "right";
    calculated?: boolean;
    calculation?: {callback:any, fields: string[]}; 
  }
  
  interface IDataTableHeadProps {
    columns: IDataTableColumn[];
    showId?: boolean;
    order: Order;
    orderBy: keyof any;
    onRequestSort: (
      event: React.MouseEvent<unknown>,
      property: keyof any
    ) => void;
  }
  
  interface IDataTableProps {
    rows: any[];
    columnData?: IDataTableColumn[];
    onClick?: (row: any) => void;
    disabled?: boolean;
    showActions?: boolean;
    showEdit?: boolean;
    disableEdit?: boolean;
    renameEdit?: string;
    onEdit?: (row: any) => void;
    showDelete?: boolean;
    disableDelete?: boolean;
    onDelete?: (row: any) => void;
    showId?: boolean;
    showExport?: boolean;
    paginationTop?: boolean;
    hidePagination?: boolean;
    firstSortBy?: string;
  }
  
  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    // console.warn(a, b, orderBy);
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  type Order = "asc" | "desc";
  
  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
  ): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
  ) => number {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      tableRow: {
        "&:hover": {
          backgroundColor: "#fff7ef !important"
        }
      },
      paper: {
        width: "100%",
        marginBottom: theme.spacing(2),
      },
      paginationContainer: {
        display: "flex",
        justifyContent: "space-between",
      },
      pagination: {
        alignSelf: "flex-end",
      },
      export: {

      },
      table: {
        width: "100%",
        overflow: "auto",
        // tableLayout: "fixed",
        "& .MuiTableCell-head": {
          textTransform: "capitalize",
          fontWeight: "bold",
        },
        "& .MuiTableSortLabel-root": {
          textTransform: "capitalize",
          fontWeight: "bold",
        }
      },
      visuallyHidden: {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        top: 20,
        width: 1,
      },
      actionButton: {
        marginLeft: "5px",
      }
    })
  );
  
  const DataTableHead: React.FC<IDataTableHeadProps> = ({
    columns,
    showId,
    order,
    orderBy,
    onRequestSort,
  }): JSX.Element => {
    const createSortHandler =
      (property: keyof any) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
      };
  
    return (
      <React.Fragment>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              ((showId && column.id === 'id') || column.id !== 'id') &&
              <TableCell
                key={column.id}
                align={column.align || "left"}
                sortDirection={orderBy === column.id ? order : false}
              >
                {column.enableSort ? (
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={createSortHandler(column.id)}
                  >
                    {column.name}
                  </TableSortLabel>
                ) : (
                  column.name
                )}
              </TableCell> 
            ))}
          </TableRow>
        </TableHead>
      </React.Fragment>
    );
  };
  
  const DataTable: React.FC<IDataTableProps> = ({
    disabled,
    columnData,
    rows,
    onClick,
    showActions,
    showEdit,
    disableEdit,
    onEdit,
    renameEdit,
    showDelete,
    disableDelete,
    onDelete,
    showId,
    showExport,
    paginationTop,
    hidePagination,
    firstSortBy,
  }): JSX.Element => {
    let internalColumnData: IDataTableColumn[] = [
      {
        id: "",
        name: "",
        align: "inherit",
        enableSort: false,
      },
    ];
    if (!columnData) {
      if (rows.length) {
        internalColumnData.length = 0;
        Object.keys(rows[0]).map((key) => {
          internalColumnData.push({
            id: String(key),
            name: String(key),
            align: "inherit",
            enableSort: true,
          });
        });
      }
    } else {
      internalColumnData = columnData;
    }

    const columnNames = internalColumnData.map(col => col.id);

    const classes = useStyles();
    const [order, setOrder] = React.useState<Order>("asc");
    const [orderBy, setOrderBy] = React.useState<keyof any>(firstSortBy ?? "");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleRequestSort = (
      event: React.MouseEvent<unknown>,
      property: keyof any
    ) => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
    };
  
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const builder = new CsvBuilder('filename.csv');

    const handleExport = () => {
      let exportRows:string[][]=[]
      stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
        exportRows.push(columnNames.map((key) => row[key].toString()))
      })

      builder
      .setDelimeter(';')
      .setColumns(columnNames)
      .addRows(exportRows)
      .exportFile();
    }

    const executeCallback = (callback: any, row: any, fields?: string[]) => {
      let values = fields?.map(field => row[field])
      return callback.apply(this, values);
    }
  
    return (
      <React.Fragment>
        <div style={disabled ? { pointerEvents: "none", opacity: "0.4"} : {} }>
          <Paper className={classes.paper}>
          {(!hidePagination && paginationTop) && 
            <div className={classes.paginationContainer}>
            {showExport ? <Button className={classes.export} onClick={handleExport}><SaveAltIcon/>Export CSV</Button> : <div/>}
            <TablePagination
              className={classes.pagination}
              rowsPerPageOptions={[5, 10, 25, 50]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </div>}
            <TableContainer>
              <Table
                size="small"
                className={classes.table}
                aria-labelledby="tableTitle"
                aria-label="enhanced table"
              >
                  
                <DataTableHead
                  columns={internalColumnData}
                  showId={showId}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                />
                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      // console.log(Object.keys(row))
                      return (
                        <TableRow  className={classes.tableRow} hover role="checkbox" key={row.id} onClick={() => onClick && onClick(row)}>
                          {columnNames.map((key, index) => (
                            ((showId && key === 'id') || key !== 'id') &&
                            <TableCell
                              align={
                                internalColumnData[index].align
                                  ? internalColumnData[index].align
                                  : "inherit"
                              }
                              key={key}
                            >
                              {(internalColumnData[index].calculated) ?  executeCallback(internalColumnData[index].calculation?.callback, row, internalColumnData[index].calculation?.fields) :
                              (typeof row[key] == "boolean") ? <Checkbox checked={Boolean(row[key])}/> : row[key].toString() }
                            </TableCell>
                            ))}
                          {showActions && <TableCell
                            align={"right"}
                            key={row.id+"actions"}>
                            {showEdit &&
                              <Button 
                                key={row.id+"editBtn"}
                                size="small" 
                                variant="contained"  
                                color="primary"
                                disabled={disableEdit}
                                onClick={() => onEdit && onEdit(row)}>
                                {renameEdit ? renameEdit : "Wijzigen"}
                              </Button>
                            }
                            {showDelete &&
                              <Button className={classes.actionButton} 
                                key={row.id+"deleteBtn"}
                                size="small"
                                variant="contained"
                                color="secondary"
                                disabled={disableDelete}
                                onClick={() => onDelete && onDelete(row)}>
                                Verwijderen
                              </Button>
                            } 
                          </TableCell>}
                        </TableRow>
                      );
                    })}
                  {(!paginationTop && emptyRows > 0) && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            {(!hidePagination && !paginationTop) && 
            <div className={classes.paginationContainer}>
            {showExport ? <Button className={classes.export} onClick={handleExport}><SaveAltIcon/>Export CSV</Button> : <div/>}
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
            }
          </Paper>
        </div>
      </React.Fragment>
    );
  };
  
  export default DataTable;
  