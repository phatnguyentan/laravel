import BaseList from "../../components/Base/List/list";

class ProductListContainer extends BaseList {
  constructor(props) {
    super(props);
    this.entity = "products";
    this.template = ["id", "name", "excerpt", "published"];
  }
}

export default ProductListContainer;
