import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { NotFound, Home, ProductList } from "../";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer";

class App extends Component {
  render() {
    return (
      <div className="app bg-dark-1">
        <Header />
        <div className="container mt-4">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={ProductList} />
            <Route component={NotFound} />
          </Switch>
        </div>
        {/* footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
