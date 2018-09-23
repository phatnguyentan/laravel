import React from "react";
import "./styles.css";

export default class Slider extends React.Component {
  componentWillMount() {
    // this.props.actions.getProducts();
  }

  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide container p-3"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <table className="table">
              <tbody>
                <tr>
                  <td className="border-top-0">
                    <img
                      className="w-100"
                      src="http://localhost:5050/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8991786664_1670322891.400x400.jpg"
                      alt="First slide"
                      style={{ height: "341px", width: "1140px" }}
                    />
                  </td>
                  <td className="border-top-0">
                    <img
                      className="w-100"
                      src="http://localhost:5050/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8991786664_1670322891.400x400.jpg"
                      alt="First slide"
                      style={{ height: "341px", width: "1140px" }}
                    />
                  </td>
                  <td className="border-top-0">
                    <img
                      className="w-100"
                      src="http://localhost:5050/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8991786664_1670322891.400x400.jpg"
                      alt="First slide"
                      style={{ height: "341px", width: "1140px" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {[1, 2, 3].map(e => {
            return (
              <div key={e} className="carousel-item">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="border-top-0">
                        <img
                          className="w-100"
                          src="http://localhost:5050/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8991786664_1670322891.400x400.jpg"
                          alt="First slide"
                          style={{ height: "341px", width: "1140px" }}
                        />
                      </td>
                      <td className="border-top-0">
                        <img
                          className="w-100"
                          src="http://localhost:5050/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8991786664_1670322891.400x400.jpg"
                          alt="First slide"
                          style={{ height: "341px", width: "1140px" }}
                        />
                      </td>
                      <td className="border-top-0">
                        <img
                          className="w-100"
                          src="http://localhost:5050/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8991786664_1670322891.400x400.jpg"
                          alt="First slide"
                          style={{ height: "341px", width: "1140px" }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}