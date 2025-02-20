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


console.log(calculateWatchTime([100, 99, 119, 300])); // { hour: 0, minute: 10, second: 18 }
console.log(calculateWatchTime([1000, 2000, 725])); // { hour: 1, minute: 2, second: 5 }
console.log(calculateWatchTime([100, 3800])); // { hour: 1, minute: 5, second: 0 }
console.log(calculateWatchTime([])); // { hour: 0, minute: 0, second: 0 }
console.log(calculateWatchTime([5600])); // { hour: 1, minute: 33, second: 20 }
console.log(calculateWatchTime([100, 3800, "90"])); // "Invalid"
console.log(calculateWatchTime([3667])); // "Invalid"