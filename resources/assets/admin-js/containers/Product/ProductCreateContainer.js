import "react-quill/dist/quill.snow.css";
import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "./styles.css";
import { ToastContainer, ToastStore } from "react-toasts";
import MediaUploadModalContainer from "../Media/MediaUploadModalContainer";
import ImageResize from "quill-image-resize-module";
import { ButtonUploadFill } from "../../components/Buttons/Upload/button-upload-fill.";
import ProductTypesCreate from "../../components/ProductTypes/create";
Quill.register("modules/imageResize", ImageResize);
class ProductCreateContainer extends React.Component {
  constructor(props) {
    super(props);
    this.quillModules = {
      toolbar: {
        container: [
          ["bold", "italic", "underline", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["formula", "link", "image"],
          ["clean"]
        ],
        handlers: { image: this.openProductMedia.bind(this) }
      },
      imageResize: {}
    };
    this.state = {
      object: {},
      name: "",
      description: "",
      media: [],
      categories: [],
      category_id: 0,
      published: false,
      new: true,
      hot: 3,
      product_types: [{ description: "1 - Sản phẩm" }],
      product_type: {},
      modalTypeIsOpen: false,
      mediaIsOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openProductMedia() {
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
    let media = this.state.media || [];
    media = [...objects, ...media];
    if (this.state.insertMedia) {
      this.setState({
        media: media,
        mediaIsOpen: false
      });
    } else {
      this.setState({
        // description: media,
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
        <div className="container">
          <div className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview-pic tab-content">
                    <button
                      type="button"
                      className="btn-upload w-100 h-100 mh-20"
                      onClick={this.openMediaMedia.bind(this)}
                    >
                      <i className="fa fa-plus-circle m-1" />
                      Image
                    </button>
                  </div>
                  <ul className="preview-thumbnail nav nav-tabs no-gutters media-display">
                    {this.state.media.map((e, i) => {
                      return (
                        <li key={i} className="col-3 removeable">
                          <i
                            className="fa fa-close clickable"
                            onClick={e => {
                              this.setState({
                                media: this.state.media.filter(
                                  (m, j) => i !== j
                                )
                              });
                            }}
                          />
                          <img className="w-100" src={e.url} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="details col-md-6">
                  <div className="form-group">
                    <div>
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
                  <div className="rating">
                    <div className="stars">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star-o" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label m-1">Description</label>
                    <div className="">
                      <ReactQuill
                        modules={this.quillModules}
                        theme="snow"
                        value={this.state.description}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <label className="control-label m-1">Product Types</label>
                  <div className="form-group">
                    <ProductTypesCreate
                      product_type={this.state.product_type}
                      modalIsOpen={this.state.modalTypeIsOpen}
                      closeModal={e => {
                        this.setState({ modalTypeIsOpen: false });
                      }}
                      afterOpen={e => {
                        // this.setState({ modalTypeIsOpen: false });
                      }}
                    />
                    <button
                      className="btn btn-default m-1"
                      type="button"
                      onClick={e => {
                        this.setState({
                          modalTypeIsOpen: true,
                          product_type: {}
                        });
                      }}
                    >
                      <i className="fa fa-plus" />
                    </button>
                    {this.state.product_types.map((e, i) => {
                      return (
                        <button
                          key={i}
                          className="btn btn-default"
                          type="button"
                          onClick={e => {
                            this.setState({
                              modalTypeIsOpen: true,
                              product_type: this.state.product_types[i]
                            });
                          }}
                        >
                          {e.description}
                        </button>
                      );
                    })}
                  </div>
                  <p className="vote">
                    <strong>91%</strong> of buyers enjoyed this product!{" "}
                    <strong>(87 votes)</strong>
                  </p>
                  <div className="action">
                    <button
                      className="add-to-cart btn btn-default"
                      type="button"
                    >
                      add to cart
                    </button>
                    <button className="like btn btn-default" type="button">
                      <span className="fa fa-heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group mt-3 mb-3">
          <button
            type="button"
            className="btn btn-default m-1"
            onClick={this.openProductMedia.bind(this)}
          >
            <i className="fa fa-plus-circle m-1" />
            Media
          </button>
          <label className="col-sm-2 control-label">Description</label>
          <div className="col-sm-12">
            <ReactQuill
              modules={this.quillModules}
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
