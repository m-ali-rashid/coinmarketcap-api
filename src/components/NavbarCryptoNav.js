import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../store/actions/getCryptos";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router-dom";
import * as styles from "./styles/NavStyles.js";

function CryptoNav(props) {
  // eslint-disable-next-line
  const muiTabStyled = styles.muiTabStyles();
  // eslint-disable-next-line
  const muiAppBarStyled = styles.muiAppBarStyles();
  // eslint-disable-next-line
  const muiPaperStyled = styles.muiPaperStyles();
  // eslint-disable-next-line
  const muiTabIndicated = styles.muiTabIndicator();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      await props.actions
        .getCryptos(1, 10)
        // .then(console.log(props))
        .catch((error) => {
          alert("Som Tin Wong");
        });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              {props.cryptos.length > 0 ? (
                props.cryptos.map((crypto) => (
                  <Tab
                    key={crypto.id}
                    label={
                      <div>
                        {crypto.name}
                        <br />
                        <small style={{ color: "#878787" }}>
                          ${crypto.quote.USD.price.toFixed(4)}
                        </small>
                      </div>
                    }
                    onClick={() => {
                      props.history.push(
                        `/redirectCurrencies/${crypto.symbol}`
                      );
                    }}
                  />
                ))
              ) : (
                <Tab label="Please" />
              )}
            </Tabs>
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    cryptos: state.cryptos,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CryptoNav)
);
