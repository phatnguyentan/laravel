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

class App extends Component {
  // static propTypes = {
  //   cookies: instanceOf(Cookies).isRequired
  // };
  constructor(props) {
    super(props);
    const { cookies } = props;
    Config.adminToken = cookies.get("jwt_admin");
  }
  render() {
    return (
      <div className="app w-100">
        <Header />
        <div className="main-body main-container">
          <div className="row w-100">
            <div className="col-sm-2 bg-dark text-light lelf">
              <MenuBasic />
            </div>
            <div className="col-sm-10 right p-3">
              <Switch>
                <Route exact path={Config.adminPrefix} component={PostList} />
                <Route
                  exact
                  path={Config.adminPrefix + "/login"}
                  component={Login}
                />
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
                  path={Config.adminPrefix + "/product_types"}
                  component={ProductTypes}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
App.propTypes = {
  cookies: instanceOf(Cookies).isRequired
};
export default withCookies(App);
