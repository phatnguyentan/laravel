import React, { Component } from "react";
import Header from "../../components/Header/index";
import MenuBasic from "../../components/Menu/MenuBasic";
import { Route, Switch } from "react-router-dom";
import PostList from "../../components/Post";
import PostDetail from "../../components/Post/detail";
import NotFound from "../NotFound";
import { Config } from "../../config/config";
import PostCreate from "../../components/Post/create";
import PostCategory from "../../components/Post/category";
import Login from "../../components/Login/Login";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import ProductList from "../../components/Product";
import ProductTypes from "../../components/ProductTypes";
import ProductDetail from "../../components/Product/detail";
import ProductCreate from "../../components/Product/create";
import ProductCategory from "../../components/Product/category";
import Media from "../Media";
import { AdminContext } from "./contexts";

class RoutersComponent extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path={Config.adminPrefix}
          render={() => (
            <PostList apiContext={this.props.apiContext}> </PostList>
          )}
        />

        {/* <Route exact path={Config.adminPrefix} component={PostList} /> */}
        <Route exact path={Config.adminPrefix + "/login"} component={Login} />
        <Route
          exact
          path={Config.adminPrefix + "/posts"}
          component={PostList}
        />
        <Route
          exact
          path={Config.adminPrefix + "/posts/create"}
          component={PostCreate}
        />
        <Route
          exact
          path={Config.adminPrefix + "/posts/:id"}
          component={PostDetail}
        />
        <Route
          exact
          path={Config.adminPrefix + "/post_categories"}
          component={PostCategory}
        />
        <Route
          exact
          path={Config.adminPrefix + "/products"}
          component={ProductList}
        />
        <Route
          exact
          path={Config.adminPrefix + "/products/create"}
          component={ProductCreate}
        />
        <Route
          exact
          path={Config.adminPrefix + "/products/:id"}
          component={ProductDetail}
        />
        <Route
          exact
          path={Config.adminPrefix + "/product_categories"}
          component={ProductCategory}
        />
        <Route
          exact
          path={Config.adminPrefix + "/product_types"}
          component={ProductTypes}
        />
        <Route exact path={Config.adminPrefix + "/media"} component={Media} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
export default RoutersComponent;
