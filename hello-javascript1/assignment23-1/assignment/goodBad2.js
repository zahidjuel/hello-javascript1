// Problem-02: Good Name , Bad Name
function checkName(name) {
    if ((typeof name !== 'string') || !(isNaN(name))) {
        return 'invalid';
    } else {
        let lastChar = name[name.length - 1].toLowerCase();
        let goodChar = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
        if (goodChar.includes(lastChar)) {
            return 'Good Name';
        } else {
            return 'Bad Name';
        }
    }
}

// console.log(checkName('Salman')); 
// console.log(checkName('RAFEE'));
// console.log(checkName('Jhankar'));
// console.log(checkName(199));
// console.log(checkName('tonoY'));
// console.log(checkName(["Rashed"])); 
// console.log(checkName('12'));





