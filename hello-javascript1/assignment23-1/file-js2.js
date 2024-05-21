// 2. check whether the given file name is a javascript file or not

function isJavaScriptFile(string) {
    if (typeof string != 'string') {
        return 'please enter a string variable : ';
    }
    if (string.endsWith('.js')) { // JavaScript files have the file extension .js
        return true;
    }
    else {
        return false;
    }
}

// console.log(isJavaScriptFile('app.js'))
// console.log(isJavaScriptFile('js.png'))
// console.log(isJavaScriptFile('image.js.png'))
// console.log(isJavaScriptFile('image.jpg.js'))
// console.log(isJavaScriptFile(true));
// console.log(isJavaScriptFile(99));