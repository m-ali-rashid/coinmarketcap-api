import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import NoSsr from '@material-ui/core/NoSsr';

const muiTabStyles = makeStyles({
	textColorInherit: {
    background:'blue',
    '&.Mui-selected':{border:'2px solid green'}
  },
}, { name: 'MuiTab' });


function Navbar() {
  const muiTabStyled = muiTabStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
		console.log(value);
  };

  

  return (
    <div>
			<AppBar position="static">
			<div className="container">
				<Toolbar variant="dense">
						<Tabs
			        value={value}
			        onChange={handleChange}
			        centered
			      >
			        <Tab label="Item One" />
			        <Tab label="Item Two" />
			        <Tab label="Item Three" />
			      </Tabs>
				</Toolbar>
			</div>
      </AppBar>
    </div>
  );
}

export default Navbar

// <NavLink className="nav-link" to="/">Home</NavLink>
// <NavLink className="nav-link" to="/top/1/10">Top 100</NavLink>
