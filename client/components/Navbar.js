import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tabs,
  Tab,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { login, logout, whoami } from "../redux/actions/usersActions";
import { createGood } from "../redux/actions/goodsActions";
import Window from "./goodModal";
import Cart from "../pages/cart";
import Home from "../pages";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  tabs: {
    position: "relative",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block ruby",
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Nav = (props) => {
  React.useEffect(() => {
    props.onWhoami();
  });

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onLogin = (e) => {
    e.preventDefault();
    props.onLogining();
  };

  const onLogout = (e) => {
    e.preventDefault();
    props.onLogout();
  };

  let authButtons;
  if (props.users.username !== null) {
    authButtons = (
      <div className={classes.sectionDesktop}>
        {props.users.username}
        <Window createGood={props.onCreateGood} />
        <Button onClick={(e) => onLogout(e)}>Logout</Button>
      </div>
    );
  } else {
    authButtons = (
      <Button color="inherit" onClick={(e) => onLogin(e)}>
        Login
      </Button>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} noWrap>
            Shop
          </Typography>
          <div className={classes.tabs}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              centered
            >
              <Tab label="Home" {...a11yProps(0)} />
              <Tab label="Cart" {...a11yProps(1)} />
            </Tabs>
          </div>
          <div className={classes.grow} />

          {authButtons}
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Cart />
      </TabPanel>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onLogining: () => {
    dispatch(login());
  },
  onCreateGood: (data) => {
    dispatch(createGood(data));
  },
  onLogout: () => {
    dispatch(logout());
  },
  onWhoami: () => {
    dispatch(whoami());
  },
});

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
