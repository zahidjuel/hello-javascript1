/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

var burgerPrice = 500;
if (burgerPrice > 500) {
    console.log("Tumi ekta free coke paiba!!!")
}
else {
    console.log("Please pay 30 Tk...");
}

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

var weight = 66;
var height = 1.76784;
var BMI = (weight / (height * height));
console.log(BMI);

if (BMI < 18.5) {
    console.log("you are underweight.");
}
else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("you are normal.");
}
else if (BMI >= 25 && BMI <= 29.9) {
    console.log("you are overweight.")
}
else {
    console.log("You are obese..");
}

console.log(" ");


/***

Grade Calculator:

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

var myScore = 92;
var freindsScore = 65;

if (myScore > 80) {
    if (freindsScore > 80) {
        console.log("Chol bondhu lunch khai ....");
    }
    else if ((freindsScore < 80) && (freindsScore >= 60)) {
        console.log("Good luck bondhu.. Next time");
    }
    else if ((freindsScore < 60) && (freindsScore >= 40)) {
        console.log("keep your friend's message unseen.");
    }
}
else {
    console.log(" I am depressed. Go to home & sleep");
}

console.log(" ");

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

var num1 = 9;
var num2 = 10;
var result;

if (num1 > num2) {
    result = num1 * 2;
}
else {
    result = num1 + num2;
}

console.log(result);

var n1 = 16;
var n2 = 10;
var r;
n1 > n2 ? r = n1 * 2 : r = n1 + n2;
console.log(r);

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var ticketFees = 800;
var age = 70;
var studentName = " ";
console.log(typeof (studentName));
if (age < 10) {
    ticketFees = 0;
}

else if (age >= 10 && age < 25 && studentName) {
    ticketFees = (50 * ticketFees) / 100;
}

else if (age >= 60) {
    ticketFees = (85 * ticketFees) / 100;
}
else {
    ticketFees = ticketFees;
}

console.log("Bus Fare : " + ticketFees);

