// for a given string tell me whether it has even number or odd number of characters or not.

function evenOrOddSizedString(str){
    let sized = str.length;
    if(sized % 2 == 0){
        return 'string sized number is Even';
    }
    else{
        return 'string sized number is odd';
    }
}

console.log(evenOrOddSizedString('Dhaka'));
console.log(evenOrOddSizedString('Faka'));

function dubbleOrTripple(num, doDubble){
    if(doDubble === true){
        return num * 2;
    }
    else{
        return num * 3;
    }
}

console.log(dubbleOrTripple(2, true));
console.log(dubbleOrTripple(2, false));
console.log(dubbleOrTripple(2, 'zahid'));

function arrayOfElements(array){
    return array.length;
}

console.log(arrayOfElements([1, 34, 56, 78, 9, 2, 45,]));


const object = {
    name: 'zahid',
    amarValobasha: 'Jarin',
    isMyLove : true,
}

function getChange(ob){
   return  ob.amarValobasha = 'Pinkey Chowdhury';
}

console.log(getChange(object));
console.log(object);

