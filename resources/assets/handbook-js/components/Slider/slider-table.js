import React from "react";
import "./styles.css";

export default class SliderTable extends React.Component {
  constructor(props) {
    super(props);
    this.uuid = "slider" + Date.now();
    this.state = { column: 3, row: 1, count: 0, objects: [] };
  }
  componentWillMount() {
    this.rate = this.state.column * this.state.row;
    this.setState({
      objects: this.props.objects
    });
  }

  render() {
    if (this.props.objects.length > 0)
      return (
        <div
          id={this.uuid}
          className="carousel slide container p-3"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            {Array(Math.ceil(this.props.objects.length / this.rate))
              .fill()
              .map((o, i) => {
                let active = i == 0 ? "active" : "";
                return (
                  <li
                    key={i + "ol"}
                    data-target={"#" + this.uuid}
                    data-slide-to={i}
                    className={active}
                  />
                );
              })}
          </ol>
          <div className="carousel-inner">
            {Array(Math.ceil(this.props.objects.length / this.rate))
              .fill()
              .map((o, i) => {
                let active = i == 0 ? "active" : "";
                return (
                  <div key={i + "table"} className={"carousel-item " + active}>
                    <table className="d-block table">
                      <tbody>
                        <tr>
                          {Array(this.state.column)
                            .fill()
                            .map((c, j) => {
                              let image = this.props.objects[
                                this.state.column * i + j
                              ] ? (
                                <img
                                  className="w-100"
                                  src={
                                    this.props.objects[
                                      this.state.column * i + j
                                    ]
                                  }
                                  style={{ height: "341px" }}
                                />
                              ) : (
                                <div style={{ width: "320px" }} />
                              );
                              return (
                                <td key={j + "tr"} className="border-top-0">
                                  {image}
                                </td>
                              );
                            })}
                        </tr>
                      </tbody>
                    </table>
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
    return <div />;
  }
}
