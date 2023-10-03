// break in javascript
for(var i = 0;i <= 20;i++){
    console.log(i);
    if(i>10){
        break;
    }
}

// break to while loop

console.log("*BREAK TO THE WHILE LOOP IN JAVASCRIPT*")
var roastGiven = 0;
while(roastGiven < 20){
    console.log("give me a roast. Please!!!");
    roastGiven++;
    if(roastGiven > 5){
        break;
    }
}

// 

console.log('break in array');
var subjects = ['physics', 'chemistry', 'biology', 'higher-mathematics', 'english', 'bangle', 'ict'];
for(var i = 0;i < subjects.length;i++){
    var subject = subjects[i];
    if(subject == 'higher-mathematics'){
        break;
    }
    console.log(subject);
}

// 
console.log('marks in exam implement break');
var marks = ['65', '70', '72', '80', '50', '85', '90'];
for(var i = 0;i < marks.length;i++){
    var mark = marks[i];
    console.log(mark);
    if(mark > 80){
        break;
    }
}

// 

console.log('implement break to salary');
var salaries = ['500', '1000', '1500', '2000', '2500', '3000'];
for(var i = 0;i < salaries.length;i++){
    var salary = salaries[i];
    console.log(salary);
    if(salary >= 1500){
        break;
    }
}