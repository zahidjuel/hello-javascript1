// addition , subtraction
var onionPrice = 45;
var eggPrice = 12;

var totalPrice = onionPrice + eggPrice;
var differencePrice = onionPrice - eggPrice;

console.log(onionPrice);
console.log(eggPrice);
console.log(totalPrice);
console.log(onionPrice - eggPrice);
console.log(differencePrice);

// multiplication 

var orangePrice = 15;
var orangeQuantity = 7;
var totalCost = orangePrice * orangeQuantity;
console.log(totalCost);

// division

var totalMoney = 500;
var totalPlayer = 11;
var eachPlayer = totalMoney / totalPlayer;
console.log(eachPlayer);

console.log(50 / 0);
console.log(-50 / 0);

console.log(0.1 + 0.4);
console.log(0.1 + 0.2); //Exception

console.log(' ');

var n1 = 0.1;
var n2 = 0.2;
var sum = n1 + n2;
console.log(sum); // string
console.log(parseFloat(sum.toFixed(1))); // convert sring to  number

console.log(20 + '20');
console.log(20 + 'z');

var penPrice = parseInt('Book');
var bookPrice = 120;
var costPrice = penPrice + bookPrice;
console.log(costPrice);
console.log(typeof(penPrice));