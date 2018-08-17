import BaseList from "../Base/List/list";

class ProductTypes extends BaseList {
  constructor(props) {
    super(props);
    this.entity = "product_types";
    this.template = ["id", "name"];
  }
}

export default ProductTypes;
