"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("./node");
class TreeMenu {
  constructor(data) {
    this.root = {};
    // flatter root
    this.flattenRoot = {};
    // array root
    this.arrRoot = [];
    const ids = data.map(d => d.id);
    let unique = [];
    ids.forEach(id => {
      if (!unique.includes(id)) {
        unique.push(id);
      }
    });
    if (unique.length !== ids.length) {
      throw new Error("Duplicate id");
    }
    // clone data
    this.flattenRoot = data.reduce((acc, c) => {
      acc[c.id] = c;
      return acc;
    }, {});
    Object.keys(this.flattenRoot).forEach(k => {
      this.flattenRoot[k] = new node_1.Node(this.flattenRoot[k]);
    });
    Object.keys(this.flattenRoot).forEach(k => {
      if (this.flattenRoot[k].data.parent) {
        this.flattenRoot[this.flattenRoot[k].data.parent].add(
          this.flattenRoot[k]
        );
      } else {
        this.root[k] = this.flattenRoot[k];
        this.arrRoot.push(this.flattenRoot[k]);
      }
    });
  }
}
exports.TreeMenu = TreeMenu;
