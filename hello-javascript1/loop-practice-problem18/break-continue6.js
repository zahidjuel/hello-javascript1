// break; stop the loop.
for (var i = 1; i <= 20; i++) {
    console.log(i);
    if (i > 10) {
        break; // stop the loop.
    }
}


var roastGiven = 0;
while (roastGiven < 7) {
    console.log("Roast dan , Please!!")
    console.log(roastGiven);
    // roastGiven = roastGiven + 1;
    // roastGiven += 1;
    roastGiven++;
    if (roastGiven >= 3) {
        break;
    }
}

//
var tableItems = ['book', 'pen', 'notebook', 'sunglass', 'laptop']
tableItems.pop();
var num = 0;
while (num < tableItems.length) {
    var tableItem = tableItems[num];
    console.log(tableItem);
    if (tableItem == tableItems[2]) {
        break;
    }
    num++;
}

//
var numbers = [45, 67, 78, 89, 56, 34, 54];
numbers.push(55);
numbers.unshift(99);
console.log(numbers);
var i = 0;
for (i; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
    if (number > 80) {
        break;
    }
}

// continue; skip / go to the next iteration.

for (i = 0; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);

}

//
for (i = 0; i <= 10; i++) {
    if (i < 5) {
        continue;
    }
    console.log(i);
}
//
var numbers = [45, 67, 78, 89, 56, 34, 54];
numbers.push(55);
numbers.unshift(99);
console.log(numbers);
var i = 0;
for (i; i < numbers.length; i++) {
    var number = numbers[i];

    if (number > 60) {
        continue;
    }
    console.log(number);
}

