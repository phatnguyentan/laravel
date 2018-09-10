"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class TreeMenuComponent extends React.Component {
    static simpleRender(nodes) {
        if (Array.isArray(nodes)) {
            return (React.createElement("ul", null, nodes.map(n => {
                return TreeMenuComponent.simpleRender(n);
            })));
        }
        else {
            const node = nodes;
            if (node.nodes && node.nodes.length > 0) {
                return (React.createElement("li", null,
                    node.data.name,
                    TreeMenuComponent.simpleRender(node.nodes)));
            }
            else {
                return React.createElement("li", null,
                    node.data.name,
                    " ");
            }
        }
    }
}
exports.TreeMenuComponent = TreeMenuComponent;
