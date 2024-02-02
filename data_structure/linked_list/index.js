const LinkedList = require("./LinkedList")

const LL = new LinkedList();

console.log("Create a new linked list", LL);
console.log("--------------------------------")

const NodeA = LL.insert("A", 0);
console.log("Add Node A: ", NodeA)
console.log("--------------------------------")

const NodeB = LL.insert("B", 1);
console.log("Add Node B: ", NodeB)
console.log("--------------------------------")

const NodeC = LL.insert("C", 1);
console.log("Add Node C: ", NodeC)
console.log("--------------------------------")

const NodeD = LL.insert("D", 2);
console.log("Add Node D: ", NodeD)
console.log("--------------------------------")

const findNodeX = LL.find("X")
console.log("Node X is: ", findNodeX)
console.log("--------------------------------")

//const popTail = LL.pop()
//console.log("Delete Last Node: ", popTail)
//console.log("--------------------------------")

//const shiftHead = LL.shift()
//console.log("Delete first Node: ", shiftHead)
//console.log("--------------------------------")

const removeNode = LL.remove(1)
console.log("Delete C Node: ", removeNode)
console.log("--------------------------------")

