let x = 15; if (x < 10) { x = x + 3; } else { x = x - 2; } console.log(x);

let result = 10 > "5";
console.log(result);

let score = 75;
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
}
console.log(grade);
console.log(typeof grade);

let foo = null;
console.log(foo);
console.log(typeof foo);

// ternary operator 

// condition ? do something when true : do something when false

let age = 19;
age >= 18 ? console.log("Vote dio") : console.log("vote dioo na");


let price = 500;
const isLeader = true;

if(isLeader === false){
  price = 0;
}
else{
  price = price + 100;
}

console.log(price);


let bookPrice = 120;
const myStudent = false;

bookPrice = myStudent == true ? bookPrice : bookPrice + 100;
console.log(bookPrice); // 220

// Feel free to ignore this one 
bookPrice = myStudent == true ? isLeader === false ? bookPrice / 2 : 600 : bookPrice + 100;

console.log(bookPrice);

// logical operator 

let age1 = 25;
let hasDrivingLicense = true;

// Using logical AND (&&) to check if both conditions are true
if (age1 >= 18 && hasDrivingLicense) {
    console.log("You are allowed to drive.");
} else {
    console.log("You are not allowed to drive.");
}


// Using logical OR (&&) to check if at least one condition is true
let isWeekend = true;
let isHoliday = false;

if (isWeekend && !isHoliday) {
    console.log("You can relax today.");
} else {
    console.log("It's a regular workday.");
}


// Using logical NOT (!) to check if a condition is false
let isRainy = false;

if (!isRainy) {
    console.log("It's not raining, you can go outside.");
} else {
    console.log("It's raining, better stay indoors.");
}


console.log(!0);
console.log(!1);
console.log(!2);
console.log(!4);
console.log(!!10);
console.log(!!!10);