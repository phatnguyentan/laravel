// import React from "react";
import React from "react";
import ApiService from "../../services/api-service";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { Config } from "../../config/config";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logined: false };
  }
  handleSubmit(event) {
    const data = new FormData(event.target);
    ApiService.post("/users/login", {
      email: data.get("username"),
      password: data.get("password")
    }).then(res => {
      this.props.cookies.set("jwt_admin", res.access_token, {
        path: "/"
      });
      Config.adminToken = this.props.cookies.get("jwt_admin");
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
        <div className="imgcontainer">
          <img src="img_avatar2.png" alt="Avatar" className="avatar" />
        </div>
        <div className="container">
          <label>
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          />

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
          <button type="submit">Login</button>
        </div>
      </form>
    );
  }
}
Login.propTypes = {
  cookies: instanceOf(Cookies).isRequired
};
export default withCookies(Login);
