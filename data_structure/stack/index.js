const Stack = require("./Stack.js")

const S = new Stack(5);

console.log("Create a new stack", S);
console.log("--------------------------------");

S.push("A");
S.push("B");
S.push("C");
S.push("D");
const fullStack = S.push("E");
console.log("Full to stack: ", fullStack);
console.log("--------------------------------");

S.pop();
S.pop();
//S.pop();
//S.pop();
const popElements = S.pop();
console.log("Pop elements: ", popElements);
console.log("--------------------------------")

const topElement = S.top();
console.log("Top element: ", topElement);
console.log("--------------------------------")
