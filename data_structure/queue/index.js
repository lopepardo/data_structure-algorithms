const Queue = require("./Queue")

const Q = new Queue();

console.log("Create a new queue", Q);
console.log("--------------------------------")

Q.enqueue("A");
Q.enqueue("B");
Q.enqueue("C");
Q.enqueue("D");
const NodeE = Q.enqueue("E");
console.log("Add Node E: ", NodeE)
console.log("--------------------------------")

const remove1 = Q.process();
console.log("Process element: ", remove1)
console.log("--------------------------------")

const remove2 = Q.process();
console.log("Process element: ", remove2)
console.log("--------------------------------")

const remove3 = Q.process();
console.log("Process element: ", remove3)
console.log("--------------------------------")

const remove4 = Q.process()
console.log("Process element: ", remove4)
console.log("--------------------------------")

const remove5 = Q.process()
console.log("Process element: ", remove5)
console.log("--------------------------------")

const remove6 = Q.process()
console.log("Process element: ", remove6)
console.log("--------------------------------")
