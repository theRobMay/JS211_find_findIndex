const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));