// array index
var numbers = [23, 45, 23, 64, 56, 78, 44, 66, 89, 98, 97, 34, 35, 45, 64, 55, 22, 64];
// console.log(numbers);
// console.log(numbers[5]);
console.log(numbers);
console.log(numbers.length);



// 1. get element by index
var element = numbers[0];
console.log(element);

// 2. set element value by index
numbers[3] = 10;
numbers[1] = 99;
console.log(numbers[11]);
console.log(numbers);

// 3. find index of an element by indexOf
var index = 'index of (78):';
console.log(index);
var positionIndex = numbers.indexOf(78);
console.log(positionIndex);

// if there is no element in array that we search,then it's indexOf is (-1)
var index999 = 'index of (999):';
var positionIndex = numbers.indexOf(999);
console.log(positionIndex);
