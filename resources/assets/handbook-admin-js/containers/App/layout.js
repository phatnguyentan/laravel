import React, { Component } from "react";
import Header from "../../components/Header/header";
import MenuBasic from "../../components/Menu/MenuBasic";
import RoutersComponent from "./routers";
import { ConfigContext, ApiContext } from "./contexts";

class Layout extends Component {
  render() {
    return (
      <ConfigContext.Consumer>
        {config => (
          <ApiContext.Consumer>
            {api => (
              <div className="app">
                <Header
                  className="app-header"
                  {...this.props}
                  context={{ api: api, config: config }}
                />
                <div className="app-body">
                  <div className="app-body-left">
                    <MenuBasic
                      {...this.props}
                      context={{ api: api, config: config }}
                    />
                  </div>
                  <div className="app-body-right">
                    <RoutersComponent className="app-body-left" api={api} config={config} />
                  </div>
                </div>
              </div>
            )}
          </ApiContext.Consumer>
        )}
      </ConfigContext.Consumer>
    );
  }
}
export default Layout;
