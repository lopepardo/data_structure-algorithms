const Graph = require("../../data_structure/graphs/Graph");
const dijkstra = require("./Dijkstra");

const G = new Graph();

G.addVertex("A");
G.addVertex("B");
G.addVertex("C");
G.addVertex("D");
G.addVertex("E");
G.addVertex("F");
G.addVertex("G");
G.addVertex("H");
G.addVertex("I");
G.addVertex("J");
G.addVertex("K");
G.addVertex("L");
G.addVertex("M");
G.addVertex("N");
G.addVertex("P");

G.addEdge("A","B",8);
G.addEdge("A","D",5);
G.addEdge("A","E",4);

G.addEdge("B","C",3);
G.addEdge("B","E",12);
G.addEdge("B","F",4);

G.addEdge("C","F",9);
G.addEdge("C","G",11);

G.addEdge("D","E",9);
G.addEdge("D","H",6);

G.addEdge("E","F",3);
G.addEdge("E","I",8);
G.addEdge("E","J",5);

G.addEdge("G","K",8);
G.addEdge("G","L",7);

G.addEdge("H","I",2);
G.addEdge("H","M",7);

G.addEdge("I","J",10);
G.addEdge("I","M",6);

G.addEdge("J","K",6);
G.addEdge("J","N",9);

G.addEdge("K","L",5);
G.addEdge("K","P",7);

G.addEdge("L","P",6);

G.addEdge("M","N",2);

G.addEdge("N","P",12);

console.log("Shortest path is -> ", dijkstra(G, "A", "P"));

