import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { useRouter } from "next/router";
import BallotIcon from "@material-ui/icons/Ballot";
import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";
import IconDashboard from "@material-ui/icons/Dashboard";
import IconShoppingCart from "@material-ui/icons/ShoppingCart";
import IconDirectionsBike from "@material-ui/icons/DirectionsBike";
import IconEventAvailable from "@material-ui/icons/EventAvailable";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";
import CakeIcon from "@material-ui/icons/Cake";
import SpaIcon from "@material-ui/icons/Spa";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import IconPeople from "@material-ui/icons/People";
import IconBarChart from "@material-ui/icons/BarChart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Collapse from "@material-ui/core/Collapse";
import { observer } from "mobx-react";
import { useStore } from "contexts/admin/store";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import EditIcon from '@material-ui/icons/Edit';

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;
  const router = useRouter();

  return (
    <li>
      <ListItem selected={router.pathname == to} button component="a" href={to}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

const drawerWidth = 240;
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: drawerWidth,
    },
    appMenu: {
      width: "100%",
      paddingBottom: theme.spacing(1),
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemCollapsed: {
      width: drawerWidth * 0.75,
      paddingLeft: theme.spacing(5),
    },
    menuItemIcon: {
      color: "#97c05c",
    },
    subList: {
      fontStyle: "italic",
      paddingLeft: theme.spacing(2),
    },
  })
);

export default observer(function ListRouter() {
  const { userStore } = useStore();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const raw = localStorage.getItem("sidebarCollapse") || "true";
    setOpen(raw == "true");
  }, []);
  React.useEffect(() => {
    localStorage.setItem("sidebarCollapse", open.toString());
  }, [open]);

  function handleClick() {
    setOpen(!open);
  }
  return (
    // <MemoryRouter initialEntries={['/']} initialIndex={0}>
    <div className={classes.root}>
      {/* <Route>
          {({ location }) => (
            
            <Typography gutterBottom>Current route: {location.pathname}</Typography>
          )}
        </Route> */}
      <Paper elevation={0}>
        <List aria-label="main mailbox folders">
          <ListItemLink
            to="/admin"
            primary="Dashboard"
            icon={<IconDashboard />}
          />
          <ListItemLink to="/home" primary="Home" icon={<HomeIcon />} />
          {/* <ListItem button component="a" href="#" onClick={handleClick} className={classes.menuItem}> */}
          <ListItem button onClick={handleClick} className={classes.menuItem}>
            <ListItemIcon>
              <LocalDiningIcon />
            </ListItemIcon>
            <ListItemLink to="/admin/dish" primary="Dishes" />
            {open ? <IconExpandLess /> : <IconExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Divider />
            <List component="div" className={classes.subList}>
              <ListItemLink
                to="/admin/allergen"
                primary="Allergens"
                icon={<EnhancedEncryptionIcon />}
              />
              <ListItemLink
                to="/admin/cuisine"
                primary="Cuisine"
                icon={<CakeIcon />}
              />
              <ListItemLink
                to="/admin/ingredient"
                primary="Ingredients"
                icon={<SpaIcon />}
              />
              <ListItemLink
                to="/admin/dishcategory"
                primary="Dish categories"
                icon={<BallotIcon />}
              />
              <ListItemLink
                to="/admin/location"
                primary="Locations"
                icon={<LocationOnIcon />}
              />
               <ListItemLink
                to="/admin/vatcategory"
                primary="BTW waardes"
                icon={<EditIcon />}
              />
            </List>
            <Divider />
          </Collapse>
          <ListItemLink
            primary="Cooks"
            to={"/admin/cook"}
            icon={<PeopleIcon />}
          />
          <ListItemLink
            primary="Delivery"
            to={"/admin/delivery"}
            icon={<IconDirectionsBike />}
          />
          <ListItemLink
            primary="Planning"
            to={"/admin/planning"}
            icon={<IconEventAvailable />}
          />
          <ListItemLink
            primary="Orders"
            to={"/admin/orders"}
            icon={<IconShoppingCart />}
          />
          <ListItemLink
            primary="Customers"
            to={"/admin/customer"}
            icon={<IconPeople />}
          />
          <ListItemLink
            primary="Reports"
            to={"/admin/reports"}
            icon={<IconBarChart />}
          />

          {userStore.user?.role == "SuperAdmin" && (
            <div>
              <Divider />
              <ListItemLink
                primary="Users"
                to={"/admin/users"}
                icon={<SupervisedUserCircleIcon />}
              />
            </div>
          )}

          <Divider />
          <ListItem button={true}>
            <ListItemIcon>
              <PowerSettingsNewIcon />
            </ListItemIcon>
            <ListItemText
              id="signOut"
              primary="Sign Out"
              onClick={userStore.logout}
            />
          </ListItem>
        </List>
      </Paper>
    </div>
    // </MemoryRouter>
  );
});
