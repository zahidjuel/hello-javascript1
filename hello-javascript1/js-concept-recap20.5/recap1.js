/* 
১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে।  

*/

var myName = 'Zahid Juel'; // string variable
var isHappy = true; // boolean variable
let number = 45; // numeric variable
const author = 'Jhankar Mahbub'; // string variable

/* 
২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে  

*/

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

console.log('');

/* 
৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 

*/

for (let i = 50; i <= 80; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

console.log('');

/* 
৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো

*/

function addNumber(num1, num2, num3) {
    let addition = num1 + num2 + num3;
    console.log(addition);
}

addNumber(20, 24, 16);
addNumber(45, 15, 25);

console.log('');
