import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Logo from "../images/logo.png";
import { withRouter } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigateTo = (path) => {
    props.history.push(path);
    console.log();
  };

  return (
    <div className={classes.root}>
      <Paper>
        <div className="navContainer">
          <h1 style={{ color: "#8064a4" }}>
            <img src={Logo} alt="CryptoPress" style={{ width: "100px" }} />
            coin<b style={{ color: "black" }}>mine</b>
          </h1>
          <AppBar position="static" color="inherit">
            <div className="container text-center">
              <Toolbar variant="dense">
                <Tabs
                  value={value}
                  textColor="primary"
                  onChange={handleChange}
                  aria-label="simple tabs example"
                  indicatorColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab
                    label="Home"
                    {...a11yProps(0)}
                    onClick={() => {
                      navigateTo("/");
                    }}
                    disableRipple={true}
                  />
                  <Tab
                    label="List"
                    {...a11yProps(1)}
                    onClick={() => {
                      navigateTo("/top/1/10");
                    }}
                    disableRipple={true}
                  />
                  <Tab
                    label="My Earnings"
                    {...a11yProps(2)}
                    disableRipple={true}
                  />
                  <Tab
                    label="Articles"
                    {...a11yProps(3)}
                    disableRipple={true}
                  />
                  <Tab label="Store" {...a11yProps(4)} disableRipple={true} />
                  <Tab
                    label="Contacts"
                    {...a11yProps(5)}
                    disableRipple={true}
                  />
                  <Tab
                    label={<SearchIcon />}
                    {...a11yProps(6)}
                    disableRipple={true}
                  />
                </Tabs>
              </Toolbar>
            </div>
          </AppBar>
        </div>
      </Paper>
    </div>
  );
}
export default withRouter(SimpleTabs);
