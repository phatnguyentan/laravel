import React, { Component } from "react";
import MediaListComponent from "../../components/Display/Media/MediaListComponent";
import { Promise } from "core-js";
import { FileUploadReader } from "../../../my-libs/js/file/FileUploadReader";

class Media extends Component {
  render() {
    return (
      <div>
        <nav className="navbar-nav">
          <ul className="list-inline">
            <li className="list-inline-item">
              <span className="btn btn-primary fileinput-button">
                <i className="fa fa-upload" />
                <span>Upload</span>
                <input
                  type="file"
                  name="files[]"
                  multiple="multiple"
                  onChange={e => {
                    FileUploadReader.uploadHandler(e).then(files => {
                      console.log(files);
                    });
                  }}
                />
              </span>
            </li>
            <li className="list-inline-item">
              <button>Refresh</button>
            </li>
            <li className="list-inline-item">
              <button>Delete</button>
            </li>
            <li className="list-inline-item">
              <button>gird</button>
              <button>list</button>
              <button>tiles</button>
            </li>
          </ul>
        </nav>
        <div className="row">
          <div className="col-sm-2">menu</div>
          <div className="col-sm-10">
            <MediaListComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default Media;
