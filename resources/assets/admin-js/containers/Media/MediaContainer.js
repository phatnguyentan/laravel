import React, { Component } from "react";
import MediaListComponent from "../../components/Display/Media/MediaListComponent";
import { Promise } from "core-js";
import { FileUploadReader } from "../../../my-libs/js/file/FileUploadReader";
import ApiService from "../../services/api-service";
import Modal from "react-modal";

class MediaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { objects: [], modalIsOpen: false, deleteObjects: [] };
  }
  componentDidMount() {
    if (this.props.onRef) this.props.onRef(this);
    this.props.context.api.get("/media").then(res => {
      this.setState({
        objects: res.data
      });
    });
    Modal.setAppElement("#root");
  }

  componentWillUnmount() {
    if (this.props.onRef) this.props.onRef(undefined);
  }

  delete() {
    this.state.deleteObjects.forEach(ob => {
      this.props.context.api.delete("/media/" + ob.id).then(res => {
        this.props.context.api.get("/media").then(res => {
          this.setState({ objects: res.data });
        });
      });
    });
    this.setState({ modalIsOpen: false, deleteObjects: [] });
  }
  askDelete(objects) {
    if (objects && objects.length > 0) {
      this.setState({ modalIsOpen: true, deleteObjects: objects });
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar-nav">
          <ul className="list-inline">
            <li className="list-inline-item" style={{ position: "relative" }}>
              <span className="btn btn-primary fileinput-button">
                <i className="fa fa-upload" />
                <span>Upload</span>
                <input
                  type="file"
                  name="files[]"
                  multiple="multiple"
                  style={{ width: "100px", height: "40px" }}
                  onChange={event => {
                    const fs = event.target.files;
                    FileUploadReader.uploadHandler(event).then(files => {
                      files.forEach((f, i) => {
                        this.props.context.api
                          .post("/media", {
                            photo: f.target.result,
                            name: fs[i].name
                          })
                          .then(res => {
                            this.props.context.api.get("/media").then(res => {
                              this.setState({
                                objects: res.data
                              });
                            });
                          });
                      });
                    });
                  }}
                />
              </span>
            </li>
            <li className="list-inline-item">
              <button onClick={e => {}} className="btn btn-default">
                <i className="fa fa-refresh" />
              </button>
            </li>
            <li className="list-inline-item">
              <button
                onClick={e => {
                  this.askDelete(
                    this.state.objects.filter(ob => {
                      return ob.selected;
                    })
                  );
                }}
                className="btn btn-default"
              >
                <i className="fa fa-trash" />
              </button>
            </li>
            {/* <li className="list-inline-item">
              <button>gird</button>
              <button>list</button>
              <button>tiles</button>
            </li> */}
          </ul>
        </nav>
        <div className="row">
          <div className="col-sm-2">menu</div>
          <div className="col-sm-8">
            <MediaListComponent objects={this.state.objects} />
          </div>
          <div className="col-sm-2">Actions</div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          className="s-modal"
          onRequestClose={e => {
            this.setState({ modalIsOpen: false });
          }}
          contentLabel="Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>
            Are you sure to want to delete?
          </h2>
          <form className="text-right">
            <button
              className="btn m-2"
              onClick={e => {
                this.setState({ modalIsOpen: false });
              }}
            >
              Close
            </button>
            <button
              className="btn btn-primary"
              onClick={this.delete.bind(this)}
            >
              Yes
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default MediaContainer;
