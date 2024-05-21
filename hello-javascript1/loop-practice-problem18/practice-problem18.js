/*
প্রাকটিস চ্যালেঞ্জ-১

প্রতিদিন তোমার কাজ কি? 

১) রাত 9 টা বাজে মডিউল আনলক করো  

২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো

৩) ভিডিও দেখতে দেখতে নোটস নাও 

৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো 

৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো 

এখন তোমার কাজ হচ্ছে একটা for লুপ ১০ বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো। 

*/

arr = ["Unlock the module at 9 PM",
    "Practice by watching the video quickly",
    "Take notes while watching the video",
    "After completing the module, practice the whole module by yourself",
    "If you don't understand something (think about it but there is a condition), join the support session"
]
for (var i = 0; i < 10; i++) {
    var index = i % 5;
    console.log( (index + 1) , (arr[index]));
}

console.log(0 % 5);
console.log(1 % 5);
console.log(2 % 5);
console.log(3 % 5);
console.log(4 % 5);
console.log(5 % 5);
console.log(6 % 5);
console.log(7 % 5);
console.log(8 % 5);
console.log(9 % 5);

// practice challenge 2

var num = 0;
while (num < 10) {
    var index1 = num % 5;
    console.log(+ (index1 + 1) + ' ) ' + (arr[index1]));
    num++;
}


// practice challenge: 3
console.log('reverse decremental way using while loop');

var num2 = 9;
while (num2 >= 0) {
    var index2 = num2 % 5;
    console.log(+ (index2 + 1) + ' ) ' + (arr[index2]));
    num2--;
}

console.log('reverse decremental way using for loop');

for (var j = 9; j >= 0; j--) {
    var positionIndex = j % 5;
    console.log(+ (positionIndex + 1) + ' ) ' + (arr[positionIndex]));
}
