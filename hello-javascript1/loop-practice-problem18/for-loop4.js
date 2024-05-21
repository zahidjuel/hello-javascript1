// for loop
for (var roastGiven = 0; roastGiven < 7; roastGiven++) {
    console.log(roastGiven);
    console.log('roast dan , please!!!!');
}

// for loop simple version:
for (var i = 0; i <= 20; i = i + 2) {
    console.log(i);
}

for(var i = 1; i<= 20; i += 2){
    console.log(i);
}

var sum = 0;
for(var i = 0; i<=10; i++){
    sum = sum + i;
    console.log(` ${sum} + ${i} = ${sum}`);
}
console.log(sum);