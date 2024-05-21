const today = new Date();
console.log(today);

const date1 = new Date('2026-05-11');
console.log(date1);
console.log(date1.getMonth());
console.log(date1.getDay());

const specifcdate = new Date(2016, 4, 5);
console.log(specifcdate);

specifcdate.setMonth(11);
console.log(specifcdate.toLocaleString('en-GB'));

let stringDate = Date();
console.log(stringDate); // "Tue Aug 23 2022 14:47:12 GMT-0700 (Pacific Daylight Time)"

let objectDate = new Date();
console.log(objectDate); // Tue Aug 23 2022 14:47:12 GMT-0700 (Pacific Daylight Time



// unix epoc 
