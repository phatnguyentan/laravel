import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Modal from "react-modal";
import { ToastContainer, ToastStore } from "react-toasts";

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
// "/categories?filter[where][type]=product&filter[where][parent_id]=1"

export default class AlbumContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: [],
      name: "",
      isEdit: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    this.load();
    Modal.setAppElement("#root");
  }
  openDelete(id) {
    this.setState({
      modalIsOpen: true,
      deleteId: id
    });
  }

  load() {
    this.props.context.api.get("/albums").then(res => {
      this.setState({
        objects: res.data,
        modalIsOpen: false
      });
    });
  }

  delete() {
    this.props.context.api
      .delete("/albums/" + this.state.deleteId)
      .then(res => {
        ToastStore.success("Deleted");
        this.props.context.api
          .get("/albums?filter[where][type]=post")
          .then(res => {
            this.setState({ objects: res.data });
          });
      });
    this.setState({ modalIsOpen: false });
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    if (this.state.isEdit) {
      this.props.context.api
        .put("/albums/" + this.state.id, {
          name: data.get("name")
        })
        .then(res => {
          ToastStore.success("Update");
          this.load();
        });
    } else {
      this.props.context.api
        .post("/albums", {
          name: data.get("name")
        })
        .then(res => {
          ToastStore.success("Create");
          this.load();
        });
    }
  }

  render() {
    const template = ["id", "name", "updated_at"];
    let buttonSummit = !this.state.isEdit ? (
      <div className="form-group">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary">
            <i className="fa fa-plus-circle m-1" />
            Create
          </button>
        </div>
      </div>
    ) : (
      <div className="form-group">
        <div className="col-sm-10">
          <button
            type="button"
            className="btn btn-default m-1"
            onClick={e => {
              e.preventDefault();
              this.setState({
                isEdit: false,
                name: "",
                description: "",
                published: false
              });
            }}
          >
            <i className="m-1" />
            Cancle
          </button>
          <button type="submit" className="btn btn-primary m-1">
            <i className="fa fa-pencil m-1" />
            Edit
          </button>
        </div>
      </div>
    );
    return (
      <div className="row">
        <div className="col-sm-4">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label className="col-sm-10 control-label">Album</label>
              <div className="col-sm-10">
                <input
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="Category"
                />
              </div>
            </div>
            {buttonSummit}
          </form>
        </div>
        <table className="table col-sm-8">
          <thead>
            <tr>
              {template.map(i => {
                return <th key={i}>{i}</th>;
              })}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.objects.map(d => {
              return (
                <tr key={d.id}>
                  {template.map(k => {
                    return <td key={d.id + k}>{d[k]}</td>;
                  })}
                  <td>
                    <button
                      className="btn btn-default m-1"
                      onClick={e => {
                        this.setState({ ...this.state, ...d });
                        this.setState({ isEdit: true });
                      }}
                    >
                      <i className="fa fa-pencil" />
                    </button>
                    <button
                      className="btn btn-default m-1"
                      onClick={e => {
                        this.props.context.api
                          .post(`/categories/${d.id}/duplicate`)
                          .then(e => {
                            ToastStore.success("Copied");
                            this.load();
                          });
                      }}
                    >
                      <i className="fa fa-copy" />
                    </button>
                    <button
                      className="btn btn-default m-1"
                      onClick={this.openDelete.bind(this, d.id)}
                    >
                      <i className="fa fa-trash" />
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
            <button className="btn m-1" onClick={this.closeModal.bind(this)}>
              Close
            </button>
            <button
              className="btn btn-primary m-1"
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
