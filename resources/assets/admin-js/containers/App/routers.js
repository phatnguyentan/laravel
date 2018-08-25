import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PostList from "../../components/Post";
import PostDetail from "../../components/Post/detail";
import NotFound from "../NotFound";
import PostCreate from "../../components/Post/create";
import PostCategory from "../../components/Post/category";
import Login from "../../components/Login/Login";
import ProductList from "../../components/Product";
import ProductTypes from "../../components/ProductTypes";
import ProductCategory from "../../components/Product/category";
import MediaContainer from "../Media/MediaContainer";
import ProductCreateContainer from "../Product/ProductCreateContainer";

class RoutersComponent extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path={this.props.config.adminPrefix}
          render={props => <PostList {...props} context={this.props} />}
        />

        <Route
          exact
          path={this.props.config.adminPrefix + "/login"}
          render={props => <Login {...props} context={this.props} />}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/posts"}
          render={props => <PostList {...props} context={this.props} />}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/posts/create"}
          render={props => <PostCreate {...props} context={this.props} />}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/posts/:id"}
          render={props => <PostDetail {...props} context={this.props} />}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/post_categories"}
          render={props => <PostCategory {...props} context={this.props} />}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/products"}
          render={props => <ProductList {...props} context={this.props} />}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/products/create"}
          render={props => (
            <ProductCreateContainer {...props} context={this.props} />
          )}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/products/:id"}
          render={props => (
            <ProductDetailContainer {...props} context={this.props} />
          )}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/products_category"}
          render={props => <ProductCategory {...props} context={this.props} />}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/products_type"}
          render={props => <ProductTypes {...props} context={this.props} />}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/media"}
          render={props => <MediaContainer {...props} context={this.props} />}
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
export default RoutersComponent;
