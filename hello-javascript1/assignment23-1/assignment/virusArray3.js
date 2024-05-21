// Problem 03 : Virus in my Array
function deleteInvalids(array){
    let num_array = [];
    if(!Array.isArray(array)){
        return 'Please enter a array variable';
    }
    else{
        for(const arr of array){
            if(typeof arr === 'number' && !isNaN(arr)){
                num_array.push(arr);
            }
        }
    }
    return num_array;
}

// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
// console.log(deleteInvalids(["1" , {num:2} , NaN ]));
// console.log(deleteInvalids([ 1 , 2 , -3 ]));
// console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));
// console.log(deleteInvalids([2,'3']));
// console.log(deleteInvalids(3));
// console.log(deleteInvalids([ NaN, 1,12,0 ,-1 , undefined ]));
// console.log(deleteInvalids('zahid'));




