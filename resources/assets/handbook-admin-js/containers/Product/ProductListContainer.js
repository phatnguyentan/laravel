import React from "react";
import BaseGrid from "../../components/Base/Grid/gird";

export default class ProductListContainer extends BaseGrid {
  constructor(props) {
    super(props);
    this.entity = "products";
  }
}
