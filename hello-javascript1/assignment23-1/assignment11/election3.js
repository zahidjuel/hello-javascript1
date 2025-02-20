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

// Sample test cases
console.log(electionResult(["mango", "banana", "mango", "banana", "mango"])); // "Mango"
console.log(electionResult([])); // "Draw"
console.log(electionResult(["mango", "banana", "jaker party", "no"])); // "Draw"
console.log(electionResult(["mango"])); // "Mango"
console.log(electionResult(["banana", "banana", "age e valo chilam", "no"])); // "Banana"
console.log(electionResult({ result: "mango , banana ,  mango" })); // "Invalid"
console.log(electionResult("mango , banana")); // "Invalid"
console.log(electionResult(["mango", "BananA", "na vote", "na vote"])); // "Mango"
console.log(electionResult([1 , 3 , 4, 5])); // 