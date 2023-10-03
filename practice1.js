// practice problem 1
/***
 * Harry's mom gave him money and asked him to buy some oranges and apples.
 *  Write a program to help Harry calculate how much money the shopkeeper will return
 * */ 

var moneyFromMother = 1000;
console.log(moneyFromMother);

var applePrice = 400;
var applesQuantityKg = 1;
var orangePrice = 300;
var orangesQuantityKg = 1;
var totalCost = (applePrice * applesQuantityKg) + (orangePrice * orangesQuantityKg);
console.log(totalCost);

var shopkeeperReturn = moneyFromMother - totalCost;
console.log(shopkeeperReturn);