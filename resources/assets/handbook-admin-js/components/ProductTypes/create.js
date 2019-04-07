import React from "react";
import Modal from "react-modal";
import NotNullWapper from "../../../my-libs/Wrapper/not-null.wapper";

export default class ProductTypesCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      description: "",
      price: "",
      discount: "",
      real_price: "",
      quality: "",
      price_unit: "vnd"
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      ...new NotNullWapper(this.props.product_type)
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    let dele = this.state.id ? (
      <button
        className="btn btn-danger m-2"
        type="button"
        onClick={this.props.delete.bind(this)}
      >
        Delete
      </button>
    ) : (
      ""
    );
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onAfterOpen={this.componentDidMount.bind(this)}
        onRequestClose={this.props.closeModal}
        style={{ content: { width: "50%", margin: "auto" } }}
        contentLabel="Modal"
      >
        <h2>Create Product Type</h2>
        <form id="formType" className="text-right">
          <div className="form-group d-none">
            <label>Id</label>
            <input
              type="text"
              name="id"
              value={this.state.id}
              className="form-control"
              onChange={this.handleInputChange.bind(this)}
              placeholder="id"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              className="form-control"
              onChange={this.handleInputChange.bind(this)}
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <label>Quality</label>
            <input
              name="quality"
              type="number"
              value={this.state.quality}
              onChange={this.handleInputChange.bind(this)}
              className="form-control"
              placeholder="Quality"
            />
          </div>
          <div className="form-group row">
            <div className="col-4">
              <label className="pull-left">Price</label>
              <input
                name="price"
                type="number"
                value={this.state.price}
                onChange={this.handleInputChange.bind(this)}
                className="form-control"
                placeholder="Price"
              />
            </div>
            <div className="col-4">
              <label className="pull-left">Real Price</label>
              <input
                name="real_price"
                type="number"
                value={this.state.real_price}
                onChange={this.handleInputChange.bind(this)}
                className="form-control"
                placeholder="Real Price"
              />
            </div>
            <div className="col-4">
              <label className="pull-left">Discount</label>
              <input
                name="discount"
                type="number"
                value={this.state.discount}
                onChange={this.handleInputChange.bind(this)}
                className="form-control"
                placeholder="Discount"
              />
              %
            </div>
          </div>
          <div className="form-group row">
            <div className="col-4">
              <label className="pull-left">Price Unit</label>
              <select
                name="price_unit"
                className="form-control"
                name="price_unit"
                value={this.state.price_unit}
                onChange={this.handleInputChange.bind(this)}
              >
                <option value="vnd">VND</option>
              </select>
            </div>
          </div>
          <button
            className="btn m-2"
            type="button"
            onClick={this.props.closeModal}
          >
            Cancel
          </button>
          {dele}
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.props.submit}
          >
            Save
          </button>
        </form>
      </Modal>
    );
  }
}
