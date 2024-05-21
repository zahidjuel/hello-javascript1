
// Remove duplicate items from an array

const Names = ['abul', 'kabul', 'chabul', 'dabuL', 'mokbul', 'chabul',
    'mofidul', 'kabul', 'chabul', 'bozlul', 'abul'];

function duplicateArray(names) {
    let unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) == false) {
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = duplicateArray(Names);
console.log(uniqueNames);

console.log(uniqueNames.length);

console.log(duplicateArray([1, 2, 3, 4, 4, 5, 2, 7, 8, 9, 9, 0, 1]));