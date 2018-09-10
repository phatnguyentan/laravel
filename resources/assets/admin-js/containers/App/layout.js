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
              <div className="app w-100">
                <Header
                  {...this.props}
                  context={{ api: api, config: config }}
                />
                <div className="main-body main-container">
                  <div className="row w-100">
                    <div
                      className="col-sm-2 bg-dark text-light left"
                      style={{ paddingLeft: "25px" }}
                    >
                      <MenuBasic
                        {...this.props}
                        context={{ api: api, config: config }}
                      />
                    </div>
                    <div className="col-sm-10 right p-3">
                      <RoutersComponent api={api} config={config} />
                    </div>
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
