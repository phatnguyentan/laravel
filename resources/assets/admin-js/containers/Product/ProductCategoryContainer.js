import Modal from "react-modal";
import { ToastContainer, ToastStore } from "react-toasts";
import PostCategoryContainer from "../Post/PostCategoryContainer";

class ProductCategoryContainer extends PostCategoryContainer {
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

export default ProductCategoryContainer;
