const array = new Array(5);
console.log(array);
console.log(Array.isArray(array));
console.log(typeof array); // Object 

const num = "Pinkey Chowdhury";
const district = `Noakhali`;
console.log(typeof district)

const thana = new String('zahid');
console.log(thana);
console.log(typeof thana); // Object 

// string is immutable >>> not changeable

const capital = 'Dhaka';
console.log(capital);
console.log(capital.length);
console.log(capital[3]);

const isMyLove = 'Pinkey Chowdhury';
console.log(isMyLove.toLowerCase());
console.log(isMyLove.toUpperCase());

const book = "Chemistry";
const subject = 'chemistry'

if (book.toLowerCase() === subject.toLowerCase()) {
    console.log('I can get A+ in Chemistry');
}
else {
    console.log('Fail the Exam');
}
//.trim()  // remove whitespace

const drink = ' water'
const liquid = 'Water ';

if (drink.toLowerCase().trim() === liquid.toLowerCase().trim()) {
    console.log('Panir Opor nam JIbon');
}
else {
    console.log("Pani ami Khabo na...");
}

const amarJanPakhi = "Pinkey Chowdhury";
console.log(amarJanPakhi[4]);
console.log(amarJanPakhi.indexOf('z'));
console.log(amarJanPakhi.indexOf('C'));
console.log(amarJanPakhi.includes("P"));
console.log(amarJanPakhi.includes("PinK"));
console.log(amarJanPakhi.slice(2, 5));
console.log(amarJanPakhi.substring(3, 9));


const sentence = "I am a good student";
console.log(sentence);
console.log(sentence.split()); // convert string to array
console.log(sentence.split(''));
console.log(sentence.split(' '));

const array1 = ['I', 'am', 'a', 'good', 'student'];
console.log(array1.join(' ')); // convert array to string 
const arr2 = ['2', '4', true, 'false'];
console.log(array1.concat(arr2));

const fname = 'Zahid';
const lname = 'Juel';
console.log(fname.concat(' ').concat(lname));












