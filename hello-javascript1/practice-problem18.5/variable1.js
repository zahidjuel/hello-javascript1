/* 
1. what is JavaScript ?
2. how does JavaScript work? 
3. what is variable?
4. declare a variable?
5. types of variable? how can you find out type of a variable?
6. primitive and non-primitive data types
7. naming convention of Js variable
8. Math operation: + , - , * , / , %
9. Short hand: +=, -= , *= , /= 
10 . ++ , -- ,
11.  parseInt(), parseFloat(), toFixed()

*/


/* 
২৪.
তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, 
৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে ,
২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে।
না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 

*/
var myMoney = 20000;

if (myMoney <= 0) {
    console.log('Not Supported');
}
else if (myMoney > 80000) {
    console.log("I buy a Mac Computer");
}
else if (myMoney > 60000 && myMoney <= 80000) {
    console.log('I buy a Gaming Computer');
}
else if (myMoney > 40000 && myMoney <= 60000) {
    console.log('I buy a Lenovo Yoga Computer');
}
else if (myMoney > 20000 && myMoney <= 40000) {
    console.log('I buy a old Laptop !!');
}
else {
    console.log('I will work om my mobile');
}