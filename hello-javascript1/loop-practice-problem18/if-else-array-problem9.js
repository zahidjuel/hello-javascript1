/* 
problem : 1  

var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of 'Banana'and replace 'Banana' with 'Mango'.
b) Remove 'Orange' and add 'watermelon'.

 */

var fruits = ['Apple', 'Banana', 'Orange'];

var positionIndex = fruits.indexOf('Banana');
console.log(positionIndex);

fruits[1] = 'Mango';
console.log(fruits[1]);
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push('Watermelon');
console.log(fruits);

console.log(' ');

/* 
problem : 2
write a program to find you and your friends grades using if-else.

sample input:

marks your & your friends :
juel = 85, Tom = 66, Jenne = 95, peter = 56, john = 40.

grade chart: 

80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less <= F grade

*/

var marks = 66;

if (marks > 100 || marks < 0) {
    console.log('Not Supported!!!');
}
else if (marks == 80 || (marks > 80 && marks <= 100)) {
    console.log('A - Grade');
}
else if (marks == 60 || (marks > 60 && marks < 80)) {
    console.log('B - Grade');
}
else if (marks == 50 || (marks > 50 && marks < 60)) {
    console.log('C - Grade');
}
else if (marks == 40 || (marks > 40 && marks < 50)) {
    console.log('D - Grade');
}
else if (marks == 39 || (marks < 39 && marks >= 10)) {
    console.log('F - Grade');
}
else {
    console.log('Red zone a student. 100 % Fail !!!');
}

console.log(' ');

/* 
problem :3  
Print the largest number using if-else

sample input:
13, 79, 45

Output:
79
*/

var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2 && num1 > num3) {
    console.log('Largest number = ' + num1);
}
else if (num2 > num1 && num2 > num3) {
    console.log('Largest number = ' + num2)
}
else if (num3 > num1 && num3 > num2) {
    console.log('Largest number= ' + num3);
}
else {
    console.log('The numbers are equal !!!');
}

console.log(' ');

/*
problem :3  
Print the largest number using nested if-else

sample input:
13, 79, 45

Output:
79 
*/

var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2) {
    if (num1 > num3) {
        console.log('Largest number = ' + num1);
    }
    else {
        console.log('Largest number = ' + num3);
    }
}
else if (num2 > num3) {
    if (num2 > num1) {
        console.log('Largest number = ' + num2);
    }
    else {
        console.log('Largest number = ' + num1);
    }
}
else if (num3 > num1) {
    if (num3 > num2) {
        console.log('Largest number = ' + num3);
    }
    else {
        console.log('Largest number = ' + num2);
    }
}
else {
    console.log('The numbers are equal !!!');
}

console.log(' ');

/* 
problem: 3  
Print the largest number using nested if-else

sample input:
14, 15, 16

Output:
79
*/

var num1 = 14;
var num2 = 15;
var num3 = 16;

if (num1 > num2) {
    if (num1 > num3) {
        console.log('Largest number = ' + num1);
    }
    else {
        console.log('Largest number = ' + num3);
    }
}
else {
    if (num2 > num3) {
        console.log('Largest number = ' + num2);
    }
    else if (num3 > num1) {
        console.log('Largest number = ' + num3);
    }
    else {
        console.log('The numbers are equal !!!');
    }
}

console.log(' ');
/* 
problem : 4
write a program to check whether a triangle is isosceles or not using if-else.

Input :
side1 = 9;
side2 = 9;
side3 = 9

output : 
Triangle is Isosceles

*/

var side1 = 2;
var side2 = 3;
var side3 = 4;

if ((side1 + side2 > side3) && (side2 + side3 > side1) && (side3 + side1 > side2)) {
    console.log("This is a triangle");
}
if ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side3 + side1 <= side2)) {
    console.log("This is not a triangle !!!");
}
else if (side1 == side2 && side2 == side3) {
    console.log('The Triangle is equilateral');
}
else if (side1 == side2 || side2 == side3 || side3 == side1) {
    console.log("The Triangle is Isosceles");
}

else {
    console.log("The triangle is scalene");
}