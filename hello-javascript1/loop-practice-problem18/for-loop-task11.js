/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/

for(var i = 1; i <= 60; i++){
    console.log(i,"I will invest at least 6 hrs every single day for next 60 days!");
}

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

for(let i = 61; i <= 100; i = i +2){
    console.log("Odd Numbers : ", i);
}

for(let i = 78; i<= 98; i++){
    if(i % 2 == 0){
        console.log("Even Number: ", i);
    }
}

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

let sum = 0
for(let i = 91; i <= 129; i = i + 2){
    // console.log(i);
    sum = sum + i;
}
console.log(sum);

let total = 0;
for(let i = 51; i < 85; i++){
    if(i % 2 == 0){
        // console.log(i);
        total = total + i;
    }
}
console.log(total);

/***

Generate a multiplication table for number 9

 */


/*programming hero*/

// Define the number for which you want to generate the multiplication table
const number = 9;

// Define the limit up to which you want to generate the table
const limit = 10;

// Loop through from 1 to the limit and print the multiplication result
for (let i = 1; i <= limit; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

let mul = 1;
for(let i = 1; i <= 5; i++){
    // console.log(i);
    mul = mul * i;
}
console.log(mul);

/***

Implement a countdown timer that counts down from 81 to 65.

 */


/*programming hero*/



