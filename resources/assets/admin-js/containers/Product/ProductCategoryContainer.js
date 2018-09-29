import Modal from "react-modal";
import { ToastContainer, ToastStore } from "react-toasts";
import PostCategoryContainer from "../Post/PostCategoryContainer";

export default class ProductCategoryContainer extends PostCategoryContainer {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.load();
    Modal.setAppElement("#root");
  }

  load() {
    this.props.context.api
      .get("/categories?filter[where][type]=product")
      .then(res => {
        this.setState({
          objects: res.data,
          modalIsOpen: false
        });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    if (this.state.isEdit) {
      this.props.context.api
        .put("/categories/" + this.state.id, {
          name: data.get("name"),
          description: data.get("description"),
          published: this.state.published,
          parent_id: data.get("parent_id")
        })
        .then(res => {
          ToastStore.success("Update");
          this.load();
        });
    } else {
      this.props.context.api
        .post("/categories", {
          name: data.get("name"),
          description: data.get("description"),
          published: this.state.published,
          type: "product",
          parent_id: data.get("parent_id")
        })
        .then(res => {
          ToastStore.success("Create");
          this.load();
        });
    }
  }

  delete() {
    this.props.context.api
      .delete("/categories/" + this.state.deleteId)
      .then(res => {
        ToastStore.success("Deleted");
        this.load();
      });
    this.setState({ modalIsOpen: false });
  }
}
