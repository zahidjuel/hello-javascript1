/*  
Write a program to find the total price of those product object.

{ name: “Laptop”, color: “black” , price: 12000 }
{ name: “Monitor”, color: “gray” , price: 5000 }
{ name: “Mobile”, color: “black” , price: 2500 } 

*/
const a = { name: "laptop", color: "black", price: 12000 };

const b = { name: "monitor", color: "gray", price: 5000 };

const c = { name: "Mobile", color: "black", price: 2500 };

console.log(a.price);
console.log(b.price);
console.log(c.price);

const totalPrice = a.price + b.price + c.price;
console.log(totalPrice);