// reverse process of loop

var number = 1;
while(number <= 10){
    console.log(number);
    number++;
}


console.log('reverse process of while loop')
var  num = 30;
while(num >= 1){
    console.log(num);
    num--;
}

// reverse in for loop

console.log('reverse process of for loop')
for(var i = 100;i >= 1;i--){
    console.log(i);
    if(i == 50){
        break;
    }
}