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
          {[1, 2, 3, 4].map(e => {
            return (
              <div className="col-sm-6 pb-4">
                <div className="bg-light p-3 rounded">
                  <h4>Title Title Title Title Title</h4>
                  <img
                    className="w-100"
                    src="http://localhost:5050/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9045834602_55351506.400x400.jpg"
                    alt=""
                    style={{ width: "400px" }}
                  />
                  <p>
                    description description description description description
                    description description description description description
                    description description
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
