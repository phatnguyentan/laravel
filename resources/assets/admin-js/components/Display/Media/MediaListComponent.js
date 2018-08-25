// import React from "react";
import React from "react";
import "./styles.css";

class MediaListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { objects: props.objects || [] };
  }

  componentWillReceiveProps(props) {
    this.setState({ objects: props.objects });
  }

  click(item) {
    item.selected = !item.selected;
    this.setState({ objects: this.state.objects });
  }

  render() {
    return (
      <ul className="media-display list-unstyled">
        {this.state.objects.map(object => {
          return (
            <li
              key={object.id}
              className={
                "m-2 clickable media media-display-item " +
                (object.selected ? "selected" : "")
              }
              onClick={this.click.bind(this, object)}
            >
              <i className="fa fa-check" />
              <img
                className="mr-3"
                style={{ maxHeight: "50px" }}
                src={object.url}
                alt="Generic placeholder image"
              />
              <div className="media-body">
                <h5 className="mt-0 mb-1">{object.name}</h5>
                {object.size}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MediaListComponent;
