// 3. Calculate the total oil price that I have to pay

function oilPrice(diesel, petrol, octane) {
    if ((typeof diesel != 'number') || (typeof petrol != 'number') || (typeof octane != 'number')) {
        return 'Please enter a number variable : ';
    }
    let dieselPrice = diesel * 114;
    let petrolPrice = petrol * 130;
    let octanePrice = octane * 135;

    let totalPrice = dieselPrice + petrolPrice + octanePrice; // addition
    return totalPrice;
}

// console.log(oilPrice(1, 1, 1));
// console.log(oilPrice(30, 20, 10));
// console.log(oilPrice(1, 0, 2));
// console.log(oilPrice(0, 2, 3));
// console.log(oilPrice('1', 2, 3));
// console.log(oilPrice(1, '2', 3));
// console.log(oilPrice(1, 2, '3'));