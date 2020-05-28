import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Logo from '../images/logo.png';
import Home from './Home.js'
import { withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import HomeHotStories from './HomeHotStories.js';
import HomeMostCommented from './HomeMostCommented.js';

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
    'aria-controls': `simple-tabpanel-${index}`,
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

  return (
    <div className="border p-0">
  		<Toolbar variant="dense" className="p-0">
        <Tabs
          value={value}
          textColor="secondary"
          onChange={handleChange}
          indicatorColor="secondary"
          centered={true}
        >
          <Tab label="Hot Stories" {...a11yProps(0)} disableRipple={true}/>
          <Tab label="Most Commented" {...a11yProps(1)} disableRipple={true}/>
        </Tabs>
      </Toolbar>
      {/*
      */}
      <TabPanel value={value} index={0}>
        <HomeHotStories/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HomeMostCommented/>
      </TabPanel>
    </div>
  );
}
export default withRouter(SimpleTabs)
