// 4. publicBusFare

function publicBusFare(num) {
    if (typeof num != 'number') {
        return 'Please enter a number variable :';
    }
    if (num >= 50) {
        let busRestPeople = num % 50;
        if (busRestPeople >= 11) {
            let publicBusPeople = busRestPeople % 11;
            let publicBusCost = publicBusPeople * 250;
            return publicBusCost;
        }
        else {
            let publicBusBill = busRestPeople * 250;
            return publicBusBill;
        }
    }
    else if (num < 50 && num >= 0) {
        let microBusRestPeople = num % 11;
        let publicBusFee = microBusRestPeople * 250;
        return publicBusFee;
    }
    else {
        return 'Population can never be negative !!';
    }
}

// console.log(publicBusFare(55));
// console.log(publicBusFare(112));
// console.log(publicBusFare(235));
// console.log(publicBusFare(365));
// console.log(publicBusFare(61));
// console.log(publicBusFare(66));
// console.log(publicBusFare(33));
// console.log(publicBusFare(14));
// console.log(publicBusFare(6));
// console.log(publicBusFare(50));
// console.log(publicBusFare(0));
// console.log(publicBusFare(11));
// console.log(publicBusFare(-1));
// console.log(publicBusFare('1'));