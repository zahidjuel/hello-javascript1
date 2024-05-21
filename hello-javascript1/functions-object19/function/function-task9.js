// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiply(n1, n2, n3, n4) {
    const result = n1 * n2 * n3 * n4;
    return result;
}

console.log(multiply(1, 2, 3, 4));
console.log(multiply(2, 4, 5, 6));

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function calculate(number) {
    if (number % 2 === 0) {
        let result = number / 2;
        return result;
    }
    else {
        let result = number * 2;
        return result;
    }
}

console.log(calculate(45));
console.log(calculate(46));


// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


function count_zero(binaryString) {
    let count = 0;
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '0') {
            count++;
        }
    }
    return count;
}

// Example usage:
const binaryString = "101010101";
const zeroCount = count_zero(binaryString);
console.log("Number of 0's in the binary string:", zeroCount); // Output: 4


// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(value){
    if(value % 2 == 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}

console.log(odd_even(5));
console.log(odd_even(6));