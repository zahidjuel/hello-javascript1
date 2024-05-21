function bringSingara(money) {
    console.log('mama singara dan')
    console.log(money);
}
bringSingara();
bringSingara(250);

function bringBook(money) { // declare parameter
    console.log('Taka disen : ', money);
    console.log('Ei nen book');
}
var taka = 322;
bringBook(taka);

function add(num1, num2) { // multiple parameter
    console.log('Going to add ', num1, num2);
}

add(12, 14);

function addition(a, b, c, d, e, f) {
    console.log('The numbers are =', a, b, c, d, e, f);
    var sum = a + b + c + d + e + f;
    console.log(sum);
}
addition(1, 2, 3, 4, 5, 6);

function squareOfNumber(num){
    console.log(num * num);
}

squareOfNumber(4);
squareOfNumber(2);
squareOfNumber(3);

