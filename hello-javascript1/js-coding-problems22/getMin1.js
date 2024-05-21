// 
function getMin(numbers) {
    let min_value = numbers[0];
    for (let i = 0; i < numbers.length; i++) {

        if (min_value > numbers[i]) {
            min_value = numbers[i];
        }
    }
    return min_value;
}

let age = [2, 4, 6, 2, 2, 6, 7, 1, 3, -1, -2];
console.log(getMin(age));