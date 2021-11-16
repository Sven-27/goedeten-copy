import Head from "next/head";
import Sidebar from "./Sidebar";

import React, { useState } from "react";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { Avatar } from "@material-ui/core";
import { useStore } from "contexts/admin/store";

import styles from "styles/admin/Layout.module.scss";

import { enableStaticRendering } from "mobx-react";
import { IUser } from "models/User";
import { Logos } from 'data/logos'
import PathData from './PathData';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
  description: string;
  ogImage: string;
  url: string;
  showHeader?: boolean;
};

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,

      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(1),
    },
    adminHeader__avatar: {
      marginLeft: 20,
    },
    adminHeader__logo: {
      marginRight: 26,
    },
  })
);

const Layout = ({
  children,
  title,
  description,
  ogImage,
  url,
  showHeader,
}: LayoutProps) => {
  // website Url
  const pageUrl = "https://www.goed-eten.nl";
  // when you share this page on facebook you'll see this image
  const ogImg =
    "https://media-exp1.licdn.com/dms/image/C5603AQEyl9tgBlRwWA/profile-displayphoto-shrink_100_100/0/1533883863357?e=1622678400&v=beta&t=9oOcWoAsPmI6e25omWmNjdNkWAQFqW8SX3O2G8e0pkE";
    const { tomaatLogo } = Logos
  const { commonStore, userStore } = useStore();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const router = useRouter();
  const [loggedUser, setLoggedUser] = React.useState<IUser | null>(null);
  enableStaticRendering(typeof window === "undefined");
  const [displayTitle, setDisplayTitle] = useState<string>('')    

  React.useEffect(() => {        

    if (commonStore.token) {
      userStore.getUser().then(() => {
        if (userStore.user == null){
         userStore.logout();                  
        } else{
          commonStore.setAppLoaded();
          setLoggedUser(userStore.user);
        }        
      });
    } else {
      router.push("/admin");
      commonStore.setAppLoaded();
    }
    const raw = localStorage.getItem("open") || "true";
    setOpen(raw == "true");
    
  }, []);

  React.useEffect(() => {
    localStorage.setItem("open", open.toString());
  }, [open]);

  React.useEffect(() => {    
    let disp = PathData.find(o => o.link === router.pathname)
    setDisplayTitle(disp?.title??'')
  }, [router.pathname]);
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Head>
        <title>{title ? title : "Goed Eten"}</title>
        <meta
          name="description"
          key="description"
          content={description ? description : "Admin Paneel voor Goed Eten"}
        />
        <meta
          property="og:title"
          content={title ? title : "Goed Eten Admin Paneel"}
          key="og:title"
        />
        <meta property="og:url" content={url ? url : pageUrl} key="og:url" />
        <meta
          property="og:image"
          content={ogImage ? ogImage : ogImg}
          key="og:image"
        />
        <meta
          property="og:description"
          content={description ? description : "Goed Eten Admin Paneel"}
          key="og:description"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/assets/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/assets/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={`Goed eten`} />
      </Head>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color="default"
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar
            style={{ backgroundColor: "#98bf82" }}
            className={styles.container}
          >
            <div className={styles.col1}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>

              <Link href="/goedeten">
                <a className={classes.adminHeader__logo}>
                  <Image
                    // className={classes.adminHeader__logo}
                    src={tomaatLogo}
                    alt="GoedEten-logo"
                    width={50}
                    height={40}
                    // layout="intrinsic"
                  />
                </a>
              </Link>

              <Typography
                variant="h5"
                noWrap
                style={{ color: "#ffffdb", marginTop: "auto",marginBottom: "auto" }}
              >
                Goed Eten Admin Panel 
              </Typography>
             
             
              <Typography
                variant="h5"
                noWrap
                style={{ color: "#2f4f4f", marginTop: "auto",marginBottom: "auto",marginLeft: "1rem"}}
              >
                {displayTitle}
              </Typography>

            </div>
            <div className={styles.col1}>
              <Typography
                style={{
                  color: "#2f4f4f",
                  textAlign: "right",
                  marginTop: "auto",marginBottom: "auto"
                }}
              >
                {loggedUser?.username + "/" + loggedUser?.role}
              </Typography>

              {loggedUser ? (
                <Avatar
                  className={classes.adminHeader__avatar}
                  alt={loggedUser.username}
                  src="/assets/images/user.png"
                />
              ) : null}
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <Sidebar />
        </Drawer>
        <main className={classes.content}>
          {router.pathname === "/admin" ? (
            <div>{children}</div>
          ) : (
            <>
              <div className={classes.toolbar} />
              <div className={classes.content}>{children}</div>
            </>
          )}
        </main>
      </div>
      <style jsx global>
        {`
          html,
          body {
            background: #f9f9f9;
            overflow-x: hidden;
            padding: 0 !important;
          }
          #__next {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          main {
            flex: 1;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
