import { Grid, Paper } from "@material-ui/core"
import * as React from "react"
import { IZipcode } from "models/Zipcode"
import agent from "adapters/agent"
// import ZipCodeDetails from "./ZipCodeDetails"
// import DataTable from "../generics/DataTable"
import { useStore } from "contexts/admin/store"
import { ILocation } from "models/Location"
import { useEffect } from "react"
import styles from "styles/admin/Delivery.module.scss"
import dynamic from "next/dynamic"
const ZipCodeDetails = dynamic(() => import("./ZipCodeDetails"), { ssr: false })
const DataTable = dynamic(() => import("../generics/DataTable"), { ssr: false })



export default function ZipCodeDashboard() {
  const { userStore, locationStore } = useStore();
  const defaultZipRow: IZipcode = {
    id: 0,
    zip: "",
    locationName: "",
    active: false,
  }
  useEffect(() =>{
    locationStore.loadData()
  }, [])
  const [zip, setZip] = React.useState(defaultZipRow)
  const [isComponentDisabled, setIsComponentDisabled] = React.useState<boolean>(false)
 

  const [zipCodeData, setZipCodeData] = React.useState<IZipcode[]>([])

  const [btnCancel, setBtnCancel] = React.useState(false)


  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true)

  React.useEffect(() => {
    void getList()
  }, [])

  async function getList() {
    setLoading(true)
    try {
      setZipCodeData(await agent.zipCodes.list())
      setLoading(false)
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  async function handleDelete(zip: IZipcode) {

    const conf = confirm(`Weet je zeker dat je ${zip.zip} - ${zip.locationName} wilt verwijderen?`)
    if (conf) {
      setLoading(true)
      try {
        if (zip.id != null) {
          await agent.zipCodes.delete(zip.id)
        }
        setLoading(false)
      } catch (e) {
        console.log(e)
        setLoading(false)
      }
      await getList()
      setZip(defaultZipRow)
    }
  }

  function handleRowClick(row: IZipcode) {
    setZip(row)
  }

  function handleUpdate() {
    setBtnCancel(true)
    setIsComponentDisabled(true)
  }

  const handleChangeForm = (event: any) => {
    if (event.target.id !== "active") {
      setZip((zip) => ({
        ...zip,
        [event.target.id]: event.target.value,
      }))
      console.log(event.target.id, event.target.value)
    } else {
      setZip((zip) => ({
        ...zip,
        [event.target.id]: event.target.checked,
      }))
    }
  }

  const handleChangeLocation = (value: ILocation) => {
    locationStore.dataRow = value;
    setZip((zip) => ({
      ...zip,
      locationName: value.name,
    }))
  }

  function handleCancel() {
    setZip(defaultZipRow)
    setIsComponentDisabled(false)
    setBtnCancel(false)
  }

  function handleCreate() {
    setZip(defaultZipRow)
    setBtnCancel(true)
    setIsComponentDisabled(true)
  }

  async function handleSave(zip: IZipcode) {
    if (zip.id == 0) {
      await agent.zipCodes.create(zip).then((response) => setZip(response))
    } else {
      await agent.zipCodes.update(zip)
    }
    await getList()
    handleCancel()
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
            width: "100%"
          }}>
          <ZipCodeDetails
            zip={zip}
            handleChangeForm={handleChangeForm}
            handleChangeLocation={handleChangeLocation}
            btnCancel={btnCancel}
            handleCancel={handleCancel}
            handleCreate={handleCreate}
            handleSave={handleSave}
          />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <DataTable
          columnData={[

            {
              id: 'zip',
              name: 'Postcode',
              enableSort: true,
              align: "left"
            },
            {
              id: 'locationName',
              name: 'Locatie',
              enableSort: true,
              align: "left"
            },
            {
              id: 'active',
              name: 'Actief',
              enableSort: true,
              align: "left"
            },
          ]}
          disabled={isComponentDisabled}
          rows={zipCodeData}
          showActions
          showEdit
          showDelete
          showExport
          paginationTop
          disableDelete={userStore.user?.role != 'SuperAdmin'}
          onDelete={handleDelete}
          onClick={handleRowClick}
          onEdit={handleUpdate}
          firstSortBy='zip'
        />
      </Grid>
    </Grid>
  )
}
