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
