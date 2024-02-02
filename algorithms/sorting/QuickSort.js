const quickSort = (elements) => {
	const elementsSize = elements.length;

	// El arreglo ya está ordenado si tiene 0 o 1 elemento. (Caso base de la recursión)
	if(elementsSize <= 1){
		return elements;
	}

	// Elegir un elemento pivote
	let marker = -1;
	const pivotValue = elements[elementsSize - 1];

	// Ordena los elementos menores al pivote a la izquiera y mayores a la derecha.
	for(let index = 0; index < elementsSize; index++){
		if(elements[index] <= pivotValue){
			marker++;
			if(index > marker){
				[elements[index], elements[marker]] = [elements[marker], elements[index]];
			}
		}
	}

	// Llamar recursivamente a quickSort en ambas particiones
	const orderedLeft = quickSort(elements.slice(0, marker));
	const orderedRight = quickSort(elements.slice(marker + 1));

	// Retornar elementos oredenados
	return [...orderedLeft, pivotValue, ...orderedRight];
}

module.exports = (elements) => quickSort(elements);
