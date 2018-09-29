import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer, ToastStore } from "react-toasts";
import { relative } from "path";
import PageNavigation from "../../Navigation/PageNavigation";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
export default class BaseGridSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
  }

  render() {
    return (
      <div>
        <div className="bg-light">
          <div className="flex row media-display">
            {this.props.objects.map((ob, i) => (
              <div
                key={i.toString()}
                className={
                  "col-2 pb-1 media-display-item " +
                  (ob.selected ? "selected" : "")
                }
                style={{ wordWrap: "break-word" }}
              >
                {/* <div className="bg-light p-3 rounded text-dark"> */}
                <div
                  className="clickable"
                  onClick={this.props.onSelect.bind(this, ob)}
                >
                  <i className="fa fa-check" />
                  <img
                    className="w-100"
                    src={ob.url}
                    alt=""
                    style={{
                      width: "100%",
                      height: "200px"
                    }}
                  />
                  <p>{ob.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
