// sort an array problem 

const numbers = [1, 4, 7, 3, 8, 9, 0];

/*
Ascending -------> smaller to larger:
Dscending -------> larger to smaller: 

*/
console.log([...numbers].sort());
console.log(numbers); // change the original array

const age = [17, 5, 132, 43, 9, 49];
const ascending = [...age].sort(function(a,b){return a - b});
const dscending = [...age].sort(function(a,b){return b - a});

console.log(ascending);
console.log(dscending);
console.log(age);