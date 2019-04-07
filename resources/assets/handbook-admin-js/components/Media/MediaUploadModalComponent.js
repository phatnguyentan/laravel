// import React from "react";
import React from "react";
import Modal from "react-modal";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";
import MediaListComponent from "../Display/Media/MediaListComponent";

class MediaUploadModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mediaIsOpen: props.mediaIsOpen };
    Modal.setAppElement("#root");
  }

  afterOpenModal() {}
  closeModal() {
    this.setState({ mediaIsOpen: false });
  }

  componentWillReceiveProps(props) {
    this.setState({ mediaIsOpen: props.mediaIsOpen });
  }

  render() {
    return (
      <Modal
        isOpen={this.state.mediaIsOpen}
        onAfterOpen={this.afterOpenModal.bind(this)}
        onRequestClose={this.closeModal.bind(this)} // style={customStyles}
        contentLabel="Modal"
      >
        <h2 ref={subtitle => (this.subtitle = subtitle)}>Media</h2>
        <form className="text-right">
          <MediaListComponent objects={[]} />
          <button className="btn m-2" onClick={this.closeModal.bind(this)}>
            close
          </button>
          <button className="btn btn-primary">Yes</button>
        </form>
      </Modal>
    );
  }
}

export default MediaUploadModalComponent;
