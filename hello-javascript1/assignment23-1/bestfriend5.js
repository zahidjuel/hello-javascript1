// 5. isBestFriend

function isBestFriend(ob1, ob2) {
    if ((typeof ob1 != 'object') || (typeof ob2 != 'object')) {
        return 'Please enter a object variable !!';
    }
    if ((ob1.name == ob2.friend) && (ob1.friend == ob2.name)) {
        return true;
    }
    else {
        return false;
    }
}

// console.log(isBestFriend({ name: "abul", friend: "babul" }, { name: "babul", friend: "abul" }));
// console.log(isBestFriend({ name: "abul", friend: "kabul" }, { name: "kabul", friend: "sabul" }));
// console.log(isBestFriend({ name: "doe", friend: "alex" }, { name: "john", friend: "doe" }));
// console.log(isBestFriend({ name: "Zahid", friend: "Pinki" }, { name: "Pinki", friend: "Zahid" }));
// console.log(isBestFriend(34));