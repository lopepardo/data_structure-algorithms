module.exports = (elements) => {
    const elementsSize = elements.length;

	// Iterar sobre todos los elementos del arreglo
    for(let i = 0;i < elementsSize; i++){
		// Iterar sobre los elementos 1 desorganizados
		for(let j = 0; j < elementsSize - i - 1; j++){
			// Comparar el elemento actual con el adyacente
			if(elements[j] > elements[j + 1]) {
				// Intercambiar elementos
				const temp = elements[j + 1];
				elements[j + 1] = elements[j];
				elements[j] = temp;
			}
		}
    }
    return elements;
}
