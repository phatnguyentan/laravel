import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }
  componentWillMount() {
    this.props.context.api
      .get(`/categories?filter[where][type]=product`)
      .then(res => {
        this.setState({ categories: res.data });
      });
  }

  render() {
    return (
      <header className="main-header bg-dark">
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
        <div className="pull-right mr-3">User</div>
      </header>
    );
  }
}
