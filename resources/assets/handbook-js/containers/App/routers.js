import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../NotFound";
import Home from "../Home/home";
import HandbookDetail from "../Handbook/handbook-detail";

class RoutersComponent extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path={"/handbook"}
          render={props => <Home {...props} context={this.props} />}
        />
        <Route
          exact
          path={"/handbook/detail"}
          render={props => <HandbookDetail {...props} context={this.props} />}
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
export default RoutersComponent;
