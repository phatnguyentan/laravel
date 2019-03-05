import React, { Component } from "react";
import Header from "../../components/Header/header";
import RoutersComponent from "./routers";
import { ConfigContext, ApiContext } from "./contexts";
import Footer from "../../components/Footer";

class Layout extends Component {
  render() {
    return (
      <ConfigContext.Consumer>
        {config => (
          <ApiContext.Consumer>
            {api => (
              <div className="app w-100">
                <Header context={{ api: api, config: config }} />
                <RoutersComponent api={api} config={config} />
                {/* <Footer /> */}
              </div>
            )}
          </ApiContext.Consumer>
        )}
      </ConfigContext.Consumer>
    );
  }
}
export default Layout;
