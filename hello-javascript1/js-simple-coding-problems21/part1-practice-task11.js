// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.
function celciusToFahrenheit(c) {
    let F = (9 * c / 5) + 32;
    console.log(F);
}

celciusToFahrenheit(98);
celciusToFahrenheit(104);
celciusToFahrenheit(78);

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

function countOccurrences(numbers, target) {
    let count = 0;
    // Iterate through the array
    for (let i = 0; i < numbers.length; i++) {
        // If the current element matches the target number, increment the count
        if (numbers[i] === target) {
            count++;
        }
    }
    // Return the count of occurrences
    return count;
}

// Example usage
let numbers = [5, 6, 11, 12, 98, 5];
let targetNumber = 5;
let occurrences = countOccurrences(numbers, targetNumber);
console.log("Output:", occurrences); // Output: 2
console.log(countOccurrences(numbers, 25));

// Task-3:
// Write a function to count the number of vowels in a string.
function countVowels(str) {
    // Convert the string to lowercase to make the counting case-insensitive
    str = str.toLowerCase();
    
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    // Initialize a counter to keep track of the number of vowels
    let count = 0;
    
    // Iterate through each character in the string
    for (let char of str) {
        // If the character is a vowel, increment the counter
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    // Return the total count of vowels found
    return count;
}

// Example usage:
const str = "Hello, World!";
console.log("Number of vowels:", countVowels(str)); // Output: 3
console.log(countVowels('Dhaka , Juel'));

// Task-4:
// Write a function to find the longest word in a given string.


let myLove =  "I am learning Programming to become a programmer";
let loveArray = (myLove.split(' '));
let longWord = '';
let max_length = 0;
for(const word of loveArray){
    if(word.length > max_length){
        max_length = word.length;
        longWord = word;
    }
}

console.log(longWord);

function findLongestWord(str) {
    // Split the string into an array of words
    const words = str.split(" ");
    
    // Initialize variables to store the longest word and its length
    let longestWord = "";
    let maxLength = 0;
    
    // Iterate through each word in the array
    for (let word of words) {
        // Remove any non-alphanumeric characters from the word
        const cleanedWord = word.replace(/[^A-Za-z0-9]/g, '');
        
        // Check if the length of the cleaned word is greater than the current maxLength
        if (cleanedWord.length > maxLength) {
            // If so, update the maxLength and longestWord
            maxLength = cleanedWord.length;
            longestWord = cleanedWord;
        }
    }
    
    // Return the longest word found
    return longestWord;
}

// Example usage:
const str1 = "Hello, World! This is a test string to find the longest word.";
console.log("Longest word:", findLongestWord(str1)); // Output: "longest"
console.log("Longest word:", findLongestWord(myLove)); 

// Task-5:
// Generate a random number between 10 to 20.

console.log(Math.random()* 10);
console.log(Math.round(Math.random()* 10));

console.log("..............");

for (let i = 0; i < 20; i++) {
    let randomNumber = Math.round(Math.random() * 6);
    console.log(randomNumber);
}

console.log("");

// Generating random integer in range [x, y]
// Both values are inclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // random int between 5 and 10
  var random_num = getRandomInt(5, 10);
  console.log(random_num);
  
  // random int between 5 and 10
  var random_num = getRandomInt(0, 100);
  console.log(random_num);




  