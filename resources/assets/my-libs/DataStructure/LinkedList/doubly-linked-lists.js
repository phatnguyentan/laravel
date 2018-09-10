"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("./node");
class DoublyLinkedLists {
  constructor(array) {
    this.data = [...array];
    this.head = new node_1.Node(array[0]);
    array.shift();
    let tmp = this.head;
    array.forEach(element => {
      tmp.next = new node_1.Node(element);
      tmp.next.prev = tmp;
      tmp = tmp.next;
    });
    this.current = this.head;
  }
  next() {
    if (this.isNext()) {
      this.current = this.current.next;
    }
  }
  prev() {
    if (this.isPrev()) {
      this.current = this.current.prev;
    }
  }
  add(node) {
    const tmp = this.current;
    while (this.isNext()) {
      this.current = this.current.next;
    }
    this.current.next = node;
    this.current = tmp;
  }
  isNext() {
    if (this.current.next) return true;
    return false;
  }
  isPrev() {
    if (this.current.prev) return true;
    return false;
  }
}
exports.DoublyLinkedLists = DoublyLinkedLists;
