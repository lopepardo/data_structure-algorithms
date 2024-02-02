//const linearSearch = require("./LinearSearch.js");
const binarySearch = require("./BinarySearch.js");

const quickSort = require("../sorting/QuickSort");

const array = [4,27,51,65,33,28,1,14,42,8,74,2,94,4];
const element = 1;

// Linear search
//const index = linearSearch(array, element);

//Binary serach
const sortedArray = quickSort(array);
const index = binarySearch(sortedArray, element);

console.log(`El elemento ${element} se encuentra en la posición ${index}`);
