let a = 5;
let b = 7;
console.log(a,b);

a = b; // 7 
b = a; // 7
console.log(a,b);

// swap

let c = 10;
let d = 15;
console.log(c,d);

const temp = c; // 10
c = d; // 15
d = 10;

console.log(c,d);


// destructing 
let x = 20;
let y = 25;
[x,y] = [y,x];
console.log(x,y);

