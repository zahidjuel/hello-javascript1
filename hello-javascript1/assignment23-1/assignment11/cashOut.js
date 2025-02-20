// Problem-01 : Calculate the cash-out Charge 

function cashOut(money){
    if((typeof money === "number") && (money > 0)){
        let cashOutCharge = (money * 1.75) / 100;
        return cashOutCharge;
    }
    else{
        return "Invalid";
    }
}
console.log(cashOut(2000));
console.log(cashOut(100));
console.log(cashOut(999));
console.log(cashOut(-350));
console.log(cashOut(0));
console.log(cashOut("101"));
console.log(cashOut("mewauu"));