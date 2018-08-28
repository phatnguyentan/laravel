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

export default class PostCategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: [],
      name: "",
      description: "",
      parent_id: 0,
      isEdit: false,
      published: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    this.props.context.api
      .get("/categories?filter[where][type]=post")
      .then(res => {
        this.setState({
          objects: res.data,
          modalIsOpen: false
        });
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
      .delete("/categories/" + this.state.deleteId)
      .then(res => {
        ToastStore.success("Deleted");
        this.props.context.api
          .get("/categories?filter[where][type]=post")
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
    this.props.context.api
      .post("/categories", {
        name: data.get("name"),
        description: data.get("description"),
        published: this.state.published,
        type: "post",
        parent_id: data.get("parent_id")
      })
      .then(res => {
        ToastStore.success("Create");
        this.props.context.api
          .get("/categories?filter[where][type]=post")
          .then(res => {
            this.setState({ objects: res.data });
          });
      });
  }
  render() {
    const template = ["id", "name", "parent_id", "published", "updated_at"];
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
          <button type="submit" className="btn btn-default m-1">
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
              <label className="col-sm-10 control-label">Category</label>
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
            <div className="form-group">
              <label className="col-sm-10 control-label">Parent Category</label>
              <div className="col-sm-10">
                <select
                  name="parent_id"
                  className="form-control"
                  value={this.state.parent_id}
                  onChange={this.handleInputChange}
                >
                  <option>Select Category</option>
                  {this.state.objects.map(ob => {
                    return (
                      <option key={ob.id} value={ob.id}>
                        {ob.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-10 control-label">Description</label>
              <div className="col-sm-10">
                <textarea
                  name="description"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-group">
              <input
                id="published"
                name="published"
                className="checkbox-input m-3"
                type="checkbox"
                checked={this.state.published}
                onChange={this.handleInputChange}
              />
              <label htmlFor="published" className="clickable form-check-label">
                Published
              </label>
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
                    {/* <button className="btn btn-default m-1">
                      <i className="fa fa-eye" />
                    </button> */}
                    <button
                      className="btn btn-default m-1"
                      onClick={e => {
                        console.log(d);

                        this.setState({ ...this.state, ...d });
                        this.setState({ isEdit: true });
                      }}
                    >
                      <i className="fa fa-pencil" />
                    </button>
                    <button className="btn btn-default m-1">
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
