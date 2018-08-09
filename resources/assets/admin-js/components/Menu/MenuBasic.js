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
      { id: 1, name: "Post", link: `${Config.adminPrefix}/posts` },
      {
        id: 2,
        name: "All Posts",
        parent: 1,
        link: `${Config.adminPrefix}/posts`
      },
      {
        id: 3,
        name: "Create Post",
        parent: 1,
        link: `${Config.adminPrefix}/posts/create`
      },
      {
        id: 4,
        name: "Post Category",
        link: `${Config.adminPrefix}/post_categories`
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
              <Link to={node.data.link}>{node.data.name}</Link>
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
              <Link to={node.data.link}>{node.data.name}</Link>
            </li>
          );
        }
      }
    };
    return (
      <nav id="side-menu" className="side-menu">
        <div className="sidebar-header">
          <h3>Sidebar</h3>
        </div>
        {render(treeMenu.arrRoot)}
      </nav>
    );
  }
}

export default MenuBasic;
