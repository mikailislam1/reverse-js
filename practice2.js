// write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangle of a student.
var mathematics = 75.25;
mathematics = mathematics.toFixed(2);
mathematics = parseFloat(mathematics);
console.log(mathematics);

var biology = 65;
biology = biology.toFixed(2);
biology = parseFloat(biology);
console.log(biology);

var chemistry = 80;
chemistry = chemistry.toFixed(2);
chemistry = parseFloat(chemistry);
console.log(chemistry);

var physics = 33.45;
physics = physics.toFixed(2);
physics = parseFloat(physics);
console.log(physics);

var bangle = 99.50;
bangle = bangle.toFixed(2);
bangle = parseFloat(bangle);
console.log(bangle);

var totalMarks = (mathematics + biology + chemistry + physics + bangle);
totalMarks = totalMarks.toFixed(2);
totalMarks = parseFloat(totalMarks);
console.log(totalMarks)

var subject = 5;
subject = parseInt(subject);
console.log(subject);

var average = totalMarks / subject;
average = average.toFixed(2);
average = parseFloat(average);
console.log(average);