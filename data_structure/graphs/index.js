const Graph = require("./Graph.js");

const G = new Graph();

G.addVertex("1");
G.addVertex("2");
G.addVertex("3");
G.addVertex("4");
G.addVertex("5");
//G.addVertex("6");

G.addEdge("1", "2");
G.addEdge("1", "3");
G.addEdge("1", "4");
G.addEdge("2", "4");
G.addEdge("2", "5");
G.addEdge("3", "4");
G.addEdge("4", "5");
//G.addEdge("5", "6");

//G.printGraph();
//G.deleteVertex("6");
//G.deleteEdge("5", "6");

//console.log(G.existVertex("6"));

//console.log(G.getAllVerices());

//console.log(G.getVerticesDegree());

//console.log(G.areConnected("3", "2"))

//console.log(G.depthFirstSearch("1", "3"));

console.log(G.breadthFirstSearch("1", "3"));

G.printGraph();
