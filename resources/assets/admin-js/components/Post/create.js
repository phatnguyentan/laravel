import "react-quill/dist/quill.snow.css";
import ApiService from "../../services/api-service";
import PostDetail from "./detail";

class PostCreate extends PostDetail {
  componentDidMount() {
    ApiService.get(`/categories`).then(res => {
      this.setState({ categories: res.data, category_id: 0 });
    });
  }

  handleSubmit(event) {
    ApiService.post(`/posts`, this.state).then(res => {
      this.setState({ created: true, object: res.data });
    });
    event.preventDefault();
  }
}

export default PostCreate;
