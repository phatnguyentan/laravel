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
        <div className="container">
          <div className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1">
                      <img src="http://placekitten.com/400/252" />
                    </div>
                    <div className="tab-pane" id="pic-2">
                      <img src="http://placekitten.com/400/252" />
                    </div>
                    <div className="tab-pane" id="pic-3">
                      <img src="http://placekitten.com/400/252" />
                    </div>
                    <div className="tab-pane" id="pic-4">
                      <img src="http://placekitten.com/400/252" />
                    </div>
                    <div className="tab-pane" id="pic-5">
                      <img src="http://placekitten.com/400/252" />
                    </div>
                  </div>
                  <ul className="preview-thumbnail nav nav-tabs">
                    <li className="active">
                      <a data-target="#pic-1" data-toggle="tab">
                        <img src="http://placekitten.com/200/126" />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-2" data-toggle="tab">
                        <img src="http://placekitten.com/200/126" />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-3" data-toggle="tab">
                        <img src="http://placekitten.com/200/126" />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-4" data-toggle="tab">
                        <img src="http://placekitten.com/200/126" />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-5" data-toggle="tab">
                        <img src="http://placekitten.com/200/126" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="details col-md-6">
                  <h3 className="product-title">men's shoes fashion</h3>
                  <div className="rating">
                    <div className="stars">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <span className="review-no">41 reviews</span>
                  </div>
                  <p className="product-description">
                    Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                    cubilia sem sem! Repudiandae et! Massa senectus enim minim
                    sociosqu delectus posuere.
                  </p>
                  <h4 className="price">
                    current price: <span>$180</span>
                  </h4>
                  <p className="vote">
                    <strong>91%</strong> of buyers enjoyed this product!{" "}
                    <strong>(87 votes)</strong>
                  </p>
                  <h5 className="sizes">
                    sizes:
                    <span className="size" data-toggle="tooltip" title="small">
                      s
                    </span>
                    <span className="size" data-toggle="tooltip" title="medium">
                      m
                    </span>
                    <span className="size" data-toggle="tooltip" title="large">
                      l
                    </span>
                    <span
                      className="size"
                      data-toggle="tooltip"
                      title="xtra large"
                    >
                      xl
                    </span>
                  </h5>
                  <h5 className="colors">
                    colors:
                    <span
                      className="color orange not-available"
                      data-toggle="tooltip"
                      title="Not In store"
                    />
                    <span className="color green" />
                    <span className="color blue" />
                  </h5>
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
