import React, { Component } from "react";

class ProductList extends Component {
  componentWillMount() {
    // this.props.actions.getProducts();
  }

  render() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
      <div className="flex row">
        {array.map((it, i) => (
          <div key={i.toString()} className="col-sm-3 pb-4">
            <div className="bg-light p-3 rounded">
              <img
                className="w-100"
                src="http://localhost:5050/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9029600796_1670322891.400x400.jpg"
                alt=""
                style={{ width: "200px", height: "300px" }}
              />
              <div className="row">
                <p className="col-sm-8">Áo Thun Nam / 0015488</p>
                <p className="col-sm-4">100k</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
