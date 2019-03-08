import React, { Component } from "react";
import "./styles.css";
import { Calendar } from "primereact/calendar";
import { Editor } from "primereact/editor";
import Quill from "quill";
import data from "./data.json";

export default class HandbookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.modules = {
      toolbar: [
        // [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [
          { list: "ordered" },
          { list: "bullet" },
          { list: "check" },
          { indent: "-1" },
          { indent: "+1" }
        ],
        // [{ size: [1, 2] }],
        [{ script: "sub" }, { script: "super" }],
        ["link", "image"],
        ["clean"]
      ]
    };
  }

  componentDidMount() {
    var Size = Quill.import("attributors/style/size");
    Size.whitelist = ["small", "large", "huge"];
    Quill.register(Size, true);
    var quill = new Quill("#editor", {
      theme: "snow",
      modules: this.modules
    });
    quill.container.firstChild.innerHTML = data.text;
    quill.on("text-change", function(delta, oldDelta, source) {
      console.log(quill.container.firstChild.innerHTML);
    });
  }

  componentWillMount() {}

  handleChange() {}

  render() {
    return (
      <div className="main-body">
        <Calendar
          value={this.state.date}
          onChange={e => this.setState({ date: e.value })}
        />
        <div id="editor" />
        <div>
          <h4>Daily Routine</h4>
          <h5>Morning:</h5>
          <p>Make the beds</p>
          <p>Make the beds</p>
          <h5>Afternoon:</h5>
          <p>Working</p>
          <p>Working</p>
          <h5>Everning:</h5>
          <p>Diner</p>
          <p>Diner</p>
        </div>
      </div>
    );
  }
}
