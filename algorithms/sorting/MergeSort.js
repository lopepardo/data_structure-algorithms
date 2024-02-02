const mergeSort = (elements) => {
	const elementsSize = elements.length;

	// El arreglo ya está ordenado si tiene 0 o 1 elemento (caso base de la recursividad)
	if(elementsSize === 1) {
		return elements;
	}

	// Dividir el arreglo en dos mitades
	// Llamar recursivamente a mergeSort en ambas mitades
	const half = Math.floor(elementsSize / 2);
	const left = mergeSort(elements.slice(0, half));
	const right = mergeSort(elements.slice(half));

	// Combinar las dos mitades ordenadas
	return merge(left, right);
}

// Función auxiliar para combinar dos arreglos ordenados
const merge = (left, right) => {
	const result = [];

	// Comparar elementos de left y right, y agregar el menor al resultado
	while(!!left.length && !!right.length){
		if(left[0] > right[0]){
			result.push(right[0]);
			right.shift();
		} else {
			result.push(left[0]);
			left.shift();
		}
	}

	// Agregar los elementos restantes de left (si los hay)
	while(!!left.length){
		result.push(left[0]);
		left.shift();
	}

	// Agregar los elementos restantes de right (si los hay)
	while(!!right.length){
		result.push(right[0]);
		right.shift();
	}

	return result;
}


module.exports = (elements) => mergeSort(elements);
