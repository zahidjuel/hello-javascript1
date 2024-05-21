// Problem 04 : Make A Great Password
function password(obj) {
    let password;
    if (typeof obj !== 'object' || !obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName') || (obj.birthYear.toString().length !== 4)) {
        return "invalid";
    }
    else {
        password = (obj.siteName[0].toUpperCase() + obj.siteName.slice(1)) + '#' + obj.name + '@' + obj.birthYear;
    }
    return password;
}

// console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));
// console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
// console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
// console.log(password( {birthYear: 2000, siteName: "Facebook" }));
// console.log(password('12'));
// console.log(password([12, 23]));