import React from "react";
import "./styles.css";
import { instanceOf } from "prop-types";
import { Cookies, withCookies } from "react-cookie";

class Header extends React.Component {
  render() {
    let user;
    if (
      this.props.cookies.get("jwt_admin") &&
      this.props.cookies.get("jwt_admin") != ""
    ) {
      user = (
        <div className="dropdown">
          <button
            className="btn btn-secondary"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className="avatar">
              <img
                src={
                  this.props.context.config.imageDefaultUrl +
                  "/user_default.png"
                }
              />
            </div>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              className="dropdown-item"
              href="javascript:void(0);"
              onClick={e => {
                this.props.cookies.remove("jwt_admin", {
                  path: "/"
                });
                this.props.context.api.setToken(
                  this.props.cookies.get("jwt_admin")
                );
                window.location.replace("/admin/login");
              }}
            >
              Logout
            </a>
          </div>
        </div>
      );
    }
    return (
      <div className="main-header bg-dark">
        <div id="loading-progress" className="progress text-light">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          />
          Header
        </div>
        <div className="pull-right mr-3">{user}</div>
      </div>
    );
  }
}
Header.propTypes = {
  cookies: instanceOf(Cookies).isRequired
};
export default withCookies(Header);
