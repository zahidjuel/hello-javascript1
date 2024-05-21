var shoppingCart = {
    books: 1,  // property/keys : values,
    sunglass: 2,
    keyboard: 3,
    mouse: 4,
    pen: 5,
}

// get object property
// when you know the specific property name, use dot notation to get the property value.

var penCount = shoppingCart.pen;
console.log(penCount);

// alternative system
var penCount2 = shoppingCart['pen'];
console.log(penCount2);

//
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
console.log(propertyValue);

// all get properties/keys 
var allProperties = Object.keys(shoppingCart);
console.log(allProperties);

// all get values
var allPropertiesValues = Object.values(shoppingCart);
console.log(allPropertiesValues);

console.log(shoppingCart);

//  set proerties values
shoppingCart.sunglass = 6;
console.log(shoppingCart);

//
shoppingCart['sunglass'] = 29;
console.log(shoppingCart.sunglass);

// 
var propertyValue = shoppingCart[propertyName] = 200;
console.log(propertyValue);
console.log(shoppingCart);

var student = {
    name: "zahid",
    id: 20190266,
    dept: "CSE",
    gpa: 3.72,
    "fav places": ['Dhaka', 'Cumilla', 'Bandorban', 'Rangamati'],
}

console.log(student['fav places']);

console.log(Object.keys(student));
console.log(Object.values(student));

console.log(student.name);
console.log(student['gpa']);

student.name = " Pinkey Chowdhury";
console.log(student);
console.log(student.name);

var propertyKeys = 'dept';
student[propertyKeys] = 'History of Islam';
console.log(student);
console.log(student[propertyKeys]);

