import React from "react";
import { Link, Redirect } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ApiService from "../../services/api-service";
import ReactQuill from "react-quill";
import debounce from "debounce";
import { ToastContainer, ToastStore } from "react-toasts";

class PostDetail extends React.Component {
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
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
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
    ApiService.put(`/posts/` + this.state.object.id, this.state).then(res => {
      this.setState({ object: res.data });
      ToastStore.success("OK");
    });
    event.preventDefault();
  }

  render() {
    return !this.state.created ? (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </label>
        <div className="mt-5 mb-5">
          <ReactQuill
            theme="snow"
            value={this.state.body}
            onChange={this.handleChange}
          />
        </div>
        <label>
          Category:
          <select
            value={this.state.category_id}
            onChange={this.handleSelectChange}
          >
            <option>no category</option>
            {this.state.categories.map(c => {
              return (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              );
            })}
          </select>
        </label>
        <input type="submit" value="Save" />
        <ToastContainer
          position={ToastContainer.POSITION.TOP_RIGHT}
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

export default PostDetail;
