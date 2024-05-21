// Task-1:
// Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

function lowestNumber(numbers) {
    return Math.min(...numbers);
}

console.log(lowestNumber(heights2));

// Task -2:
// Find the friend with the smallest name.
const friendsName = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(friendsName) {
    let smallestName = friendsName[0]
    for (const name of friendsName) {
        if (name.length < smallestName.length) {
            smallestName = name;
        }
    }
    return smallestName;
}

console.log(smallestName(friendsName));

// Task-3:
// Your task is to calculate the total budget required to buy electronics:


function calculateElectronicsBudget(laptopQuantity, mobileQuantity, tabletsQuantity) {
    let laptopPrice = 35000 * laptopQuantity;
    let mobilePrice = 20000 * mobileQuantity;
    let tabletPrice = 15000 * tabletsQuantity;
    let totalMoney = laptopPrice + mobilePrice + tabletPrice;
    return totalMoney;
}
console.log(calculateElectronicsBudget(2, 4, 1));

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones) {
    let totalPhone = 0;
    let totalPhonePrice = 0;
    for (const phone of phones) {
        totalPhonePrice = totalPhonePrice + phone.price;
        if (typeof phone.price === 'number') {
            totalPhone++;
        }

    }
    console.log(totalPhone);
    return phonesAvgPrice = totalPhonePrice / totalPhone;
}
console.log(findAveragePhonePrice(phones));


//   Task -5: (Hard)
//   For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

// Define a function to calculate the current salary of an employee
function calculateCurrentSalary(startingSalary, yearlyIncrement, experience) {
    return startingSalary + (yearlyIncrement * experience);
}

// Define a function to calculate the total salary provided by the company in a month
function calculateTotalMonthlySalary(employees) {
    let totalSalary = 0;
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        const currentSalary = calculateCurrentSalary(employee.startingSalary, employee.yearlyIncrement, employee.experience);
        totalSalary += currentSalary;
    }
    return totalSalary;
}

// Example usage:
const employees = [
    { startingSalary: 30000, yearlyIncrement: 1000, experience: 5 },
    { startingSalary: 40000, yearlyIncrement: 1500, experience: 8 },
    { startingSalary: 35000, yearlyIncrement: 1200, experience: 6 }
];

const totalMonthlySalary = calculateTotalMonthlySalary(employees);
console.log("Total monthly salary provided by the company:", totalMonthlySalary);

const employees2 = [
    { name: "shahin", experience: 5, startingSalary: 20000, yearlyIncrement: 5000 },
    { name: "shihab", experience: 3, startingSalary: 15000, yearlyIncrement: 7000 },
    { name: "shikot", experience: 9, startingSalary: 30000, yearlyIncrement: 1000 },
    { name: "shohel", experience: 0, startingSalary: 29000, yearlyIncrement: 4000 },
];

console.log(calculateTotalMonthlySalary(employees2));


