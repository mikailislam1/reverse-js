// array loop

/* for(var i = 0; i < 10; i++){
    console.log(i);
} */

// target: display every elements of an array
var numbers = [45, 87, 89, 56, 32, 51, 25];

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    console.log(number);
}

// for loop with array
console.log('lets do it')
var students =  ['4321', 'ARAFAT', 'RASEL', 'FORHAD', 'SINHA', 'SAKIN', 'MAMUN', 'RAHAT', 'VABNA', 'NUSRAT', 'NIROB', 'MITUL', 'MAHI', 'AURKO', 'DEEP', 'JEEM', 'ORID', 'NILOY', 'SABBIR', 'RIANTA', 'RIONTI', 'MESBA'];

for(var i = 0; i < students.length; i++){
    var student = students[i];
    console.log(student);
}

// check array with for loop

console.log('lets check items on my table')
var items = ['router', 'mouse', 'keyboard', 'mousepad', 'desktop', 'pen', 'paper'];

for(var i = 0;i < items.length;i++){
    var item = items[i];
    console.log(item);
}