// continue in javascript

console.log('implement continue in for loop to the array')
var  numbers = ['30', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '10', '15', '20', '25'];
for(var i = 0;i < numbers.length;i++){
    var number = numbers[i];
    console.log(number);
    if(number > 60){
        break;
    }
}

console.log('implement continue in for loop to the array')
var  numbers = ['30', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '10', '15', '20', '25'];
for(var i = 0;i < numbers.length;i++){
    var number = numbers[i];
    
    if(number > 60){
        continue;
    }
    console.log(number);
}