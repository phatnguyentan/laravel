import ProductList from "./product-list";

export default class ProductListHot extends ProductList {
  componentWillMount() {
    this.props.context.api
      .get("/products?filter[where][hot]=desc")
      .then(res => {
        this.setState({ objects: res.data });
      });
  }
}
