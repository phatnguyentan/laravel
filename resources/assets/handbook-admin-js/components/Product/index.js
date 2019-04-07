import BaseList from "../Base/List/list";

class ProductList extends BaseList {
  constructor(props) {
    super(props);
    this.entity = "products";
    this.template = ["id", "name"];
  }
}

export default ProductList;
