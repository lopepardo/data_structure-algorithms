const Vertex = require("./Vertex");

class Graph {
	constructor(isDirected = false){
		this.vertices = new Map();
		this.isDirected = isDirected;
	}

	get Vertices(){
		return this.vertices;
	}

	addVertex(value){
		const newVertex = new Vertex(value);
		this.vertices.set(value, newVertex);
	}

	addEdge(originValue, targetValue, weight = 1){
		const originVertex = this.vertices.get(originValue);
		originVertex.add(targetValue, weight);

		if(!this.isDirected){
			const targetVertex = this.vertices.get(targetValue);
			targetVertex.add(originValue, weight);
		}
	}

	deleteVertex(value){
		const vertex = this.vertices.get(value);
		const neighbors = vertex.getNeighborsValue();
		neighbors.forEach((neighbor) => this.deleteEdge(value, neighbor));

		this.vertices.delete(value);
	}

	deleteEdge(originValue, targetValue){
		const originVertex = this.vertices.get(originValue);
        originVertex.delete(targetValue);

        if(!this.isDirected){
            const targetVertex = this.vertices.get(targetValue);
            targetVertex.delete(originValue);
        }
	}

	areConnected(originValue, targetValue) {
		const originVertex = this.vertices.get(originValue);
		const neighbors = originVertex.getNeighborsValue();
		return neighbors.includes(targetValue);
	}

	getVerticesDegree(value) {
		const verticesDegree = {};
		for(let [vertex, edges] of this.vertices){
			verticesDegree[vertex] = edges.getNeighborsValue().length;
		}
		return verticesDegree;
	}

	depthFirstSearch(startNodeValue, objective){
		const visited = new Set();

		const dfs_recursive = (vertexValue) => {
			if(visited.size === this.getAllVertices().length){
				return null;
			}

			visited.add(vertexValue);

			const vertex = this.vertices.get(vertexValue);
			const neighbors = vertex.getNeighborsValue();
			for(let neighbor of neighbors){
				if(neighbor === objective) return this.vertices.get(neighbor);
				if(!visited.has(neighbor)){
					dfs_recursive(neighbor);
				}
			}
		}

		return dfs_recursive(startNodeValue);
	}

	breadthFirstSearch(startNode, objective){
		const visited = new Set([startNode]);
		const queue = [startNode];

		while(!!queue.length && visited.size < this.getAllVertices().length){
			const currentVertexValue = queue.shift();

			const vertex = this.vertices.get(currentVertexValue);
			const neighbors = vertex.getNeighborsValue();
			for(let neighbor of neighbors){
                if(neighbor === objective) return this.vertices.get(neighbor);
                if(!visited.has(neighbor)){
					visited.add(neighbor);
					queue.push(neighbor);
                }
            }
		}

		return null;
	}

	existVertex(value){
		return this.vertices.has(value);
	}

	getAllVertices() {
		return [...this.vertices.keys()];
	}

	printGraph(){
		for(let [vertex, edges] of this.vertices){
			console.log(`${vertex} -> ${edges.getNeighborsValue().join(", ")}`);
		}
	}
}

module.exports = Graph;
