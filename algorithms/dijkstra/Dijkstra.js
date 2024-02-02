// TODO: Refactorizar y usar colas prioritarias.

module.exports = (graph, start, final) => {
	const distances = new Map();
	const visited = new Map();

	const allVertices = graph.getAllVertices();
	allVertices.forEach((vertex) => {
		distances.set(vertex, Infinity);
		visited.set(vertex, false);
	});
	distances.set(start, 0);

	console.log("distaces -> ", distances);
	console.log("visited -> ", visited);

	for(let i = 0; i < allVertices.length; i++){
		let minDistance = Infinity;
    	let currentNodeValue = null;

		allVertices.forEach(vertexValue => {
			if (!visited.get(vertexValue) && distances.get(vertexValue) < minDistance) {
				minDistance = distances.get(vertexValue);
				currentNodeValue = vertexValue;
			}
		});

		visited.set(currentNodeValue, true);

		const vertex = graph.Vertices.get(currentNodeValue);
		const neighbors = vertex.getNeighborsValue();
		for(let neighbor of neighbors){
			const newDistance = distances.get(currentNodeValue) + vertex.getWeightNeighbor(neighbor);
			if(newDistance < distances.get(neighbor)){
				distances.set(neighbor, newDistance);
			}
		}
	}

	let selectNodeValue = final;
	const result = [final];
	while(selectNodeValue !== start){
        const vertex = graph.Vertices.get(selectNodeValue);
        const neighbors = vertex.getNeighborsValue();
		for(let neighbor of neighbors){
			const calculate = distances.get(selectNodeValue) - vertex.getWeightNeighbor(neighbor);
			if(calculate === distances.get(neighbor)){
				selectNodeValue = neighbor;
				result.unshift(neighbor);
			}
		}
	}

	return result;
}
