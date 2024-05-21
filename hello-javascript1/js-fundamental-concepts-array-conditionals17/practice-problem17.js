/*
প্রাকটিস চ্যালেঞ্জ -১:  

ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছ। 
তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। 
তবে তাদের নম্বর জানো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে,
সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77।
তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে?

১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.

২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.

৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.

৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.

৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.

৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+.
*/

var marks = 91;

if (marks > 100 || marks < 0) {
    console.log("Not Supported !!");
}
else if (marks < 50 && marks >= 0) {
    console.log('Grade __ F');
}
else if (marks >= 50 && marks < 60) {
    console.log('Grade __ D');
}
else if (marks >= 60 && marks < 70) {
    console.log('Grade __ C');
}
else if (marks >= 70 && marks < 80) {
    console.log('Grade __ B');
}
else if (marks >= 80 && marks < 90) {
    console.log('Grade __ A');
}
else {
    console.log('Grade A+');
}

console.log(' ');

/*
প্রাকটিস প্রব্লেম-২: 
 
তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। 
এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। 
যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। 
আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। 
যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে।
সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে।
তো, সেই কোড ফটাফট লিখে ফেলো। 

*/

var signal = 'blue';

if (signal == 'green') {
    console.log('You should cross the road');
}
else if (signal == 'red') {
    console.log('You should stop now');
}
else if (signal == 'yellow') {
    console.log('You should waiting few minuties.');
}

else{
    console.log('you should walking!!!');
}

