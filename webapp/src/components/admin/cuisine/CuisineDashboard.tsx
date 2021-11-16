import { Grid, Paper } from "@material-ui/core"
import React, { useEffect } from "react"
import agent from "adapters/agent"
import { ICuisine } from "models/Cuisine"
import CuisineDetails from "./CuisineDetails"
import CuisineSearchComponent from "./CuisineSearchComponent"
import DataTable from "../generics/DataTable"
import { useStore } from "contexts/admin/store"

export default function CuisineDashboard() {
  const { userStore } = useStore();
  const defaultDataRow: ICuisine = {
    id: 0,
    name: "",
  }
  const [data, setData] = React.useState<ICuisine[]>([])
  const [dataRow, setDataRow] = React.useState(defaultDataRow)
  const [isComponentDisabled, setIsComponentDisabled] =
    React.useState<boolean>(false)
  const [btnCancel, setBtnCancel] = React.useState(false)
  const [filter, setFilter] = React.useState("")

  async function getList() {
    try {
      var res = await agent.cuisines.list()
      var resSorted = res.sort((a, b) =>
        a.name.toUpperCase() > b.name.toUpperCase() ? 1 : b.name.toLowerCase() > a.name.toUpperCase() ? -1 : 0
      )
      if (filter.trim().length > 0) {
        var resFiltered = resSorted
        resSorted = resFiltered.filter(item => item.name.toUpperCase().includes(filter.toUpperCase()))
      }
      setData(resSorted)
    } catch (e) {
      console.log(e)
    }
  }

  function handleRowClick(row: ICuisine) {
    setDataRow(row)
  }
  function handleUpdate(someBool: boolean) {
    setBtnCancel(true)
    setIsComponentDisabled(!someBool)
  }

  useEffect(() => {
    void getList()
  }, [])

  useEffect(() => {
    getList()
  }, [filter])

  async function handleDelete(value: ICuisine) {
    const conf = confirm("Do you really want to delete " + value.name + "?")
    if (conf) {
      try {
        if (value.id != null) {
          await agent.cuisines.delete(value.id)
        }
      } catch (e) {
        console.log(e)
      }
      await getList()
      setDataRow(defaultDataRow)
    }
  }

  const handleChangeForm = (event: any) => {
    setDataRow((dataRow) => ({
      ...dataRow,
      [event.target.id]: event.target.value,
    }))
  }

  function handleCancel() {
    setDataRow(defaultDataRow)
    handleUpdate(true)
    setBtnCancel(false)
  }

  function handleCreate() {
    setDataRow(defaultDataRow)
    setBtnCancel(true)
    setIsComponentDisabled(true)
  }

  async function handleSave(value: ICuisine) {
    if (value.id == 0) {
      await agent.cuisines.create(value)
    } else {
      await agent.cuisines.update(value)
    }
    await getList()
    handleCancel()
  }

  function handleChangeNameFilter(value: string) {
    setFilter(value)
  }

  function handleClearAll() {
    setFilter("")
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Paper
          elevation={3}
          style={{
            display: "flex",
            backgroundColor: "beige",
            height: "auto",
            width: "100%",
          }}        >
          <CuisineDetails
            dataRow={dataRow}
            handleChangeForm={handleChangeForm}
            btnCancel={btnCancel}
            handleCancel={handleCancel}
            handleCreate={handleCreate}
            handleSave={handleSave}
          />
        </Paper>
      </Grid>

      <Grid item xs={9}>
        <CuisineSearchComponent
          disabled={isComponentDisabled}
          nameFilter={filter}
          handleChangeNameFilter={handleChangeNameFilter}
          handleClearAll={handleClearAll}
        />
      </Grid>

      <Grid item xs={12}>
        <DataTable
          columnData={[

            {
              id: 'name',
              name: 'Naam',
              enableSort: true,
              align: "left"
            },
          ]}
          disabled={isComponentDisabled}
          rows={data}
          showActions
          showEdit
          showDelete
          paginationTop
          disableDelete={userStore.user?.role !== 'SuperAdmin'}
          onDelete={handleDelete}
          onClick={handleRowClick}
          onEdit={handleUpdate}
        />
      </Grid>
    </Grid>
  )
}
