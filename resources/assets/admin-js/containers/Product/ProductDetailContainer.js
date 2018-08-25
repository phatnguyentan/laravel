import React from "react";
import { Link, Redirect } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ApiService from "../../services/api-service";
import ReactQuill from "react-quill";
import debounce from "debounce";
import { ToastContainer, ToastStore } from "react-toasts";

class ProductDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      object: {},
      title: "",
      body: "",
      created: false,
      categories: [],
      category_id: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.location.state) {
      const { object } = this.props.location.state;
      this.setState({
        object: object
      });
      this.setState({
        body: object.body
      });
      this.setState({
        title: object.title
      });
    } else {
      ApiService.get(`/posts/${this.props.match.params.id}`).then(res => {
        this.setState({
          object: res.data
        });
        this.setState({
          body: res.data.body
        });
        this.setState({
          title: res.data.title
        });
      });
    }
    ApiService.get(`/categories`).then(res => {
      this.setState({
        categories: res.data,
        category_id: this.state.object.category_id || 0
      });
    });
  }

  handleChange(value) {
    this.setState({ body: value });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSelectChange(event) {
    this.setState({ category_id: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    ApiService.put(`/posts/` + this.state.object.id, this.state).then(res => {
      this.setState({ object: res.data });
      ToastStore.success("You just update");
    });
  }

  render() {
    return !this.state.created ? (
      <form onSubmit={this.handleSubmit}>
        <label className="col-sm-2 control-label">Title</label>
        <div className="col-sm-10">
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
            className="form-control"
            placeholder="Title"
          />
        </div>
        <div className="mt-3 mb-3">
          <label className="col-sm-2 control-label">Content</label>
          <div className="col-sm-10">
            <ReactQuill
              theme="snow"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <label className="col-sm-2 control-label">Category</label>
        <div className="col-sm-2">
          <select
            className="form-control"
            name="category_id"
            value={this.state.category_id}
            onChange={this.handleSelectChange}
          >
            <option>Select Category</option>
            {this.state.categories.map(c => {
              return (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-default m-3">
          Save
        </button>
        <ToastContainer
          position={ToastContainer.POSITION.TOP_CENTER}
          store={ToastStore}
        />
      </form>
    ) : (
      <Redirect
        to={{
          pathname: "/admin/posts/" + this.state.object.id,
          state: { object: this.state.object }
        }}
      />
    );
  }
}

export default ProductDetailContainer;
