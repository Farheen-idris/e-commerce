import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Productlist from "./components/productList";
import Details from "./components/Details";
import Cart from "./components/cart";
import Defaults from "./components/default";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Productlist} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/default" component={Defaults} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
