import React, { Component } from "react";
import Header from "../../components/Header/index";
import MenuBasic from "../../components/Menu/MenuBasic";
import { Route, Switch } from "react-router-dom";
import PostList from "../../components/Post";
import NotFound from "../NotFound";
import { Config } from "../../config/config";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="main-body">
          <div className="row">
            <div className="col-sm">
              <MenuBasic />
            </div>
            <div className="col-sm">
              <Switch>
                {/* <Route exact path="/" component={Home} /> */}
                <Route exact path="/admin/posts" component={PostList} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
        {/* <div className="container mt-4">
          <Switch>
            <Route exact path="/admin/posts" component={PostList} />
            <Route component={NotFound} />
          </Switch>
        </div> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
