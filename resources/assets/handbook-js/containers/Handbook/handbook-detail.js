import React, { Component } from "react";
import "./styles.css";
import { Calendar } from "primereact/calendar";
import { Editor } from "primereact/editor";
import ReactQuill from "react-quill";
// import Quill from "quill";
import QuillInstance from "quill-task-list";

export default class HandbookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.modules = {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" }
        ],
        ["link", "image"],
        ["clean"],
        ["task-list"]
      ],
      "task-list": true
    };
  }

  componentDidMount() {
    var quill = new QuillInstance("#editor", {
      theme: "snow",
      modules: this.modules
    });
  }

  componentWillMount() {
    // this.props.actions.getProducts();
    // var quill = new Quill("#editor", {
    //   theme: "snow"
    // });
  }

  render() {
    return (
      <div className="main-body">
        <Calendar
          value={this.state.date}
          onChange={e => this.setState({ date: e.value })}
        />
        {/* <Editor
          style={{ height: "320px" }}
          value={this.state.text}
          onTextChange={e => this.setState({ text: e.htmlValue })}
          // headerTemplate={header}
        /> */}
        {/* <ReactQuill theme="snow" modules={this.modules} /> */}
        <div id="editor">
          <p>Hello World!</p>
          <p>
            Some initial <strong>bold</strong> text
          </p>
        </div>
      </div>
    );
  }
}
