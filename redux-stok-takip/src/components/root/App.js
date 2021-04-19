import React, { Component } from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import {Switch, Route} from "react-router-dom"
import CartDetails from "../carts/CartDetails";

class App extends Component {
  render() {
    return (
      <Container>
        <Navi />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/cart" exact component={CartDetails} />
        </Switch>
      </Container>
    );
  }
}

export default App;
