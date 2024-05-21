// Problem-01 : Help The Zoo Manager
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

// console.log(calculateMoney(10));
// console.log(calculateMoney(1055));
// console.log(calculateMoney(93));
// console.log(calculateMoney(-130));
// console.log(calculateMoney(0));
// console.log(calculateMoney(-1));
// console.log(calculateMoney('2'));
// console.log(calculateMoney('zahid'));