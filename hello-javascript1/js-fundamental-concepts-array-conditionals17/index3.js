var numbers = [45, 68, 78, 56, 89, 99];

console.log(numbers);
console.log(numbers.length);

// get element by index
console.log(numbers[3]);

var element = numbers[5];
console.log(element);

//set element by index
numbers[5] = 100;
numbers[4] = 27;
console.log(numbers[5]);
console.log(numbers);


var eachPlayer = [200, 300, 400, 500, 600, 700];
console.log(eachPlayer);
console.log(eachPlayer.length);
console.log(eachPlayer[2]);
eachPlayer[4] = 900;
eachPlayer[5] = 1200;
console.log(eachPlayer);
var indexElement = eachPlayer[1];

console.log(indexElement);
eachPlayer[1] = 1;
console.log(eachPlayer);

// find index of element
console.log(eachPlayer.indexOf(1200));
var positionIndex = numbers.indexOf(99);
console.log(positionIndex);

console.log(eachPlayer.indexOf(900));
console.log(eachPlayer.indexOf(700));


var vowels = ['a', 'e', 'i', 'o', 'u'];
console.log(vowels);
console.log(vowels.length);

console.log(vowels[4]);
vowels[4] = 'y';
console.log(vowels[4]);
console.log(vowels);

console.log(vowels.indexOf('u'));
console.log(vowels.indexOf('y'));


