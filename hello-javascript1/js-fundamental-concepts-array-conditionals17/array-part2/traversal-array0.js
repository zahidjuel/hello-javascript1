const friends = ['Elon', 'Mask', 'Gates', 'Juel'];
for (i = (friends.length - 1); i >= 0; i--) {
    console.log(friends[i]);
}

console.log(friends.reverse());
console.log(friends);// use .reverse() change prime the array .......


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const reverse = [];
for (const num of numbers) {
    // console.log(num);
    reverse.unshift(num);
}

console.log(reverse);



