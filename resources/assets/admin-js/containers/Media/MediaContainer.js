import React, { Component } from "react";
import MediaListComponent from "../../components/Display/Media/MediaListComponent";
import Modal from "react-modal";
import PageNavigation from "../../components/Navigation/PageNavigation";
import { FileUploadReader } from "../../../my-libs/File/FileUploadReader";
import UrlParser from "../../../my-libs/String/Url/url-parser";
import BaseGridSelection from "../../components/Base/Grid/gird-selection";
import { Link } from "react-router-dom";

export default class MediaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: [],
      albums: [],
      album: null,
      modalIsOpen: false,
      albumIsOpen: false,
      deleteObjects: [],
      pagination: {}
    };
  }
  componentDidMount() {
    this.urlParser = new UrlParser(window.location.href);
    this.props.context.api.get("/albums").then(res => {
      this.setState({ albums: res.data });
    });
    if (this.state.album) {
      this.loadAlbumDetail();
    } else {
      this.props.context.api
        .get("/media?" + this.urlParser.getQueryString())
        .then(res => {
          this.setState({ objects: res.data, pagination: res });
        });
    }
    this.unsub = this.props.history.listen((location, action) => {
      if (this.state.album) {
        this.loadAlbumDetail();
      } else {
        this.props.context.api.get("/media" + location.search).then(res => {
          this.setState({ objects: res.data, pagination: res });
        });
      }
    });
    Modal.setAppElement("#root");
  }

  loadAlbumDetail() {
    this.props.context.api
      .get("/album_media?filter[where][album_id]=" + this.state.album)
      .then(res => {
        this.setState({
          objects: res.data.map(d => d.media),
          pagination: res
        });
      });
  }

  componentWillUnmount() {
    this.unsub();
  }

  delete() {
    if (this.state.album) {
      this.state.deleteObjects.forEach(ob => {
        this.props.context.api
          .delete(
            "/album_media/delete/?filter[where][media_id]=" +
              ob.id +
              "&filter[where][album_id]=" +
              this.state.album
          )
          .then(res => {
            this.props.context.api
              .get("/album_media?filter[where][album_id]=" + this.state.album)
              .then(res => {
                this.setState({
                  objects: res.data.map(d => d.media),
                  pagination: res
                });
              });
          });
      });
      this.setState({ modalIsOpen: false, deleteObjects: [] });
    } else {
      this.state.deleteObjects.forEach(ob => {
        this.props.context.api.delete("/media/" + ob.id).then(res => {
          this.props.context.api.get("/media").then(res => {
            this.setState({ objects: res.data });
          });
        });
      });
      this.setState({ modalIsOpen: false, deleteObjects: [] });
    }
  }

  askDelete(objects) {
    if (objects && objects.length > 0) {
      this.setState({ modalIsOpen: true, deleteObjects: objects });
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar-nav row">
          <div className="col-sm-6">
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
                <button
                  onClick={e => {
                    this.setState({
                      objects: this.state.objects.map(ob => {
                        ob.selected = false;
                        return ob;
                      })
                    });
                  }}
                  className="btn btn-default"
                >
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
              <li className="list-inline-item">
                <button
                  onClick={e => {
                    this.setState({ albumIsOpen: true });
                  }}
                  className="btn btn-default"
                >
                  <i className="fa fa-plus" />
                  Add Album
                </button>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <PageNavigation
              {...this.props}
              pagination={this.state.pagination}
            />
          </div>
        </nav>
        <div className="row">
          <div className="col-sm-2">
            <ul className="menu list-unstyled font-size-20">
              <li className="menu-item">
                <div
                  className="font-size-20 clickable"
                  onClick={e => {
                    this.props.context.api.get("/media").then(res => {
                      this.setState({ objects: res.data, pagination: res });
                    });
                  }}
                >
                  Albums
                </div>
              </li>
              <li className="sub-menu-item">
                <div
                  className="font-size-20 clickable"
                  onClick={e => {
                    this.props.context.api.get("/media").then(res => {
                      this.setState({ objects: res.data, pagination: res });
                    });
                  }}
                >
                  All
                </div>
              </li>
              {this.state.albums.map(a => {
                return (
                  <li key={a.id} className="sub-menu-item">
                    <div
                      className="font-size-20 clickable"
                      onClick={e => {
                        this.setState({ album: a.id });
                        setTimeout(() => {
                          this.loadAlbumDetail();
                        }, 200);
                      }}
                    >
                      {a.name}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-sm-10">
            <BaseGridSelection
              objects={this.state.objects}
              onSelect={e => {
                e.selected = !e.selected;
                this.state.objects = this.state.objects.map(ob => {
                  return ob.id == e.id ? e : ob;
                });
                this.setState({ objects: this.state.objects });
              }}
            />
          </div>
        </div>
        <PageNavigation {...this.props} pagination={this.state.pagination} />
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
        <Modal
          isOpen={this.state.albumIsOpen}
          className="s-modal"
          onRequestClose={e => {
            this.setState({ albumIsOpen: false });
            this.setState({
              albums: this.state.albums.map(m => {
                m.selected = false;
                return m;
              })
            });
          }}
          contentLabel="Modal"
        >
          <h2>Add to album</h2>
          <form className="text-right m-3">
            {this.state.albums.map(e => {
              return (
                <div key={e.id} className="row">
                  <input
                    id={"album" + e.id}
                    type="checkbox"
                    className="checkbox-input m-1"
                    onClick={event => {
                      e.selected = !e.selected;
                      this.state.albums = this.state.albums.map(al => {
                        if (al.id == e.id) return e;
                        return al;
                      });
                    }}
                  />
                  <h5>
                    <label className="clickable" htmlFor={"album" + e.id}>
                      {e.name}
                    </label>
                  </h5>
                </div>
              );
            })}
            <button
              type="button"
              className="btn m-2"
              onClick={e => {
                this.setState({ albumIsOpen: false });
              }}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={e => {
                this.state.albums.filter(e => e.selected).forEach(e => {
                  this.props.context.api
                    .post(`/album_media/list`, {
                      data: this.state.objects
                        .filter(m => m.selected)
                        .map(m => {
                          return { album_id: e.id, media_id: m.id };
                        })
                    })
                    .then(res => {
                      this.setState({ albumIsOpen: false });
                    });
                });
              }}
            >
              Add
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}
