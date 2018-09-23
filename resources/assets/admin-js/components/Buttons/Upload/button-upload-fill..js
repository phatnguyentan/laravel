import React, { Component } from "react";

export class ButtonUploadFill extends Component {
  render() {
    return (
      <button
        type="button"
        className="btn btn-default"
        onClick={this.props.addClick}
      >
        <i className="fa fa-plus-circle" />
      </button>
    );
  }
}
