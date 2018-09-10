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
export default class BannerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      object: {},
      content: "",
      mediaIsOpen: false
    };
  }
  openMedia() {
    this.setState({ mediaIsOpen: true });
  }
  componentDidMount() {
    this.props.context.api.get(`/layout/banners`).then(res => {
      this.setState({
        content: res.data.content || ""
      });
    });
  }

  handleChange(value) {
    // this.setState({ content: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.context.api
      .put(`/layout/banners/home_banners`, this.state)
      .then(res => {
        console.log(res);

        // this.props.history.push("/admin/products/" + res.data.id);
      });
  }

  onInsert(objects) {
    let strImage = "";
    objects.forEach(ob => {
      strImage += '<img src="' + ob.url + '">';
    });
    this.setState({
      content: this.state.content + strImage,
      mediaIsOpen: false
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <button type="submit" className="pull-right btn btn-primary m-3">
          Save
        </button>
        <div className="form-group mt-3 mb-3">
          <button
            type="button"
            className="btn btn-default m-1"
            onClick={this.openMedia.bind(this)}
          >
            <i className="fa fa-plus-circle m-1" />
            Media
          </button>
          <label className="col-sm-6 control-label">
            Banners (Only Photos and Videos)
          </label>
          <div className="col-sm-12 mt-3">
            <ReactQuill
              modules={quillModules}
              theme="snow"
              value={this.state.content}
              onChange={this.handleChange.bind(this)}
            />
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
