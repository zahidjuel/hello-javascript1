var destinations = ['sajek', 'coxs-bazar', 'nepal', 'bali', 'simgapore'];

console.log(destinations);
console.log(destinations[3]);
destinations[4] = 'bhutan';
console.log(destinations);
console.log(destinations.indexOf('sajek'));
console.log(destinations.length);

destinations.push('Hatirpul');
console.log(destinations);
destinations.unshift('Australia');
console.log(destinations);

if (destinations[3] == 'sajek') {
    console.log("I go to sajek with Pinkey Chowdhury");
}
else if (destinations.indexOf('thailand') == 1) {
    console.log("I go to bali");
}
else if (destinations.length == 7) {
    console.log("I go to coxbazar with Petni")
}
else {
    console.log("Ami room e boshe thakbo..");
}

//
let myArray = [1, 2, 3, 4, 5];
console.log(myArray[2]);

/* ternary operator: 
condition ? true : false;

*/
var age = 18;

if (age >= 18) {
    console.log(`yes ${age} + You can vote....`);
}
else {
    console.log("Jau Baccha ghumai thako");
}

var age = 16;

age >= 18 ? console.log("You can vote") : console.log("Ghumai thako");

var isLeader = true;
var price = 500;

isLeader === false ? price = price + 100 : price = price + 300;
console.log(price);

console.log(" ");

var applePrice = 1400;

if (isLeader === false) {
    if (applePrice > 1000) {
        applePrice = applePrice / 2;
    }
    else {
        applePrice = 0;
    }
}
else {
    applePrice = applePrice + 200;
}

console.log(applePrice);

console.log('');
// nested ternary :

var bananaPrice = 80;
isNeta = true;

isNeta === true ? bananaPrice > 100 ? bananaPrice = bananaPrice / 3 : bananaPrice = 0 : bananaPrice = bananaPrice + 250;

console.log(bananaPrice);

// Logical not operator :

// shortcut 

var isMYLove = true;

if(isMYLove){
    console.log("Pinkey er sathe amar biya hobe........");
}
else{
    console.log("Ami biya korbo na...");
}

var isPassed = false;

if(!isPassed){
    console.log("Tor biya hobe na Piku...")
}
else{
    console.log("Esho duijon prem kori......");
}

var userInput = 'Zahid'

if(!userInput){
    console.log('The user Input is ' + userInput);
}
else{
    console.log("The user Input is empty");
}

console.log(!4);
console.log(!0);
console.log(!1);
console.log(!23);

var useId = 10;
console.log(useId);
console.log(!useId);
console.log(!!useId);

