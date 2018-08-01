import React, { Component } from "react";
import { Compare, ProductList } from "../../components";

class Home extends Component {
  componentWillMount() {
    // this.props.actions.getProducts();
  }

  render() {
    // const { products, actions } = this.props;
    // const compareProducts = products.filter(product => product.compare);

    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Compare Products</h2>
          </div>
        </div>
        {/* <ProductList products={products} compare={actions.compare} />
        {compareProducts.length >= 2 && <Compare products={compareProducts} />} */}
      </div>
    );
  }
}

export default Home;
