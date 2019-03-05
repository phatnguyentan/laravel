import ProductList from "./product-list";
import UrlParser from "../../../my-libs/String/Url/url-parser";

export default class ProductListCategory extends ProductList {
  componentWillMount() {
    this.urlParser = new UrlParser();
    this.load();

    this.unsub = this.props.history.listen((location, action) => {
      this.load();
    });
  }

  load() {
    this.props.context.api
      .get("/products?filter[where][category_id]=" + this.urlParser.getId())
      .then(res => {
        this.setState({ objects: res.data });
      });
  }
}
