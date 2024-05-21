function calculateMoney(ticketSale) {
    let ticketPrice = 120;
    let dailyExpense = (500 + (8 * 50));
    let total_sale;
    let remaining_money;
    if ((typeof ticketSale !== 'number') || ticketSale < 0) {
        return 'Please enter a Positive number (where ticketSale >= 0)';
    }

    else {
        total_sale = ticketSale * ticketPrice;
        remaining_money = total_sale - dailyExpense;
    }
    return remaining_money;
}

function checkName(name) {
    if ((typeof name !== 'string') || !(isNaN(name))) {
        return 'invalid';
    } else {
        let lastChar = name[name.length - 1].toLowerCase();
        let goodChar = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
        if (goodChar.includes(lastChar)) {
            return 'Good Name';
        } else {
            return 'Bad Name';
        }
    }
}

function deleteInvalids(array) {
    let num_array = [];
    if (!Array.isArray(array)) {
        return 'Please enter a array variable';
    }
    else {
        for (const arr of array) {
            if (typeof arr === 'number' && !isNaN(arr)) {
                num_array.push(arr);
            }
        }
    }
    return num_array;
}

function password(obj) {
    let password;
    if (typeof obj !== 'object' || !obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName') || (obj.birthYear.toString().length !== 4)) {
        return "invalid";
    }
    else {
        password = (obj.siteName[0].toUpperCase() + obj.siteName.slice(1)) + '#' + obj.name + '@' + obj.birthYear;
    }
    return password;
}

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