import React from "react";
import { Link, Redirect } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import debounce from "debounce";
import { ToastContainer, ToastStore } from "react-toasts";
import MediaUploadModalContainer from "../Media/MediaUploadModalContainer";

class PostDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      object: {},
      title: "",
      body: "",
      published: false,
      categories: [],
      category_id: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.context.api
      .get(`/posts/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          object: res.data
        });
        this.setState({ ...this.state, ...res.data });
        this.props.context.api
          .get(`/categories?filter[where][type]=post`)
          .then(res => {
            this.setState({
              categories: res.data,
              category_id: this.state.object.category_id || 0
            });
          });
      });
  }

  handleChange(value) {
    this.setState({ body: value });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSelectChange(event) {
    this.setState({ category_id: event.target.value });
  }

  openMedia() {
    this.setState({ mediaIsOpen: true });
  }

  onInsert(objects) {
    let strImage = "";
    objects.forEach(ob => {
      strImage += '<img src="' + ob.url + '">';
    });
    this.setState({ body: this.state.body + strImage, mediaIsOpen: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.context.api
      .put(`/posts/` + this.state.object.id, this.state)
      .then(res => {
        this.setState({ object: res.data });
        ToastStore.success("You just update");
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="col-sm-10 control-label">Title</label>
        <div className="col-sm-10">
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
            className="form-control"
            placeholder="Title"
          />
        </div>
        <div className="mt-3 mb-3">
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={this.openMedia.bind(this)}
          >
            <i className="fa fa-plus-circle m-1" />
            Media
          </button>
          <label className="col-sm-10 control-label">Content</label>
          <div className="col-sm-10">
            <ReactQuill
              theme="snow"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <label className="col-sm-10 control-label">Category</label>
        <div className="col-sm-10">
          <select
            className="form-control"
            name="category_id"
            value={this.state.category_id}
            onChange={this.handleSelectChange}
          >
            <option>Select Category</option>
            {this.state.categories.map(c => {
              return (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <input
            id="published"
            className="checkbox-input m-3"
            type="checkbox"
            checked={this.state.published}
            onChange={e => {
              this.setState({ published: !this.state.published });
            }}
          />
          <label htmlFor="published" className="clickable form-check-label">
            Published
          </label>
        </div>
        <button type="submit" className="btn btn-default m-3">
          Save
        </button>
        <ToastContainer
          position={ToastContainer.POSITION.TOP_CENTER}
          store={ToastStore}
        />
        <MediaUploadModalContainer
          {...this.props}
          mediaIsOpen={this.state.mediaIsOpen}
          onInsert={this.onInsert.bind(this)}
        />
      </form>
    );
  }
}

export default PostDetailContainer;
