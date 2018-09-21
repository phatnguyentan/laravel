import ProductList from "./product-list";

export default class ProductListNew extends ProductList {
  componentWillMount() {
    this.props.context.api.get("/products?filter[where][new]=1").then(res => {
      this.setState({ objects: res.data });
    });
  }
}
