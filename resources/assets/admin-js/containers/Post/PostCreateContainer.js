import "react-quill/dist/quill.snow.css";
import PostDetailContainer from "./PostDetailContainer";

class PostCreateContainer extends PostDetailContainer {
  componentDidMount() {
    this.props.context.api
      .get(`/categories?filter[where][type]=post`)
      .then(res => {
        this.setState({ categories: res.data, category_id: 0 });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.context.api.post(`/posts`, this.state).then(res => {
      this.props.history.push("/admin/posts/" + res.data.id, {
        object: res.data
      });
    });
  }
}

export default PostCreateContainer;
