import React, { Component } from "react";
import { Config } from "../../config/config";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import Layout from "./layout";
import { ConfigContext, ApiContext } from "./contexts";
import ApiService from "../../services/v1/api-service";
import { LoadingHook } from "../../core/hooks/api/LoadingHook";

class App extends Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.config = new Config();
    this.api = new ApiService();
    this.api.setConfig(this.config);
    this.api.setToken(cookies.get("jwt_admin"));
    this.api.addHooks(new LoadingHook());
  }
  render() {
    return (
      <ConfigContext.Provider value={this.config}>
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
