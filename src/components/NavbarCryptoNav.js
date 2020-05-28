import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../store/actions/getCryptos'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter } from 'react-router-dom';
import * as styles from  './styles/NavStyles.js'

function CryptoNav(props) {
  const muiTabStyled = styles.muiTabStyles();
  const muiAppBarStyled = styles.muiAppBarStyles();
  const muiPaperStyled = styles.muiPaperStyles();
  const muiTabIndicated = styles.muiTabIndicator();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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

  return (
    <div>
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
                  onClick={()=>{props.history.push(`/redirectCurrencies/${crypto.symbol}`)}}
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
{/*
      <AppBar position="static">
      <div className="container">
        <Toolbar variant="dense">
            <Tabs
            value={value}
            textColor="primary"
            onChange={handleChange}
            aria-label="simple tabs example"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            centered
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
                  onClick={()=>{props.history.push(`/redirectCurrencies/${crypto.symbol}`)}}
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
      */}
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
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CryptoNav))
