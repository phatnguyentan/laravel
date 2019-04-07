import MediaContainer from "./MediaContainer";
import React, { Component } from "react";
import MediaListComponent from "../../components/Display/Media/MediaListComponent";
import Modal from "react-modal";
import PageNavigation from "../../components/Navigation/PageNavigation";
import { FileUploadReader } from "../../../my-libs/File/FileUploadReader";
import UrlParser from "../../../my-libs/String/Url/url-parser";
import BaseGridSelection from "../../components/Base/Grid/gird-selection";
import { Link } from "react-router-dom";

export default class AlbumDetailContainer extends MediaContainer {
  componentDidMount() {
    this.urlParser = new UrlParser(window.location.href);
    this.load();
    this.props.context.api.get("/albums").then(res => {
      this.setState({ albums: res.data });
    });
    Modal.setAppElement("#root");
    this.unsub = this.props.history.listen((location, action) => {
      this.props.context.api
        .get("/album_media?filter[where][album_id]=" + this.urlParser.getId())
        .then(res => {
          this.setState({
            objects: res.data,
            pagination: res
          });
        });
    });
  }

  load() {
    this.props.context.api
      .get("/album_media?filter[where][album_id]=" + this.urlParser.getId())
      .then(res => {
        this.setState({
          objects: res.data.map(d => d.media),
          pagination: res
        });
      });
  }

  delete() {
    this.state.deleteObjects.forEach(ob => {
      this.props.context.api
        .delete(
          "/album_media/delete/?filter[where][media_id]=" +
            ob.id +
            "&filter[where][album_id]=" +
            this.urlParser.getId()
        )
        .then(res => {
          this.load();
        });
    });
    this.setState({
      modalIsOpen: false,
      deleteObjects: []
    });
  }
}
