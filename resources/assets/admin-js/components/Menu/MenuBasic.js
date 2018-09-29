// import React from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { Config } from "../../config/config";
import "./styles.css";
import { TreeMenu } from "../../../my-libs/DataStructure/Tree/tree-menu";

class MenuBasic extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const array = [
      // {
      //   id: 1,
      //   name: "Post",
      //   link: `${this.props.context.config.adminPrefix}/posts`,
      //   icon: "fa fa-newspaper-o m-2"
      // },
      // {
      //   id: 2,
      //   name: "All Posts",
      //   parent_id: 1,
      //   link: `${this.props.context.config.adminPrefix}/posts`
      // },
      // {
      //   id: 3,
      //   name: "Create Post",
      //   parent_id: 1,
      //   link: `${this.props.context.config.adminPrefix}/posts/create`
      // },
      // {
      //   id: 4,
      //   name: "Category",
      //   parent_id: 1,
      //   link: `${this.props.context.config.adminPrefix}/post_categories`
      // },
      {
        id: 10,
        name: "Product",
        link: `${this.props.context.config.adminPrefix}/products`,
        icon: "fa fa-shopping-bag m-2"
      },
      {
        id: 11,
        name: "All Products",
        parent_id: 10,
        link: `${this.props.context.config.adminPrefix}/products`
      },
      {
        id: 12,
        name: "Create Product",
        parent_id: 10,
        link: `${this.props.context.config.adminPrefix}/products/create`
      },
      {
        id: 13,
        name: "Category",
        parent_id: 10,
        link: `${this.props.context.config.adminPrefix}/product_categories`
      },
      {
        id: 20,
        name: "Media",
        link: `${this.props.context.config.adminPrefix}/media`,
        icon: "fa fa-photo m-2"
      },
      {
        id: 21,
        name: "All Media",
        link: `${this.props.context.config.adminPrefix}/media`,
        parent_id: 20
      },
      {
        id: 22,
        name: "Album",
        link: `${this.props.context.config.adminPrefix}/albums`,
        parent_id: 20
      },
      {
        id: 30,
        name: "Home",
        link: `${this.props.context.config.adminPrefix}/home/banners`,
        icon: "fa fa-home m-2"
      },
      {
        id: 31,
        name: "Banners",
        parent_id: 30,
        link: `${this.props.context.config.adminPrefix}/home/banners`
      }
    ];
    // {
    //   id: 30,
    //   name: "Product Type",
    //   link: `${this.props.context.config.adminPrefix}/product_types`,
    //   icon: "fa fa-sitemap m-2"
    // },
    // {
    //   id: 31,
    //   name: "All Product Types",
    //   parent_id: 30,
    //   link: `${this.props.context.config.adminPrefix}/product_types`
    // }
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
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Admin DashBoard</h3>
        </div>
        <ul className="list-unstyled components">{render(treeMenu.arrRoot)}</ul>
      </nav>
    );
  }
}

export default MenuBasic;
