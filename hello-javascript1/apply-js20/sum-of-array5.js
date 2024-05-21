
let arrayNumber = [5, 7, 8, 10, 45, 30];
let sumOfArrayNumber = 0;
let sumOfEvenArrayNumber = 0;
let sumofOddArrayNumber = 0;


for (let i = 0; i < arrayNumber.length; i++) {
    sumOfArrayNumber = sumOfArrayNumber + arrayNumber[i];
    if ((arrayNumber[i] % 2) != 0) {
        sumofOddArrayNumber = sumofOddArrayNumber + arrayNumber[i];
    }
    else {
        sumOfEvenArrayNumber = sumOfEvenArrayNumber + arrayNumber[i];
    }
}
console.log(arrayNumber);
console.log(sumOfArrayNumber);
console.log(sumOfEvenArrayNumber);
console.log(sumofOddArrayNumber);


//  using function findSum of array

function findSumOfArray(number){
    let sum = 0;
    for(let i = 0; i < number.length; i++){
        sum = sum + number[i];
    }
    return sum;
}

const myArray = [1, 2, 3, 4, 5, 6,];
const sumOfArray = findSumOfArray(myArray);
console.log(sumOfArray);


// calculate the average of odd numbers in an array

function averageOfOddNumbers(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) { // Check if the number is odd
            sum += arr[i];
            count++;
        }
    }

    if (count === 0) {
        return 0; // Return 0 if there are no odd numbers
    } else {
        return sum / count; // Return the average of odd numbers
    }
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const avgOdd = averageOfOddNumbers(numbers);
console.log("Average of odd numbers:", avgOdd);