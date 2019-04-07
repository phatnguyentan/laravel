import "react-quill/dist/quill.snow.css";
import React from "react";
import ReactQuill from "react-quill";
import { ToastContainer, ToastStore } from "react-toasts";
import MediaUploadModalComponent from "../Media/MediaUploadModalComponent";

class ProductCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      object: {},
      title: "",
      body: "",
      categories: [],
      category_id: 0,
      mediaIsOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  openMedia() {
    this.setState({ mediaIsOpen: true });
  }
  componentDidMount() {
    this.props.context.api
      .get(`/categories?filter[where][type]=product`)
      .then(res => {
        this.setState({
          categories: res.data,
          category_id: this.state.object.category_id || 0
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
        <label className="col-sm-2 control-label">Name</label>
        <div className="col-sm-10">
          <input
            name="name"
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
            className="form-control"
            placeholder="Title"
          />
        </div>
        <div className="mt-3 mb-3">
          <label className="col-sm-2 control-label">Description</label>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.openMedia.bind(this)}
          >
            Media
          </button>
          <div className="col-sm-10">
            <ReactQuill
              theme="snow"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <label className="col-sm-2 control-label">Category</label>
        <div className="col-sm-2">
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
        <button type="submit" className="btn btn-default m-3">
          Save
        </button>
        <ToastContainer
          position={ToastContainer.POSITION.TOP_CENTER}
          store={ToastStore}
        />
        <MediaUploadModalComponent
          {...this.props}
          mediaIsOpen={this.state.mediaIsOpen}
        />
      </form>
    );
  }
}

export default ProductCreate;
