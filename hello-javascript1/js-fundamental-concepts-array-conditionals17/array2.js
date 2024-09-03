// An array is a collection of similar data elements stored at contiguous memory locations

var picnicFees = [5000, 4000, 450, 150, 340, 567, 867, 432];
console.log(picnicFees);
console.log(picnicFees.length);

var specialPersons = ['Alif', 'Piku', 'Zahid'];
console.log(specialPersons);
console.log(specialPersons.length);

var vowels = ['a', 'e', 'i', 'o', 'u'];
console.log(vowels);
console.log(vowels.length);

var numbers = [1, 2, 40, 99, 78, 14, 12, 45, 67];
console.log(numbers);
console.log(numbers.length);

const mixedArray = [12, 32, 'zahid', true, false, 45];
console.log(mixedArray);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray.indexOf(false));
console.log(mixedArray.length);

mixedArray[5] = 'Pinkey Chowdhury';
console.log(mixedArray);
const zahid = mixedArray.pop();
console.log(mixedArray);
console.log(zahid);

const juel = mixedArray.push("Jarin");
console.log(mixedArray);
console.log(mixedArray[mixedArray.length - 1]);

// Define an array
let myArray = [2, 3, 4, 5];

const removeArray = myArray.shift();
console.log(myArray);
console.log(removeArray);
// Add a new element to the beginning of the array
myArray.unshift(1);
console.log(myArray)

// Print the newly added element
console.log("Newly added element:", myArray[0]);


console.log(mixedArray);
console.log(mixedArray.includes('Jarin'));
console.log(mixedArray.includes(121));

if (mixedArray.includes('Jarin')) {
    console.log('I will marry Jarin');
}
else {
    console.log("I will marry Piku");
}

console.log(typeof (mixedArray));
console.log(Array.isArray(mixedArray));
const num5 = 10;
console.log(Array.isArray(num5));
console.log(!!num5);
console.log(isNaN(num5));

console.log(' ');

console.log(mixedArray.join());
console.log(mixedArray.join(' '));
console.log(mixedArray.join('+'));
console.log(mixedArray.join('='));

console.log(mixedArray);
console.log(mixedArray.slice(2, 4));


const addArray = myArray.concat(mixedArray);
console.log(addArray);
console.log(addArray.splice(5, 3));




