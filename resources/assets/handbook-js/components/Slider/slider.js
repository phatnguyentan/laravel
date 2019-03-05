import React from "react";
import "./styles.css";

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.uuid = "slider" + Date.now();
  }
  componentWillMount() {
    console.log(this.uuid);
  }

  render() {
    return (
      <div
        id={this.uuid}
        className="carousel container slide p-0"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {this.props.objects.map((o, i) => {
            return (
              <li
                key={i}
                data-target={"#" + this.uuid}
                data-slide-to={i}
                className="active"
              />
            );
          })}
        </ol>
        <div className="carousel-inner">
          {this.props.objects.map((o, i) => {
            let active = i == 0 ? "active" : "";
            return (
              <div key={i} className={"carousel-item " + active}>
                <img
                  className={"w-100 "}
                  src={o}
                  alt="First slide"
                  style={{ height: "341px", width: "1140px" }}
                />
              </div>
            );
          })}
        </div>
        <a
          className="carousel-control-prev"
          href={"#" + this.uuid}
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href={"#" + this.uuid}
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
