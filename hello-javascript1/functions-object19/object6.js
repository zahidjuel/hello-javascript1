// declare object

var student = { id: 112, nameStudent: 'Solaiman Khan', class: 9, marks: 98 }
console.log(student);
console.log(student.nameStudent);


var mobile = {
    brand: 'Samsung',
    price: 19990,
    storage: '64gb',
    camera: '7mp',
}

console.log(mobile);
console.log(mobile.brand);
//

var myComputer = {
    barnd: 'Asus',
    price: 58590,
    color: 'silver gray',
    processor: '8th gen'
}

console.log(myComputer);
// get object value
console.log(myComputer.price);

// set object value
myComputer.processor = 'i3 gen';
console.log(myComputer);

const subject = {
    name1: "ICT",
    teacher: "Zahid Juel",
    student:{
        name: "Jarin",
        college: "Dhaka cantonment",
        marks: [12, 45, 67, 78],
        AmarNotunValobasha: true,
    },
    isTeacherMarks: 99,
}

console.log(subject);
console.log(subject.isTeacherMarks);
console.log(subject.student.AmarNotunValobasha);

 subject.student.marks = [1, 2, 3, 4, 5];
 console.log(subject);

 subject.student['AmarNotunValobasha'] = 'Jarin';
 console.log(subject);

 console.log(Object.keys(subject));
 console.log(Object.values(subject));
 