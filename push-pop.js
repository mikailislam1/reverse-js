// push and pop

var numbers = [78, 45, 98, 49];
console.log(numbers);

// add element by push to last position of an array
// use push to add element to an array as the last element array(first in last out)
numbers.push(63);
console.log(numbers);
numbers.pop();
var element = numbers.pop();

// numbers.pop();
// numbers.pop();
// numbers.pop();
console.log(numbers);
console.log(element);

var friends = ['toriqul', 'ratul', 'ashik',];
console.log(friends);
friends.push('shanto');
friends.push('akib');
friends.push('akash');
console.log(friends);

// use pop to get last element(last in first out)
var colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];
console.log(colors);
colors.push('black');
colors.push('gray')
console.log(colors);
colors.pop('black');
colors.pop('gray')
console.log(colors);
