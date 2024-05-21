function factorial(number) {
    let i = number;
    let multiplication = 1;
    while (i >= 1) {
        multiplication = multiplication * i;
        i--;
    }
    return multiplication;
}

let givenFactorialNumber = 5;
let myMultiplicationNum = factorial(givenFactorialNumber);
console.log('factorial of ' , givenFactorialNumber , '! =', myMultiplicationNum);
