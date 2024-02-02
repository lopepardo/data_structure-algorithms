module.exports = (elements) => {
	const elementSize = elements.length;

	for(let i = 0; i < elementSize - 1; i++){
		// Se asume que el elemento actual es el mínimo provisional
		let minIndex = i;

		// Buscar el índice del elemento mínimo en la parte no ordenada
		for(let j = i + 1; j < elementSize; j++){
			if(elements[j] < elements[minIndex]) minIndex = j;
		}

		// Intercambiar el mínimo provicional con el elemento actual
		if (minIndex !== i) {
			let temp = elements[i];
			elements[i] = elements[minIndex];
			elements[minIndex] = temp;
		}
	}
	return elements;
}
