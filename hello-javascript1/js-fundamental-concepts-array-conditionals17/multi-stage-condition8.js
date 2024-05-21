var money = 18;
var danishPrice = 45;
var butterBread = 25;
var toastBiscuit = 15;

if (danishPrice < money) {
    console.log('danish danish khabo');
}
else if (butterBread < money) {
    console.log("Butter Bread kkhamu");
}
else if (toastBiscuit < money) {
    console.log('Biscuit khabo');
}
else {
    console.log("Cha ei sasther jonno valo");
}

// nested condition: 

var math = true;
var geometry = true;
var straightLine = false;

if (math == true) {
    if (geometry == true) {
        if(straightLine == true){
            console.log("I can stragightLine")
        }
        else{
            console.log("baka pothe cholba na..")
        }
    }
    else {
        console.log('I can not geometry');
    }
}
else {
    console.log('I can not  mathematics');
}