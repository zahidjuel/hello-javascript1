var myHeart = {
    name: 'Pinkey Chowdhury',
    age: 23,
    color: "Sundori",
    height: "5.4 inchi",
    dept: "History of Islam",
    weight: '52 kg'
}

var keys = Object.keys(myHeart); // [ 'name', 'age', 'color', 'height', 'dept', 'weight' ]
console.log(keys);

for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var value = myHeart[propertyName];
    console.log(propertyName, value);
}

// for in loop use object
for(var props in myHeart){
    var value = myHeart[props];
    console.log(props, value);
}


// JavaScript Object entries() Method

const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2,
}

console.log(Object.entries(pizza));
console.log(Object.entries(pizza)[1]);
console.log(Object.entries(pizza)[1][1]);