const BinarySearchTree = require("./BinarySearchTree");

const BST = new BinarySearchTree();

console.log("Create a new binary search tree", BST);
console.log("------------------------------------");

BST.insert(35);
BST.insert(21);
BST.insert(47);
BST.insert(3);
BST.insert(6);
BST.insert(25);
BST.insert(54);
BST.insert(36);
//BST.insert(36);
BST.insert(40);

BST.remove(35);

console.log("New binary search tree --> ", BST)
