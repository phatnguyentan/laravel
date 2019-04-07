import React from "react";
import { Link, Redirect } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "./styles.css";
import { ToastContainer, ToastStore } from "react-toasts";
import ProductCreateContainer from "./ProductCreateContainer";

export default class ProductDetailContainer extends ProductCreateContainer {
  componentDidMount() {
    this.load();
  }

  load() {
    this.props.context.api
      .get(`/products/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          object: res.data
        });
        if (res.data.product_types && res.data.product_types.length == 0) {
          res.data.product_types = this.state.product_types;
        }
        this.setState({
          ...this.state,
          ...res.data
        });
        this.props.context.api
          .get(`/categories?filter[where][type]=product`)
          .then(res => {
            this.setState({
              categories: res.data,
              category_id: this.state.object.category_id || 0
            });
          });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.context.api
      .put(`/products/` + this.state.object.id, this.state)
      .then(res => {
        this.setState({ object: res.data });
        ToastStore.success("You just update");
      });
  }
}
