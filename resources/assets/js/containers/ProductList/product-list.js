import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { objects: [] };
  }

  render() {
    return (
      <div className="container bg-light">
        <div className="flex row">
          {this.state.objects.map((ob, i) => (
            <div key={i.toString()} className="col-sm-3 pb-4">
              <div className="bg-light p-3 rounded text-dark">
                <Link to={"products/" + ob.id}>
                  <img
                    className="w-100"
                    src={ob.image}
                    alt=""
                    style={{ width: "200px", height: "300px" }}
                  />
                  <div className="row">
                    <p className="col-sm-8">{ob.name}</p>
                    <p className="col-sm-4">100k</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
