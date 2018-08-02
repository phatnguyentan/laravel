import React, { Component } from "react";
import { Slider } from "../../components";

class Home extends Component {
  componentWillMount() {
    // this.props.actions.getProducts();
  }

  render() {
    return (
      <div>
        <Slider />
        <div className="flex row">
          <div className="col-sm-6 pb-4">
            <div className="bg-light p-3 rounded">
              <h4>Title Title Title Title Title</h4>
              <img
                className="w-100"
                src="http://via.placeholder.com/400x300"
                alt=""
              />
              <p>
                description description description description description
                description description description description description
                description description
              </p>
            </div>
          </div>
          <div className="col-sm-6 pb-4">
            <div className="bg-light p-3 rounded">
              <h4>Title Title Title Title Title</h4>
              <img
                className="w-100"
                src="http://via.placeholder.com/400x300"
                alt=""
              />
              <p>
                description description description description description
                description description description description description
                description description
              </p>
            </div>
          </div>
          <div className="col-sm-6 pb-4">
            <div className="bg-light p-3 rounded">
              <h4>Title Title Title Title Title</h4>
              <img
                className="w-100"
                src="http://via.placeholder.com/400x300"
                alt=""
              />
              <p>
                description description description description description
                description description description description description
                description description
              </p>
            </div>
          </div>
          <div className="col-sm-6 pb-4">
            <div className="bg-light p-3 rounded">
              <h4>Title Title Title Title Title</h4>
              <img
                className="w-100"
                src="http://via.placeholder.com/400x300"
                alt=""
              />
              <p>
                description description description description description
                description description description description description
                description description
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
