"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tree_menu_1 = require("./tree-menu");
const array = [
    {
        id: 1,
        name: "Node1"
    },
    {
        id: 2,
        name: "Node12",
        parent: 1
    },
    {
        id: 3,
        name: "Node111",
        parent: 2
    },
    {
        id: 4,
        name: "Node13",
        parent: 1
    },
    {
        id: 5,
        name: "Node2"
    },
    {
        id: 6,
        name: "Node3",
        parent: 3
    }
];
new tree_menu_1.TreeMenu(array);
