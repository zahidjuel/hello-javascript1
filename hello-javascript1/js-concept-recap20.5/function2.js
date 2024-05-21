/* 
১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। 
তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 

*/

function convertCelsiusToFahrenheit(celsiusTemperature) {
    let fahrenheit = ((9 * celsiusTemperature) / 5) + 32;
    return fahrenheit;
}

let celsius = 98.4;
let fahrenheitTemperature = convertCelsiusToFahrenheit(celsius);
console.log(fahrenheitTemperature);

console.log('');

/* 
২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।  

*/

function convertFahrenheitToCelsius(f) {
    let c = (5 * (f - 32)) / 9;
    console.log(parseFloat(c.toFixed(3)));
}

convertFahrenheitToCelsius(209.12);
convertFahrenheitToCelsius(273);


console.log('');

/* 
৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। 
তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 

*/

function findGpa(marks) {
    if (marks < 0 && marks > 100) {
        console.log(marks, 'is Not Spported !');
    }

    else if (marks >= 80 && marks <= 100) {
        console.log(marks, 'is A+');
    }

    else if (marks >= 70 && marks < 80) {
        console.log(marks, 'is A');
    }

    else if (marks >= 60 && marks < 70) {
        console.log(marks, 'is A-');
    }

    else if (marks >= 50 && marks < 60) {
        console.log(marks, 'is B');
    }

    else if (marks >= 40 && marks < 50) {
        console.log(marks, 'is C');
    }

    else {
        console.log(marks, 'is fali');
    }

}

findGpa(10);
findGpa(45);
findGpa(59);
findGpa(70);
findGpa(60);
findGpa(85);

console.log('');

/* 
4.  Calculate the interest. Just try to do it from the angle of how to write it in javascript code if there is a formula.
 */
function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
  }
  
  // Example usage
  const principalAmount = 100; // Replace with your principal amount
  const interestRate = 5;       // Replace with your interest rate
  const timePeriod = 1;         // Replace with the time period in years
  
  const interest = calculateSimpleInterest(principalAmount, interestRate, timePeriod);
  console.log(`The simple interest is: ${interest}`);

  