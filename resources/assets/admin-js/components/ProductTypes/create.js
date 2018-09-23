import React from "react";
import Modal from "react-modal";

export default class ProductTypesCreate extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { product_type: {} };
    this.state = { description: "" };
  }

  componentDidMount() {
    this.setState({ ...this.state, ...this.props.product_type });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onAfterOpen={this.componentDidMount.bind(this)}
        onRequestClose={this.props.closeModal}
        style={{ content: { width: "50%", margin: "auto" } }}
        contentLabel="Modal"
      >
        <h2>Create Product Type</h2>
        <form className="text-right" submit={this.props.submit}>
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
            <label>Price</label>
            <input type="number" className="form-control" placeholder="Price" />
          </div>
          <div className="form-group">
            <label>Discount</label>
            <input
              type="number"
              className="form-control"
              placeholder="Discount"
            />
            %
          </div>
          <div className="form-group">
            <label>Real Price</label>
            <input
              type="number"
              className="form-control"
              placeholder="Real Price"
            />
          </div>
          <div className="form-group">
            <label>Price Unit</label>
            <select className="form-control" name="price_unit" id="">
              <option value="vnd">VND</option>
            </select>
          </div>
          <button
            className="btn m-2"
            type="button"
            onClick={this.props.closeModal}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.props.modalSubmit}
          >
            Save
          </button>
        </form>
      </Modal>
    );
  }
}
