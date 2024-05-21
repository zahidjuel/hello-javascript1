// Task-1:
// Count how many times a string has the letter a

const sentence1 = " I am a student. Ami jarin ke valobashi";

let count = 0;

for (let i = 0; i < sentence1.length; i++) {
    // console.log(secntence1[i]);
    if (sentence1.toLowerCase()[i] === 'a') {
        count++;
    }
}

console.log(count);

// Task-2:
// Count how many times a string has the letter a or A

const sentence2 = "Jarin Ami tomar preme Pore gelAm .Jarin I love You"

let count1 = 0;

for (let i = 0; i < sentence2.length; i++) {
    // console.log(secntence1[i]);
    if ((sentence2[i] === 'a') || (sentence2[i] === 'A')) {
        count1++;
    }
}
console.log(count1);


// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u

const sentence3 = "Jarin Am tomar preme Pore gelAm .Jarn  love You"
let str = sentence3.toLowerCase();

if (str.includes('a') && str.includes('e') && str.includes('i') && str.includes('o') && str.includes('u')) {
    console.log("True");
}
else {
    console.log('False');
}

// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.


let myLove = "Pinkey Chowdhury";
console.log(myLove.replace('Pinkey', "Jarin"));
console.log(myLove);

let string1 = "piku is my x but jarin is my XX"
let newstring = string1.replaceAll('x', 'y')
    .replaceAll('X', 'Y');
console.log(newstring);
// console.log(string1.replaceAll('X', "Y"));

let originalString = "Using JS, you can change the color of a webpage's background, text, and elements.";

let newString = originalString
    .replace("color", "colour")
    .replace("JS", "JavaScript");

console.log(newString);

// Task-5:
// Capitalize Every first Letter of each word in a String

const publication = "freeCodeCamp";
const firstCapitalize = publication[0].toUpperCase() + publication.substring(1);
console.log(firstCapitalize);


const student = 'I am a good Student';
const words = student.split(" ");
console.log(words);

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    // console.log(words[i]);
}
console.log(words.join(' '));



var person = {};
person.name = "John";
person.age = 30;
console.log(person);

let string = "Mississippi";
console.log(string.indexOf("i", 3));

const myObject = {
    a: 1,
    b: 2,
    c: 3
};

for (let prop in myObject) {
    console.log(myObject[prop]);
}


const x = ""
// console.log(x.length);

if (!x.length) {
    console.log("Hey")
} else {
    console.log("Hi")
}








