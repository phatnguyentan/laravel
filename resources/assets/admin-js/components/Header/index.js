import React from "react";
import "./styles.css";

class Header extends React.Component {
  render() {
    return (
      <div className="main-header bg-dark text-light">
        <div id="loading-progress" className="progress">
          <div
            className="progress-bar"
            role="progressbar"
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
