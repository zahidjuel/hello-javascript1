// Problem 05 : Monthly Savings of a Freelancer
function monthlySavings(array, livingCost) {
    let tax = 0;
    let totalIncome = 0;
    if (Array.isArray(array) === false || (typeof livingCost !== 'number')) {
        return 'invalid input';
    }
    else {
        for (const arr of array) {
            if (arr >= 3000) {
                tax = (20 * arr) / 100;
            }
            totalIncome = (totalIncome + arr) - tax;
        }
        let savings = totalIncome - livingCost;
        if (savings >= 0) {
            return savings;
        }
        else {
            return 'earn more';
        }
    }
}

// console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));
// console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
// console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
// console.log(monthlySavings(100, [ 900 , 2700 , 3400]));
// console.log(monthlySavings([1, 2], '11'));
// console.log(monthlySavings(1, 3));