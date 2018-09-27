import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer, ToastStore } from "react-toasts";
import { relative } from "path";
import PageNavigation from "../../Navigation/PageNavigation";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
export default class BaseGrid extends React.Component {
  constructor(props) {
    super(props);
    this.entity = "posts";
    this.state = { objects: [], pagination: {} };
  }
  componentDidMount() {
    this.props.context.api.get(`/${this.entity}`).then(res => {
      this.setState({ objects: res.data, pagination: res, modalIsOpen: false });
    });
    Modal.setAppElement("#root");
  }
  openDelete(id) {
    this.setState({
      modalIsOpen: true,
      deleteId: id
    });
  }
  delete() {
    this.props.context.api
      .delete(`/${this.entity}/` + this.state.deleteId)
      .then(res => {
        ToastStore.success("Deleted");
        this.props.context.api.get(`/${this.entity}`).then(res => {
          this.setState({ objects: res.data });
        });
      });
    this.setState({ modalIsOpen: false });
  }
  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }
  load() {
    this.props.context.api.get(`/${this.entity}`).then(res => {
      this.setState({ objects: res.data });
    });
  }
  copy(item) {
    this.props.context.api
      .post(`/${this.entity}/${item.id}/duplicate`)
      .then(res => {
        ToastStore.success("Copied");
        this.load();
      });
  }
  view(item) {
    this.props.history.push(`/admin/${this.entity}/${item.id}`);
  }
  render() {
    return (
      <div>
        <PageNavigation {...this.props} pagination={this.state.pagination} />
        <div>
          {this.state.objects.map(d => {
            return (
              <div key={d.id} className="pull-left col-2">
                <div className="thumbnail">
                  <Link to={"/admin/products/" + d.id}>
                    <img
                      src={
                        d.media[0]
                          ? d.media[0].url
                          : "https://via.placeholder.com/300x300?text=No Image"
                      }
                      alt="Lights"
                      style={{ width: "100%", height: "230px" }}
                    />
                  </Link>
                  <div style={{ position: "relative", top: "-40px" }}>
                    <button
                      className="btn btn-default m-1"
                      onClick={this.openDelete.bind(this, d.id)}
                    >
                      <i className="fa fa-trash" />
                    </button>
                    <button
                      className="btn btn-default m-1"
                      onClick={this.view.bind(this, d)}
                    >
                      <i className="fa fa-eye" />
                    </button>
                    <button
                      className="btn btn-default m-1"
                      onClick={this.copy.bind(this, d)}
                    >
                      <i className="fa fa-copy" />
                    </button>
                    <div className="caption">{d.name}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          contentLabel="Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>
            Are you sure to want to delete?
          </h2>
          <form className="text-right">
            <button className="btn m-2" onClick={this.closeModal.bind(this)}>
              close
            </button>
            <button
              className="btn btn-primary"
              onClick={this.delete.bind(this)}
            >
              Yes
            </button>
          </form>
        </Modal>
        <ToastContainer
          position={ToastContainer.POSITION.TOP_CENTER}
          store={ToastStore}
        />
      </div>
    );
  }
}
