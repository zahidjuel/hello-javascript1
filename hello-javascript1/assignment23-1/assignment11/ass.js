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

// Problem-03 : Who will Win  ( 🥭Mango /🍌 Banana ) 
function electionResult(votes) {

    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    let mangoCount = 0;
    let bananaCount = 0;

    for (let vote of votes) {

        if (typeof vote === 'string') {
            vote = vote.toLowerCase();

            if (vote === "mango") {
                mangoCount++;
            } 

            else if (vote === "banana") {
                bananaCount++;
            }
        }
        else if(typeof vote !== 'string'){
            return "Invalid";
        }
    }


    if (mangoCount > bananaCount) {
        return "Mango";
    }
     else if (bananaCount > mangoCount) {
        return "Banana";
    }
     else {
        return "Draw";
    }
}

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

// Problem-05: Let’s Calculate Video watch Time

function calculateWatchTime(times) {

    if (!Array.isArray(times)) {
        return "Invalid";
    }

    let totalSeconds = 0;

    for (let time of times) {     
        if (typeof time !== 'number' || isNaN(time)) {
            return "Invalid";
        }
        else{
            totalSeconds = time + totalSeconds;
        }
    }


    const hour = Math.floor(totalSeconds / 3600);
    const minute = Math.floor((totalSeconds % 3600) / 60);
    const second = totalSeconds % 60;

 
    return {
        "hour" :hour, 
        "minute": minute, 
        "second": second, 
    };
}