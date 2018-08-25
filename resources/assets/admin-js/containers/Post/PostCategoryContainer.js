import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import ApiService from "../../services/api-service";
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

class PostCategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { objects: [], title: "" };
  }
  componentDidMount() {
    ApiService.get("/categories?filter[where][type]=post").then(res => {
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
    ApiService.delete("/categories/" + this.state.deleteId).then(res => {
      ToastStore.success("Deleted");
      ApiService.get("/categories?filter[where][type]=post").then(res => {
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
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    ApiService.post("/categories", {
      name: data.get("name"),
      description: data.get("description"),
      type: "post",
      parent_id: data.get("category_id")
    }).then(res => {
      ToastStore.success("Create");
      ApiService.get("/categories?filter[where][type]=post").then(res => {
        this.setState({ objects: res.data });
      });
    });
  }
  render() {
    const template = ["id", "name", "slug", "parent_id", "updated_at"];
    return (
      <div className="row">
        <div className="col-sm-4">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label className="col-sm-4 control-label">Category</label>
              <div className="col-sm-8">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Category"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-4 control-label">Parent Category</label>
              <div className="col-sm-8">
                <select name="category_id" className="form-control">
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
              <label className="col-sm-4 control-label">Description</label>
              <div className="col-sm-8">
                <textarea name="description" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-default">
                <i className="fa fa-plus m-1" />
                Create Category
              </button>
            </div>
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
          position={ToastContainer.POSITION.TOP_CENTER}
          store={ToastStore}
        />
      </div>
    );
  }
}

export default PostCategoryContainer;
