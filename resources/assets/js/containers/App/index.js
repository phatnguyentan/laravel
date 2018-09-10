import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { NotFound, Home, ProductList } from "../";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider/slider";
import Slider2 from "../../components/Slider/slider2";

class App extends Component {
  render() {
    return (
      <div className="app bg-2">
        <Header />
        <div className="bg-3">
          <Slider2 />
        </div>
        <div className="container mt-4 bg-light">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={ProductList} />
            <Route component={NotFound} />
          </Switch>
        </div>
        {/* footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
