// deference between array vs object

var shoppingCart = {
    books: 1,
    sunglass: 2,
    keyboard: 3,
    mouse: 4,
    pen: 25,
    shoes: 2,
}

var keys = Object.keys(shoppingCart);
console.log(keys);

console.log(Object.values(shoppingCart));

// var keys = ['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes']

for (i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}




// declare array 

var shoppingItems = ['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes'];
var friendsAge = [12, 34, 54, 23, 43, 22];

// array for of loop

for (i = 0; i < friendsAge.length; i++) {
    console.log(friendsAge[i]);
}


// object looping through

var myHeart = {
    name: 'Pinkey Chowdhury',
    age: 23,
    color: "Sundori",
    height: "5.4 inchi"
}

var propertyNames = Object.keys(myHeart);
console.log(propertyNames);

for (j = 0; j < propertyNames.length; j++) {
    var propertyValues = myHeart[propertyNames[j]];
    console.log(propertyNames[j], propertyValues);
}

delete myHeart.name; // delete object property name & values
console.log(myHeart); 

myHeart['Name'] = 'Jarin';
console.log(myHeart);

// object declare
const pencil = new Object();
console.log(pencil);

const pen = Object.create({})
console.log(pen);

const array = new Array();
console.log(array);
