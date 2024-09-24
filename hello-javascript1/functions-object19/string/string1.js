const sentence = 'I am learning web development';

for (var i = 0; i < sentence.length; i++) {
    console.log(sentence[i]);
}

console.log('Zahid');

for (var i = (sentence.length - 1); i >= 0; i--) {
    console.log(sentence[i]);
}


console.log("Zahid");

for (const letter of sentence) {
    console.log(letter);
}

let reverse = '';
for (const letter of sentence) {
    reverse = letter + reverse; // i + '';
}
console.log(reverse);

const myLove = 'I Love You Pinkey Chowdhury';
console.log(myLove.split(' '));
console.log(myLove.split(' ').reverse());
console.log(myLove.split(' ').reverse().join(' '));


