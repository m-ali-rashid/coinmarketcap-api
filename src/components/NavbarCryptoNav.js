import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../store/actions/getCryptos'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const muiTabStyles = makeStyles({
  root:{},
	textColorInherit: {
    background:'#343a40',
    transition:'0.3s',
    minHeight:'67px',
    opacity:1,
    '&.Mui-selected':{backgroundColor:'#203040'},
    '&:hover':{backgroundColor:'#203040', marginTop:'-5px'}
  },
	textColorPrimary: {
    transition:'0.5s',
    minWidth:'20px',
    padding:'0 1rem',
    opacity:0.7,
    borderRight:'2px solid transparent',
    borderLeft:'2px solid transparent',
    '&.Mui-selected':{borderLeft:'2px solid #8064a4',borderRight:'2px solid #8064a4', color:'#8064a4'},
    '&:hover':{borderLeft:'2px solid #8064a4',borderRight:'2px solid #8064a4', color:'#8064a4'}
  },
}, { name: 'MuiTab' });

const muiAppBarStyles = makeStyles({
  colorPrimary:{background:'#343a40'}
}, {name: 'MuiAppBar'})

const muiPaperStyles = makeStyles({
  elevation1:{boxShadow:'none'}
}, {name: 'MuiPaper'})

const muiTabIndicator = makeStyles({
  indicator:{backgroundColor:'transparent'},
  centered:{}
}, {name: 'MuiTabs'})


function CryptoNav(props) {
  const muiTabStyled = muiTabStyles();
  const muiAppBarStyled = muiAppBarStyles();
  const muiPaperStyled = muiPaperStyles();
  const muiTabIndicated = muiTabIndicator();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
		// console.log(value);
  };

   useEffect(() => {
      const fetchData = async () => {
        console.log(props)
         await props.actions.getCryptos(1,10)
            .then(console.log(props))
            .catch(error => { alert("Som Tin Wong") })
         }
      fetchData()
    },[]);

    // const data = props.cryptos ? console.log(props.cryptos.data) : console.log('data no');
  return (
    <div>
    {
      console.log(props.cryptos)
    }
			<AppBar position="static">
			<div className="container">
				<Toolbar variant="dense">
						<Tabs
			        value={value}
			        onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
			      >
            {
              props.cryptos.length>0 ? (
                props.cryptos.map(crypto=>(
                  <Tab
                  key={crypto.id}
                  label={
                    <div>
                    {crypto.name}<br/>
                    <small style={{color:'#878787'}}>
                    ${crypto.quote.USD.price.toFixed(4)}
                    </small>
                    </div>
                  }
                  />
                ))
              ): (
                <>
                <Tab label="Please"/>
                <Tab label="Wait"/>
                <Tab label="While"/>
                <Tab label="Data"/>
                <Tab label="Loads"/>
                </>
              )
            }
			      </Tabs>
				</Toolbar>
			</div>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
   return {
      cryptos: state.cryptos
   }
}
function mapDispatchToProps(dispatch) {
   return {
      actions: bindActionCreators(actions, dispatch)
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(CryptoNav)




// <NavLink className="nav-link" to="/">Home</NavLink>
// <NavLink className="nav-link" to="/top/1/10">Top 100</NavLink>
