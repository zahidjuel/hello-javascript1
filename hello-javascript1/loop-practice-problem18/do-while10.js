/* do{
   // statement
}
while (condition); */

let i = 0;
let sum = 0;
do{
    console.log(i);
    sum = sum + i;
    i++;
}
while(i <= 5);
console.log(sum);