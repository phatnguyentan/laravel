"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(data) {
        this.data = data;
        this.nodes = [];
    }
    childCount() {
        return this.nodes.length;
    }
    add(node) {
        this.nodes.push(node);
    }
}
exports.Node = Node;
