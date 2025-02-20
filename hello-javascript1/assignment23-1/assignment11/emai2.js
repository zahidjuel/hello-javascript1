// Problem-02 : Detect email  valid or not

function validEmail(email) {

    if (typeof email !== 'string') {
        return "Invalid";
    }
    
    let emailPattern = /^[^._+\-@][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
    

    if (email.includes(" ")) {
        return false;
    }
    
 
    return emailPattern.test(email);
}

console.log(validEmail("ferdous@gmail.com")); // true
console.log(validEmail("1zihad@gmail.com")); // true
console.log(validEmail("-king@yahoo.com")); // false
console.log(validEmail(["jhankar@hero.com"])); // "Invalid"
console.log(validEmail("Mewo@cat.com")); // true
console.log(validEmail("programming-hero.com")); // false
console.log(validEmail("chat420@gpt.net")); // false
console.log(validEmail("he ro@alom.com")); // false

