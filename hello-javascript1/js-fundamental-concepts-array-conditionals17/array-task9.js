// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

const fruits = ["apple", "Banana", "Orange", "Mango", "Lemon"];
console.log(fruits[3]);

fruits[2] = "Jambura";
console.log(fruits);


// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

const ghurteJabo = ["Coxs-Bazar", "Rangamati", "Sajek"];
ghurteJabo.push("Kashmir");
ghurteJabo.push("Chennai", "Switch-Zerland");
console.log(ghurteJabo);
console.log(ghurteJabo[ghurteJabo.length - 1], ghurteJabo[ghurteJabo.length - 2]);

ghurteJabo.pop();
console.log(ghurteJabo);


// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.


const books = ["ICT", "Physics", "Math", 'JS'];
console.log(books.includes("JS"));
console.log(books.includes("javascript"));


// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

var num;
console.log(typeof (num));
var num1 = null;
console.log(typeof (num1));
var isPikuLOveMe = true;
console.log(typeof (isPikuLOveMe));

console.log(Array.isArray(isPikuLOveMe));
console.log(Array.isArray(books));

const myLove = 'Pinkey Chowdhury';
console.log(isNaN(myLove));


// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

console.log(books);
console.log(ghurteJabo);
const addArray = books.concat(ghurteJabo);
console.log(addArray);