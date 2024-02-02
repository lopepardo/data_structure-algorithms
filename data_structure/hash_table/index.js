const HashTable = require("./HashTable");

const HT = new HashTable(3);

console.log("Create a new hash table", HT);
console.log("--------------------------------");

HT.insert("A");
HT.insert("B");
HT.insert("C");
const itemD = HT.insert("D");
console.log("Add item D: ", itemD);
console.log("--------------------------------");

HT.remove("B");
const removeC = HT.remove("C");
console.log("remove item C: ", removeC);
console.log("--------------------------------");

const findD = HT.search("D");
console.log("find D: ", findD);
console.log("--------------------------------");



