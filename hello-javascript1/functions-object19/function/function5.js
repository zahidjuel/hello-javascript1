/* 
write a function to give me the sum of all array numbers in an array 
*/

function sumOfArray(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum = sum + num;
    }
    return sum;
}

console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumOfArray([11, 12, 14]));

// return the sum of even numbers

function sumOfEven(numbers) {
    let s = 0;
    for (const num of numbers) {
        if (num % 2 === 0) {
            s = s + num;
        }
    }
    return s;
}

console.log(sumOfEven([1, 2, 4, 6, 9, 3]));

