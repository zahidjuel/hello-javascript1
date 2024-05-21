// Task 1 : 
// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reverse = [];

for(const color of colors){
    reverse.unshift(color);
}

console.log(reverse);

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];

const evenNumbers = [];

for(const num of numbers){
    if(num % 2 == 0){
        evenNumbers.push(num);
    }
}

console.log(evenNumbers);


// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.
var names = ['Tom', 'Tim', 'Tin', 'Tik'];

let fullName = '';
for(const name of names){
    fullName =  fullName + name;
}

console.log(fullName);

// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person';

const word_array = statement.split(' ');
const word_array_revese = word_array.reverse();

let newString = '';

for(word of word_array_revese){
    newString = newString + ' ' + word;
    // console.log(newString);
}

console.log(newString);


