import React, { Component } from "react";
import Header from "../../components/Header/index";
import MenuBasic from "../../components/Menu/MenuBasic";
import RoutersComponent from "./routers";
import { ConfigContext, ApiContext } from "./contexts";

class Layout extends Component {
  render() {
    return (
      <ApiContext.Consumer>
        {apiContext => (
          <div className="app w-100">
            <Header />
            <div className="main-body main-container">
              <div className="row w-100">
                <div
                  className="col-sm-2 bg-dark text-light lelf"
                  style={{ paddingLeft: "25px" }}
                >
                  <MenuBasic />
                </div>
                <div className="col-sm-10 right p-3">
                  <RoutersComponent apiContext={apiContext} />
                </div>
              </div>
            </div>
          </div>
        )}
      </ApiContext.Consumer>
    );
  }
}
export default Layout;
