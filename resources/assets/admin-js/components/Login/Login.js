import React from "react";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logined: false };
  }
  handleSubmit(event) {
    const data = new FormData(event.target);
    this.props.context.api
      .post("/users/login", {
        email: data.get("username"),
        password: data.get("password")
      })
      .then(res => {
        this.props.cookies.set("jwt_admin", res.access_token, {
          path: "/"
        });
        this.props.context.api.setToken(this.props.cookies.get("jwt_admin"));
        this.setState({ logined: true });
      });
    event.preventDefault();
  }
  render() {
    if (this.state.logined) {
      return <Redirect to="/admin" />;
    }
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="container">
          <div className="form-group col-sm-12">
            <label>
              <b>Username</b>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              name="username"
              required
            />
          </div>
          <div className="form-group col-sm-12">
            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              name="password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    );
  }
}
Login.propTypes = {
  cookies: instanceOf(Cookies).isRequired
};
export default withCookies(Login);
