import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../NotFound";
import ProductList from "../ProductList/product-list";
import ProductDetail from "../ProductDetail/product-detail";
import Home from "../Home/home";

class RoutersComponent extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path={"/"}
          render={props => <Home {...props} context={this.props} />}
        />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
export default RoutersComponent;
