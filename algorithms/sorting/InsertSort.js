module.exports = (elements) => {
	const elementsSize = elements.length;

	for(let i = 0;i < elementsSize; i++){
		// Se almacena la posición y el valor del elemento actual
		let pos = i;
		let value = elements[i];

		// Hasta que no esté en la primera posición
		// y el valor del elemento actual sea menor que el elemento en la posición anterior
		// Se irá moviendo el arreglo organizado hacia la derecha.
		while(i > 0 && value < elements[pos - 1]){
			elements[pos] = elements[pos - 1];
			pos = pos - 1;
		}

		// Se inserta el elemento actual en la posición correcta.
		elements[pos] = value;
	}
	return elements;
}
