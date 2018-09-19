import React, { Component } from "react";
import "./styles.css";

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1, objects: [{ id: 1 }, { id: 2 }] };
  }
  componentWillMount() {
    // this.props.actions.getProducts();
  }

  descreaseValue() {
    this.setState({ count: Math.max(0, this.state.count - 1) });
  }
  increaseValue() {
    this.setState({ count: this.state.count + 1 });
  }
  onChange() {
    console.log("increase");
  }

  onClick(objects, i) {
    objects = objects.map(o => {
      o.selected = false;
      return o;
    });
    objects[i].selected = true;
    this.setState({ objects: objects });
  }

  render() {
    return (
      <div className="container bg-light">
        <div className="row">
          <div className="col-sm-4">
            <img
              className="w-100"
              src="http://localhost:5050/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9029600796_1670322891.400x400.jpg"
              alt=""
              style={{ width: "200px", height: "300px" }}
            />
          </div>
          <div className="col-sm-8">
            <h4>Thú Bông Kỳ Lân</h4>
            <h4>Phân loại hàng:</h4>
            <div className="d-flex flex-wrap media-display">
              {this.state.objects.map((e, i) => {
                let selected = e.selected ? "selected" : "";
                return (
                  <div
                    key={i}
                    onClick={this.onClick.bind(this, this.state.objects, i)}
                    className={
                      "btn btn-outline-secondary p-3 media media-display-item " +
                      selected
                    }
                  >
                    <i className="fa fa-check" />
                    Trắng - 30cm
                  </div>
                );
              })}
            </div>
            <h4>Số lượng:</h4>
            <div className="row font-size-28">
              <div
                id="decrease"
                className="value-button"
                onClick={this.descreaseValue.bind(this)}
                value="Decrease Value"
              >
                -
              </div>
              <input
                type="number"
                id="number"
                className="font-size-18"
                value={this.state.count}
                onChange={this.onChange.bind(this)}
              />
              <div
                className="value-button"
                id="increase"
                onClick={this.increaseValue.bind(this)}
                value="Increase Value"
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
