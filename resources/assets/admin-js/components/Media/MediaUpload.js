// import React from "react";
import React from "react";
import Modal from "react-modal";
import { TreeMenu } from "my-libs";
import { Link, NavLink } from "react-router-dom";
// import { Config } from "../../config/config";
import "./styles.css";

class MediaUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mediaIsOpen: props.mediaIsOpen };
    Modal.setAppElement("#root");
  }

  afterOpenModal() {}
  closeModal() {
    this.setState({ mediaIsOpen: false });
  }

  componentWillReceiveProps(props) {
    this.setState({ mediaIsOpen: props.mediaIsOpen });
  }

  render() {
    const array = [
      {
        id: 1,
        name: "Thêm mới media",
        link: `${this.props.context.adminPrefix}/posts`,
        icon: "fa fa-newspaper-o m-2"
      }
    ];
    const treeMenu = new TreeMenu(array);
    const render = nodes => {
      if (Array.isArray(nodes)) {
        return nodes.map(n => {
          return render(n);
        });
      } else {
        const node = nodes;
        if (node.nodes && node.nodes.length > 0) {
          return (
            <li
              key={node.data.id}
              id={node.data.id}
              className={node.data.parent_id ? "sub-menu-item" : "menu-item"}
            >
              <NavLink to={node.data.link} exact activeClassName="active">
                <i className={node.data.icon} />
                {node.data.name}
              </NavLink>
              <ul className="collapse list-unstyled">{render(node.nodes)}</ul>
            </li>
          );
        } else {
          return (
            <li
              className={node.data.parent_id ? "sub-menu-item" : "menu-item"}
              key={node.data.id}
              id={node.data.id}
            >
              <NavLink to={node.data.link} activeClassName="active" exact>
                <i className={node.data.icon} />
                {node.data.name}
              </NavLink>
            </li>
          );
        }
      }
    };
    return (
      <Modal
        isOpen={this.state.mediaIsOpen}
        onAfterOpen={this.afterOpenModal.bind(this)}
        onRequestClose={this.closeModal.bind(this)} // style={customStyles}
        contentLabel="Modal"
      >
        <h2 ref={subtitle => (this.subtitle = subtitle)}>Media</h2>
        <ul className="list-unstyled components">{render(treeMenu.arrRoot)}</ul>
        <form className="text-right">
          <button className="btn m-2" onClick={this.closeModal.bind(this)}>
            close
          </button>
          {/* <button className="btn btn-primary" onClick={this.delete.bind(this)}>
            Yes
          </button> */}
        </form>
      </Modal>
    );
  }
}

export default MediaUpload;
