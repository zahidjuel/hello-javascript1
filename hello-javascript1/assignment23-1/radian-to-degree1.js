// 1. Convert radian to Degree

function radianToDegree(radian) {
    if (typeof radian != 'number') {
        return 'Please enter a number variable: ';
    }
    let degree = radian * 57.2958; // 1 radian = 57.2958 degree.
    return parseFloat(degree.toFixed(2));
}

// console.log(radianToDegree(10));
// console.log(radianToDegree(25));
// console.log(radianToDegree(199));
// console.log(radianToDegree('199'));