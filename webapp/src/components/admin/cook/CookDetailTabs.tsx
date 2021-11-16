import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Box from "@material-ui/core/Box"
import { Paper, TextField } from "@material-ui/core"
import { observer } from "mobx-react"
import { useStore } from "contexts/admin/store"
import { useFormContext } from "react-hook-form"

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    flexGrow: 0.5,    
  },

  customTabRoot: {
    color: "#ffffdb",
    backgroundColor: "#1c3a2c",
  },
  customTabIndicator: {
    backgroundColor: "#98bf82",
    height: "3px",
    top: "40px",
  },
}))




export default observer(function CookDetailTabs() {
  const {cookStore} = useStore()
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const methods = useFormContext();  
   const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  


  return (
    <Paper>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          classes={{
            root: classes.customTabRoot,
            indicator: classes.customTabIndicator,
          }}
        >
          <Tab label="Introductie" {...a11yProps(0)} />
          <Tab label="Motivatie " {...a11yProps(1)} />
          <Tab label="Specialiteit" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TextField
         {...methods.register("description")}
          id="description"
          fullWidth={true}
          label="introductie"
          multiline
          rows={12}
          value={cookStore.row.description}
          onChange={(e) => cookStore.handleChangeFormInput(e,e.target.value)}
          variant="outlined"
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TextField
          {...methods.register("motivation")}
          id="motivation"
          fullWidth={true}
          label="motivatie "
          multiline
          rows={12}
          value={cookStore.row.motivation}
          onChange={(e) => cookStore.handleChangeFormInput(e,e.target.value)}
          variant="outlined"
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TextField
          {...methods.register("specialization")}
          id="specialization"
          fullWidth={true}
          label="specializatie"
          multiline
          rows={12}
          value={cookStore.row.specialization}
          onChange={(e) => cookStore.handleChangeFormInput(e,e.target.value)}
          variant="outlined"
        />
      </TabPanel>
    </Paper>
  )
})
