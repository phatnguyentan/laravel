import React, { Component } from "react";
import Slider from "../../components/Slider/slider";
import "./styles.css";
import SliderTable from "../../components/Slider/slider-table";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { banners: [], new_products: [], hot_products: [] };
  }
  componentWillMount() {
    this.props.context.api.get(`/layout/banners`).then(res => {
      this.setState({
        banners: res.data
      });
    });
    this.props.context.api.get(`/products?filter[where][new]=1`).then(res => {
      this.setState({
        new_products: res.data.map(d => d.image)
      });
    });
    this.props.context.api
      .get(`/products?filter[order][hot]=desc`)
      .then(res => {
        this.setState({ hot_products: res.data.map(d => d.image) });
      });
  }

  render() {
    return (
      <div>
        <div>
          <Slider objects={this.state.banners} />
        </div>
        <div className="container bg-light">
          <div className="home-page">
            <div className="title-box">
              <Link to="hang-moi">
                <h4 className="text-light p-3">HÀNG MỚI</h4>
              </Link>
            </div>
            <SliderTable objects={this.state.new_products} />
            <div className="title-box">
              <Link to="ban-chay">
                <h4 className="text-light p-3">BÁN CHẠY</h4>
              </Link>
            </div>
            <SliderTable objects={this.state.hot_products} />
            {/* <div className="title-box">
              <h4 className="text-light p-3">THÚ BÔNG</h4>
            </div>
            <SliderTable objects={this.state.banners} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
