import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer, ToastStore } from "react-toasts";
import ApiService from "../../../services/api-service";

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
class BaseList extends React.Component {
  constructor(props) {
    super(props);
    this.entity = "posts";
    this.template = ["id"];
    this.state = { objects: [] };
  }
  componentDidMount() {
    ApiService.get(`/${this.entity}`).then(res => {
      this.setState({ objects: res.data, modalIsOpen: false });
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
    ApiService.delete(`/${this.entity}/` + this.state.deleteId).then(res => {
      ToastStore.success("Deleted");
      ApiService.get(`/${this.entity}`).then(res => {
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
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              {this.template.map(i => {
                return <th key={i}>{i}</th>;
              })}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.objects.map(d => {
              return (
                <tr key={d.id}>
                  {this.template.map(k => {
                    return (
                      <td key={d.id + k}>
                        <Link to={"/admin/posts/" + d.id}>{d[k]}</Link>
                      </td>
                    );
                  })}
                  <td>
                    <button
                      className="btn btn-default"
                      onClick={this.openDelete.bind(this, d.id)}
                    >
                      <i className="fa fa-trash" />
                    </button>
                    <button className="btn btn-default">
                      <i className="fa fa-eye" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
          position={ToastContainer.POSITION.TOP_RIGHT}
          store={ToastStore}
        />
      </div>
    );
  }
}

export default BaseList;
