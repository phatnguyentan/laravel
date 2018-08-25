// import React from "react";
import React from "react";
import Modal from "react-modal";
// import "./styles.css";
import MediaListComponent from "../../components/Display/Media/MediaListComponent";
import MediaContainer from "./MediaContainer";

class MediaUploadModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mediaIsOpen: props.mediaIsOpen };
    Modal.setAppElement("#root");
  }

  afterOpenModal() {
    // this.props.context.api.get(`/media`).then(res => {
    //   this.setState({ media: res.data });
    // });
  }
  closeModal() {
    this.setState({ mediaIsOpen: false });
  }

  insert() {
    this.props.onInsert(this.child.state.objects.filter(ob => ob.selected));
  }

  componentWillReceiveProps(props) {
    this.setState({ mediaIsOpen: props.mediaIsOpen });
  }

  render() {
    return (
      <Modal
        isOpen={this.state.mediaIsOpen}
        onAfterOpen={this.afterOpenModal.bind(this)}
        onRequestClose={this.closeModal.bind(this)}
        contentLabel="Modal"
        closeButton={this.closeModal.bind(this)}
      >
        <h2 ref={subtitle => (this.subtitle = subtitle)}>Media</h2>
        <form>
          <div className="text-right">
            <button
              type="button"
              className="btn m-2"
              onClick={this.closeModal.bind(this)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.insert.bind(this)}
            >
              Insert
            </button>
          </div>
          <div
          // style={{
          //   position: "relative",
          //   overflowY: "scroll",
          //   height: "400px"
          // }}
          >
            <MediaContainer onRef={ref => (this.child = ref)} {...this.props} />
          </div>
        </form>
      </Modal>
    );
  }
}

export default MediaUploadModalContainer;
