function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function division(n1, n2) {
    return n1 / n2;
}

function simpleCalculator(a, b, operation) {
    switch (operation) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        default:
            return division(a, b);
    }
}

console.log(simpleCalculator(4, 5, '+'));
console.log(simpleCalculator(4, 5, '-'));
console.log(simpleCalculator(4, 5, '*'));
console.log(simpleCalculator(4, 5, '/'));
