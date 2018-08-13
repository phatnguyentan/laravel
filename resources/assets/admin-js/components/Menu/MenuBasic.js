// import React from "react";
import React from "react";
import { TreeMenu } from "my-libs";
import { Link } from "react-router-dom";
import { Config } from "../../config/config";

class MenuBasic extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    Config;
    const array = [
      {
        id: 1,
        name: "Post",
        link: `${Config.adminPrefix}/posts`,
        icon: "fa fa-newspaper-o m-1"
      },
      {
        id: 2,
        name: "All Posts",
        parent_id: 1,
        link: `${Config.adminPrefix}/posts`
      },
      {
        id: 3,
        name: "Create Post",
        parent_id: 1,
        link: `${Config.adminPrefix}/posts/create`
      },
      {
        id: 4,
        name: "Category",
        parent_id: 1,
        link: `${Config.adminPrefix}/post_categories`
      },
      {
        id: 10,
        name: "Product",
        link: `${Config.adminPrefix}/products`,
        icon: "fa fa-shopping-bag m-1"
      },
      {
        id: 11,
        name: "All Products",
        parent_id: 10,
        link: `${Config.adminPrefix}/products`
      },
      {
        id: 12,
        name: "Create Product",
        parent_id: 10,
        link: `${Config.adminPrefix}/product/create`
      },
      {
        id: 13,
        name: "Category",
        parent_id: 10,
        link: `${Config.adminPrefix}/product_categories`
      }
    ];
    const treeMenu = new TreeMenu(array);
    const render = nodes => {
      if (Array.isArray(nodes)) {
        return (
          <ul className="list-unstyled">
            {nodes.map(n => {
              return render(n);
            })}
          </ul>
        );
      } else {
        const node = nodes;
        if (node.nodes && node.nodes.length > 0) {
          return (
            <li
              className={node.data.parent ? "sub-menu-item" : "menu-item"}
              key={node.data.id}
              id={node.data.id}
            >
              <Link to={node.data.link}>
                <i className={node.data.icon} />
                {node.data.name}
              </Link>
              {render(node.nodes)}
            </li>
          );
        } else {
          return (
            <li
              className={node.data.parent ? "sub-menu-item" : "menu-item"}
              key={node.data.id}
              id={node.data.id}
            >
              <Link to={node.data.link}>
                <i className={node.data.icon} />
                {node.data.name}
              </Link>
            </li>
          );
        }
      }
    };
    return (
      <nav id="side-menu" className="side-menu">
        {/* <div className="sidebar-header">
          <h3>Sidebar</h3>
        </div> */}
        {render(treeMenu.arrRoot)}
      </nav>
    );
  }
}

export default MenuBasic;
