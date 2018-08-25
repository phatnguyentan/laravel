import React from "react";
import "./styles.css";

class Header extends React.Component {
  render() {
    return (
      <div className="main-header bg-dark text-light">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "25%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        Header
      </div>
    );
  }
}

export default Header;
