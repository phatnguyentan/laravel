import React, { Component } from "react";
import Slider from "../../components/Slider/slider";
import "./styles.css";
import Slider2 from "../../components/Slider/slider2";

class Home extends Component {
  componentWillMount() {
    // this.props.actions.getProducts();
  }

  render() {
    return (
      <div>
        <div className="bg-3">
          <Slider2 />
        </div>
        <div className="container bg-light">
          <div className="home-page">
            <Slider />
            <Slider />
            <Slider />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
