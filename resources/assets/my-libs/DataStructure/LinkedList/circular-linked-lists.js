"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("./node");
class CircularLinkedLists {
    constructor(array) {
        this.head = new node_1.Node(array[0]);
        array.shift();
        let tmp = this.head;
        array.forEach(element => {
            tmp.next = new node_1.Node(element);
            tmp.next.prev = tmp;
            tmp = tmp.next;
        });
        tmp.next = this.head;
        this.head.prev = tmp;
        this.current = this.head;
    }
    next() {
        this.current = this.current.next;
    }
    prev() {
        this.current = this.current.prev;
    }
}
exports.CircularLinkedLists = CircularLinkedLists;
