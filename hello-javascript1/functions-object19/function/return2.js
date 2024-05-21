function add(num1, num2) {
    console.log(num1, num2);
    var sum = num1 + num2;
    // console.log(sum)
    return sum;
}

// add(45, 15);
var total = add(40, 20);
console.log(total);

function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    console.log(quantity);
}

bringSingara(200);

// 

function bringBook(money) {
    var bookPrice = 200;
    var quantity = money / bookPrice;
    return quantity;
}

var myTaka = 1000;
var bookQuantity = bringBook(myTaka);
console.log(bookQuantity);



function willMarryPiku(isMyLove) {
    var myLove = "Piku";
    if(isMyLove == true){
        return myLove + 'r sathe amar biyea hobe!!';
    }
    else{
        return myLove + ' Ar ami dujon valo bondhu hoea eksathe thakbo..';
    }
}

console.log(willMarryPiku(true));
console.log(willMarryPiku(false));


var myName = 'Zahid';
var janPakhi = 'Piku';
console.log(myName, janPakhi);
