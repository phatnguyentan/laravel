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
import RoutersComponent from "./routers";
import Layout from "./layout";
import { ConfigContext, ApiContext } from "./contexts";
import ApiService from "../../services/v1/api-service";

class App extends Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    Config.adminToken = cookies.get("jwt_admin");
    this.api = new ApiService(cookies.get("jwt_admin"));
  }
  render() {
    return (
      <ConfigContext.Provider value={this.props.cookies.get("jwt_admin")}>
        <ApiContext.Provider value={this.api}>
          <Layout />
        </ApiContext.Provider>
      </ConfigContext.Provider>
    );
  }
}
App.propTypes = {
  cookies: instanceOf(Cookies).isRequired
};
export default withCookies(App);
