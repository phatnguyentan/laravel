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
    event.preventDefault();
    ApiService.post(`/posts`, this.state).then(res => {
      ToastStore.success("You just created");
      this.setState({ created: true, object: res.data });
    });
  }
}

export default PostCreate;
