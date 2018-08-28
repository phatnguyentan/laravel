import Modal from "react-modal";
import { ToastContainer, ToastStore } from "react-toasts";
import PostCategoryContainer from "../Post/PostCategoryContainer";

class ProductCategoryContainer extends PostCategoryContainer {
  constructor(props) {
    super(props);
    this.state = { objects: [], title: "" };
  }
  componentDidMount() {
    this.props.context.api
      .get("/categories?filter[where][type]=product")
      .then(res => {
        this.setState({ objects: res.data, modalIsOpen: false });
      });
    Modal.setAppElement("#root");
  }
  delete() {
    this.props.context.api
      .delete("/categories/" + this.state.deleteId)
      .then(res => {
        ToastStore.success("Deleted");
        this.props.context.api
          .get("/categories?filter[where][type]=product")
          .then(res => {
            this.setState({ objects: res.data });
          });
      });
    this.setState({ modalIsOpen: false });
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    this.props.context.api
      .post("/categories", {
        name: data.get("name"),
        description: data.get("description"),
        type: "product",
        parent_id: data.get("category_id")
      })
      .then(res => {
        ToastStore.success("Create");
        this.props.context.api
          .get("/categories?filter[where][type]=product")
          .then(res => {
            this.setState({ objects: res.data });
          });
      });
  }
}

export default ProductCategoryContainer;
