module.exports = (array, objective) => {
	let index = null;
	array.forEach((item, i) => {
		if(item === objective){
			index = i;
		}
	});
	return index;
}
