// var destinations = ['england', 'ireland', 'brazil', 'argentina'];
// console.log(destinations);
// destinations[2] = 'thailand';
// var index = destinations.indexOf('ireland');
// console.log(index);

// destinations.push('egypt');
// destinations.pop();
// console.log(destinations);

// practice problem 1
var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits);
var index = fruits.indexOf('Banana');
console.log(index);
fruits[1] = 'Mango';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);

// practice problem 2

//  you and your friends tom, jane, peter and john got their final exam results. Your total score is 85, toms total score is 66k jane's total score is 95, peter's total score is 56 and jon's total score is 40.
 
// var marksMyself = 85;
// var marksTom = 66;
// var marksJane = 95;
// var marksPeter = 56;
// var marksJohns = 40;

// if(marksMyself >= 80){
//     console.log('A')
// }
// else if(marksMyself >= 60){
//     console.log('B')
// }
// else if(marksMyself >= 50){
//     console.log('C')
// }
// else if(marksMyself >=40){
//     console.log('D')
// }
// else{
//     console.log('F')
// }

// from chatgpt
function calculateGrade(score) {
    if (score >= 80) {
      return "A";
    } else if (score >= 60) {
      return "B";
    } else if (score >= 50) {
      return "C";
    } else if (score >= 40) {
      return "D";
    } else {
      return "F";
    }
  }
  
  const yourScore = 85;
  const tomScore = 66;
  const janeScore = 95;
  const peterScore = 56;
  const johnScore = 40;
  
  const yourGrade = calculateGrade(yourScore);
  const tomGrade = calculateGrade(tomScore);
  const janeGrade = calculateGrade(janeScore);
  const peterGrade = calculateGrade(peterScore);
  const johnGrade = calculateGrade(johnScore);
  
  console.log(`Your grade: ${yourGrade}`);
  console.log(`Tom's grade: ${tomGrade}`);
  console.log(`Jane's grade: ${janeGrade}`);
  console.log(`Peter's grade: ${peterGrade}`);
  console.log(`John's grade: ${johnGrade}`);

//  practice problem 3

// you are given three numbers 13, 79 and 45. write a program that will print the largest number using if-else
var x = 13;
var y = 79;
var z = 45;

if(x > (y && z)){
    console.log('x is the largest number')
}
else if(y > (x && z)){
    console.log('y is the largest number')
}
else{
    console.log('z is the largest number')
}

// you are given a triangle with the sides 9, 8, 9. write a program to check whether a triangle is isosceles or not using if-else.

var side1 = 9;
var side2 = 8;
var side3 = 9;

if(side1 == side2 || side2 == side3 || side3 == side1){
    console.log('the triangle is isosceles')
}
else{
    console.log('none')
}