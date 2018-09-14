import React, { Component } from "react";
import Slider from "../../components/Slider/slider";
import "./styles.css";
import SliderTable from "../../components/Slider/slider-table";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { banners: [] };
  }
  componentWillMount() {
    this.props.context.api.get(`/layout/banners`).then(res => {
      this.setState({
        banners: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="bg-3">
          <Slider objects={this.state.banners} />
        </div>
        <div className="container bg-light">
          <div className="home-page">
            <div className="title-box">
              <h4 className="text-light p-3">HÀNG MỚI</h4>
            </div>
            <SliderTable objects={this.state.banners} />
            <div className="title-box">
              <h4 className="text-light p-3">BÁN CHẠY</h4>
            </div>
            <SliderTable objects={this.state.banners} />
            <div className="title-box">
              <h4 className="text-light p-3">THÚ BÔNG</h4>
            </div>
            <SliderTable objects={this.state.banners} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
