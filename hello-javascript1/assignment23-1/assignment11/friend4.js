// Problem-04: Detect The Perfect Best Friend 

function isBestFriend(f1, f2) {

    if (typeof f1 !== 'object' || typeof f2 !== 'object' || f1 === null || f2 === null) {
        return "Invalid";
    }

  
    const requiredProperties = ['name', 'roll', 'bestFriend'];
    for (const prop of requiredProperties) {
        if (!(prop in f1) || !(prop in f2)) {
            return "Invalid";
        }
    }

    if (
        typeof f1.name !== 'string' ||
        typeof f2.name !== 'string' ||
        typeof f1.roll !== 'number' ||
        typeof f2.roll !== 'number' ||
        typeof f1.bestFriend !== 'number' ||
        typeof f2.bestFriend !== 'number'
    ) {
        return "Invalid";
    }

    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
        return true;
    } 
    else {
        return false;
    }
}

// Sample test cases
console.log(
    isBestFriend(
        { name: "hashem", roll: 1, bestFriend: 2 },
        { name: "kashem", roll: 2, bestFriend: 1 }
    )
); // true

console.log(
    isBestFriend(
        { name: "hashem", roll: 21, bestFriend: 1 },
        { name: "kashem", roll: 1, bestFriend: 2 }
    )
); // false

console.log(
    isBestFriend(
        { name: "kashem", roll: 2, bestFriend: 11 },
        "Kashem er Kono Bondhu Nai"
    )
); // "Invalid"

console.log(
    isBestFriend(
        "hashem",
        { name: "kashem", roll: 2, bestFriend: 11 }
    )
); // "Invalid"

console.log(
    isBestFriend(
        { name: "hashem", roll: 1, bestFriend: 1 },
        { name: "kashem", roll: 1, bestFriend: 1 }
    )
); // true

console.log(
    isBestFriend(
        { name: 12, roll: 1, bestFriend: 1 },
        { name: "kashem", roll: 1, bestFriend: 1 }
    )
); 

console.log(
    isBestFriend(
        { name: "12", roll: '1', bestFriend: 1 },
        { name: "kashem", roll: 1, bestFriend: 1 }
    )
);