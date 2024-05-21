/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let s = 0;
let n = 1;

while (true) {
    s += n;
    if (s >= 100) {
        break;
    }
    n++;
}

console.log("The sum reached or exceeded 100.");
console.log("Sum:", s);
console.log("Last added number:", n);

let num = 10;
console.log(Math.sqrt(num) %  1);

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for (let i = 1; i <= 100; i++) {
    // Check if the current number is a perfect square
    if (Math.sqrt(i) % 1 === 0) {
        console.log(`First square number encountered: ${i}`);
        break;
    }
}

