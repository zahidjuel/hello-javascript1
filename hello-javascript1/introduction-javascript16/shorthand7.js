// variable declaration

var tomatoPrice = 25;

// variable value update
tomatoPrice = 35;

console.log(tomatoPrice);

// add something to the previous value

var price1 = 12;
var price2 = 22;

// set a new value
price1 = 45;
price1 = price1 + 10; // 55
console.log(price1);

// addition to the same variable shorthand
// += means : adding some existing value

price1 += 10; // price1 = price1 + 10; // 65
price2 = 30;
price2 -= 15; // price2 = price2 - 15; // 15
console.log(price2);

price1 *= 2; // price1 = price1 * 2; // 130
console.log(price1);

price2 /= 5; // price2 = price2 / 5; // 3
console.log(price2);

// ++ means adding 1 to the existing value.
var age = 22;
age++; // age = age +1; // 23
console.log(age);

// -- means deducting 1 to the existing value.
age--; //age = age - 1; //22
console.log(age);
age -= 1; // 21
console.log(age);

const num = 50 / 0;
console.log(num);

const num1 = -50 / 0;
console.log(num1);