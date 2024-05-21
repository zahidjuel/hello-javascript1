/* 
const myFeet = 5.8;
const myInchi = myFeet * 12;
console.log(myInchi);

const johnInchi = 84;
const johnFeet = johnInchi / 12;
console.log(johnFeet);
 
*/
// use function inchi to feet

function inchiToFeet(inchi) {
    var feet = inchi / 12;
    return feet;
}

var myFeet = inchiToFeet(94);
console.log(parseFloat(myFeet.toFixed(2)));

const inchii = 84
var johnFeet = inchiToFeet(inchii);
console.log(inchii,'inchii to feet',johnFeet);


// miles to km 

function milesToKilometer(miles) {
    const km = miles / 0.6213;
    return km;
}
const johnMiles = 2;
const johnKm = milesToKilometer(johnMiles);
console.log(parseFloat(johnKm.toFixed(4)));

const myMiles = 5;
const myKilometer = milesToKilometer(myMiles);
console.log(parseFloat(myKilometer.toFixed(4)));

