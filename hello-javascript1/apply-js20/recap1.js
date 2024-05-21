function isHappy(time) {
    if (time > 9) {
        console.log('true');
    }

    if (time < 9) {
        console.log('false');
    }
}
isHappy(8);

//
function isMoonUp(time) {
    if (time > 7) {
        return true;
    }

    if (time < 7) {
        return false;
    }
}

var moonUp = isMoonUp(6);
console.log(moonUp);

//  

var jantus = {
    name: 'piku',
    height: '5.4 inch',
    bapErTaka: 'borolox',
    isMyLove: true,
}

var allProperties = Object.keys(jantus);
var allPropertiesValue = Object.values(jantus);
console.log(allProperties);
console.log(allPropertiesValue);

for (let i = 0; i < allProperties.length; i++) {
    const propertyName = allProperties[i];
    const propertyValue = jantus[propertyName];
    console.log(propertyName, propertyValue);
    
}

// var, let , const 

var age = 20;
var age = 30;
var age = 40;
var age = 60;

let rollNumber = 6;

const myLoveName = 'Pinkey Chowdhury';
// myLoveName = 'Zahid Juel'; // const keyword value no update & change , no redeclare.

console.log(age);
console.log(rollNumber);
console.log(myLoveName);

// The scope of the var keyword is the global or function scope. 
// var keyword update or change anytime anywhere
// var keyword use redeclare

var a = 10
function f1() {
    console.log(a)
}
f1();
console.log(a)

// 
function f() {
 
    // It can be accessible any
    // where within this function
    var b = 15;
    console.log(b)
}
f();

 
// A cannot be accessible
// outside of function
// console.log(b);

let a1 = 12;
function f3() {
    let b = 9
    console.log(b);
    console.log(a1);
}
f3();


