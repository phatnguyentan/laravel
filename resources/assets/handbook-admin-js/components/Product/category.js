import ApiService from "../../services/api-service";
import Modal from "react-modal";
import { ToastContainer, ToastStore } from "react-toasts";
import PostCategory from "../Post/category";

class ProductCategory extends PostCategory {
  constructor(props) {
    super(props);
    this.state = { objects: [], title: "" };
  }
  componentDidMount() {
    ApiService.get("/categories?filter[where][type]=product").then(res => {
      this.setState({ objects: res.data, modalIsOpen: false });
    });
    Modal.setAppElement("#root");
  }
  delete() {
    ApiService.delete("/categories/" + this.state.deleteId).then(res => {
      ToastStore.success("Deleted");
      ApiService.get("/categories?filter[where][type]=product").then(res => {
        this.setState({ objects: res.data });
      });
    });
    this.setState({ modalIsOpen: false });
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    ApiService.post("/categories", {
      name: data.get("name"),
      description: data.get("description"),
      type: "product",
      parent_id: data.get("category_id")
    }).then(res => {
      ToastStore.success("Create");
      ApiService.get("/categories?filter[where][type]=product").then(res => {
        this.setState({ objects: res.data });
      });
    });
  }
}

export default ProductCategory;
