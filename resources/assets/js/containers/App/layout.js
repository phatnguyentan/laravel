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
              <div className="app bg-2">
                <Header />
                <RoutersComponent api={api} config={config} />
                <Footer />
              </div>
            )}
          </ApiContext.Consumer>
        )}
      </ConfigContext.Consumer>
    );
  }
}
export default Layout;
