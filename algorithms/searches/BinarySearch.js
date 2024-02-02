const binarySearch = (array, init, final, objective) => {
	// El indice inferior sobrepasó el superior. (1° caso base recursión)
	// No se encontró el elemento en el arreglo.
	if(init > final){
		return null;
	}

	// Obtenemos la mitad del arreglo (indice y valor)
	const mid = Math.ceil(init + (final - init) / 2);
	const midValue = array[mid];

	// El valor en la posición media es igual al objetivo. (2° caso base recursión)
	// Se encontra el elemento en el arreglo.
	if(midValue === objective) return mid;

	// Dependiendo, de si el valor en la posición media es menor o mayor al objetivo,
	// se recalcula nuevamente el inicio o final y se llama a la función de manera recursiva.
	if(midValue > objective){
		return binarySearch(array, init, mid - 1, objective);
	}else{
		return binarySearch(array, mid + 1, final, objective);
	}
}

const main = (array, objective) => {
	const arraySize = array.length;
	return binarySearch(array, 0, arraySize - 1, objective);
}

module.exports = (array, element) => main(array, element);
