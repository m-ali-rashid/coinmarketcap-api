import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import NavbarCryptoNav from "./components/NavbarCryptoNav.js";
import Home from "./components/Home.js";
import Redirect from "./components/Redirect.js";
import RedirectCurrencies from "./components/RedirectCurrencies.js";
import Crypto from "./components/Crypto.js";
import Currencies from "./components/Currencies.js";
import "./components/styles/Navbar.css";

function App() {
  return (
    <BrowserRouter>
      <NavbarCryptoNav />
      <Navbar />
      <div className="container my-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/top/:page/:limit" component={Crypto} />
          <Route path="/redirect" component={Redirect} />
          <Route
            path="/redirectCurrencies/:currency"
            component={RedirectCurrencies}
          />
          <Route path="/currencies/:coin" component={Currencies} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
