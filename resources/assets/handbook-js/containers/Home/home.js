import React, { Component } from "react";
import "./styles.css";
import { Menu } from "primereact/menu";
import { SplitButton } from "primereact/splitbutton";
import Modal from "react-modal";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [],
      menu: [],
      modalIsOpen: false,
      titile: "",
      handbookOption: 1,
      handbookOptions: []
    };
  }
  componentWillMount() {
    this.setState({
      menu: [
        { label: "Handbook", icon: "fa fa-book" },
        { label: "Links", icon: "fa fa-link" }
      ]
    });
    this.setState({
      actions: [
        {
          label: "Daily Handbook",
          icon: "pi pi-refresh",
          command: e => {
            this.show({
              severity: "success",
              summary: "Daily Handbook",
              detail: "New Handbook"
            });
          }
        }
      ]
    });
    this.setState({
      handbookOptions: [{ label: "Daily Handbook", value: 1 }]
    });
  }

  show() {
    console.log("show");
  }

  create() {
    console.log("create");
    this.props.history.push("/handbook/detail", {
      option: this.state.handbookOption,
      title: this.state.titile
    });
  }

  newAction() {
    this.setState({
      modalIsOpen: true
    });
  }

  render() {
    return (
      <div className="main-container home-page">
        <Menu className="left" model={this.state.menu} />
        <div className="right">
          <SplitButton
            label="New"
            icon="pi pi-plus"
            onClick={this.newAction.bind(this)}
            model={this.state.actions}
          />
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          className="s-modal"
          onRequestClose={e => {
            this.setState({ modalIsOpen: false });
          }}
          contentLabel="Modal"
        >
          <span className="p-float-label">
            <InputText
              id="in"
              value={this.state.title}
              onChange={e => this.setState({ value: e.target.value })}
            />
            <Dropdown
              value={this.state.handbookOption}
              options={this.state.handbookOptions}
              onChange={e => {
                this.setState({ handbookOption: e.value });
              }}
              placeholder="Select a Handbook"
            />

            <label htmlFor="in">Titile</label>
          </span>
          <form className="text-right">
            <button
              className="btn m-2"
              onClick={e => {
                this.setState({ modalIsOpen: false });
              }}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary"
              onClick={this.create.bind(this)}
            >
              Create
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Home;
