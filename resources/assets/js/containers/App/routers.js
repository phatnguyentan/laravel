import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../NotFound";
import ProductList from "../ProductList/product-list";
import ProductDetail from "../ProductDetail/product-detail";
import Home from "../Home/home";
import ProductListNew from "../ProductList/product-list-new";
import ProductListHot from "../ProductList/product-list-hot";
import ProductListCategory from "../ProductList/product-list-category";

class RoutersComponent extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path={"/"}
          render={props => <Home {...props} context={this.props} />}
        />
        <Route
          exact
          path={"/hang-moi"}
          render={props => <ProductListNew {...props} context={this.props} />}
        />
        <Route
          exact
          path={"/ban-chay"}
          render={props => <ProductListHot {...props} context={this.props} />}
        />
        <Route
          exact
          path={"/categories/:id"}
          render={props => (
            <ProductListCategory {...props} context={this.props} />
          )}
        />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
export default RoutersComponent;
