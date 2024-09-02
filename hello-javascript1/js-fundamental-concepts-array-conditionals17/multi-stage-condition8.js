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

// discount 

const totalCost = 4000;
if(totalCost >= 5000){
    // 10% discount 
    const discountAmount = (totalCost * 10) / 100;
    // console.log(discountAmount);
    const payAmount = totalCost - discountAmount;
    console.log(payAmount);
}

else if(totalCost >= 2500){
     // 5% discount 
     const discountAmount = (totalCost * 5) / 100;
     // console.log(discountAmount);
     const payAmount = totalCost - discountAmount;
     console.log(payAmount);
}

else{
    console.log(totalCost);
}


// BMI Calculator
let height = 176.784;
let weight = 68;
let heightInMeters = height / 100; // Convert height from cm to meters
let bmi = weight / (heightInMeters * heightInMeters);

console.log(bmi);

if (bmi < 18.5) {
    console.log("Under weight");
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("Normal Weight");
} else if (bmi >= 25 && bmi < 29.9) {
    console.log("Over Weight");
} else {
    console.log("Obese");
}

