// import React from "react";
import React from "react";
import "./styles.css";

class MediaListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { objects: [{ id: 1 }, { id: 2 }] };
  }

  componentWillReceiveProps(props) {
    // this.setState({ mediaIsOpen: props.mediaIsOpen });
  }

  click(item) {
    item.selected = !item.selected;
    this.setState({ objects: this.state.objects });
  }

  render() {
    return (
      <ul className="media-display list-unstyled">
        {this.state.objects.map(i => {
          return (
            <li
              key={i.id}
              className={
                "m-2 clickable media media-display-item " +
                (i.selected ? "selected" : "")
              }
              onClick={this.click.bind(this, i)}
            >
              <i className="fa fa-check" />
              <img
                className="mr-3"
                src="https://via.placeholder.com/100x80"
                alt="Generic placeholder image"
              />
              <div className="media-body">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MediaListComponent;
