import "react-quill/dist/quill.snow.css";
import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "./styles.css";
import { ToastContainer, ToastStore } from "react-toasts";
import MediaUploadModalContainer from "../Media/MediaUploadModalContainer";
import ImageResize from "quill-image-resize-module";
Quill.register("modules/imageResize", ImageResize);
const quillModules = {
  imageResize: {}
};
class ProductCreateContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      object: {},
      name: "",
      description: "",
      media: "",
      categories: [],
      category_id: 0,
      published: false,
      new: true,
      hot: 3,
      mediaIsOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  openPostMedia() {
    this.setState({ mediaIsOpen: true, insertMedia: false });
  }
  openMediaMedia() {
    this.setState({ mediaIsOpen: true, insertMedia: true });
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
    this.setState({ description: value });
  }

  handleMediaChange(value) {
    this.setState({ media: value });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.context.api.post(`/products`, this.state).then(res => {
      this.props.history.push("/admin/products/" + res.data.id);
    });
  }

  onInsert(objects) {
    let strImage = "";
    objects.forEach(ob => {
      strImage += '<img src="' + ob.url + '">';
    });
    if (this.state.insertMedia) {
      this.setState({
        media: this.state.media + strImage,
        mediaIsOpen: false
      });
    } else {
      this.setState({
        description: this.state.description + strImage,
        mediaIsOpen: false
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit" className="pull-right btn btn-primary m-3">
          Save
        </button>
        <div className="form-group">
          <div className="col-sm-10">
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange.bind(this)}
              className="form-control"
              placeholder="Product Name"
            />
          </div>
        </div>
        <div className="form-group mt-3 mb-3">
          <button
            type="button"
            className="btn btn-default m-1"
            onClick={this.openMediaMedia.bind(this)}
          >
            <i className="fa fa-plus-circle m-1" />
            Media
          </button>
          <label className="col-sm-6 control-label">
            Media (Only Photos and Videos)
          </label>
          <div className="col-sm-12">
            <ReactQuill
              modules={quillModules}
              theme="snow"
              value={this.state.media}
              onChange={this.handleMediaChange.bind(this)}
            />
          </div>
        </div>
        <div className="form-group mt-3 mb-3">
          <button
            type="button"
            className="btn btn-default m-1"
            onClick={this.openPostMedia.bind(this)}
          >
            <i className="fa fa-plus-circle m-1" />
            Media
          </button>
          <label className="col-sm-2 control-label">Description</label>
          <div className="col-sm-12">
            <ReactQuill
              modules={quillModules}
              theme="snow"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group col-md-6">
          {/* <label className="col-sm-6 control-label">Category</label> */}
          <div className="col-sm-6">
            <select
              className="form-control"
              name="category_id"
              value={this.state.category_id || 0}
              onChange={this.handleInputChange.bind(this)}
            >
              <option value="0">Select Category</option>
              {this.state.categories.map(c => {
                return (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                );
              })}
            </select>
          </div>
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
        <div className="form-group">
          <input
            id="new"
            className="checkbox-input m-3"
            type="checkbox"
            checked={this.state.new}
            onChange={e => {
              this.setState({ new: !this.state.new });
            }}
          />
          <label htmlFor="new" className="clickable form-check-label">
            New
          </label>
        </div>
        <div className="form-group col-md-6">
          <label className="col-sm-6 control-label">Hot</label>
          <div className="col-sm-6">
            <select
              className="form-control"
              name="hot"
              value={this.state.hot || 3}
              onChange={this.handleInputChange.bind(this)}
            >
              <option value="0">Select Category</option>
              {[1, 2, 3, 4, 5].map(c => {
                return (
                  <option key={c} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <button type="submit" className="pull-right btn btn-primary m-3">
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

export default ProductCreateContainer;
