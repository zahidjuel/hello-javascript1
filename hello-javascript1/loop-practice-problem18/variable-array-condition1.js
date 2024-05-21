// string type variable
var bottle = 'water';
var mouseColor = 'yellow';
var penColor = 'blue';

// number type variable
var sunglassPrice = 120;

// boolean type variable
var isExpensive = true;

var tableItems = ['pen', 'mouse', 'keyboard', 'bottle', 'light'];
console.log(tableItems);
var item3 = tableItems[2];
console.log(item3);

tableItems[2] = 'notebook'
console.log(tableItems[2]);
console.log(tableItems);
console.log(tableItems.indexOf('light'));
console.log(tableItems.length);

// push 
tableItems.push('charger');
console.log(tableItems);
var removeElement = tableItems.pop();
console.log(tableItems);
console.log(removeElement);

// conditional 

if (tableItems.indexOf('light') < 2) {
    console.log('condition no 1 is true ');
}
else if (tableItems.length == 5) {
    console.log('The condition no 2 is true');
}
else {
    console.log('The condition is not true');
}


// for of loop
const numbers = [1,2,3,4,5];
for (const num of numbers) {
    console.log(num, "Piku ke biya korte hobe!!!");
    
}