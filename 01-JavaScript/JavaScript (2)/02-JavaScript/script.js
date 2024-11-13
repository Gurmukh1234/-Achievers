"use strict";

/*
//* Activate Strict Mode

let hasDriversLicense = false;
const passDrivingTest = true;

if (passDrivingTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive.");

const interface = "Cat";
const private = 534;

//* Functions in JavaScript

function printer() {
    console.log("My name is Rahul");
}

// calling / running / invoking function
printer();
printer();
printer();

// 1. function starter line / header
// 2. function parameters list
// 3. function body

// 4. passing function arguments
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    // console.log(juice);
    return juice;
}

const appleJuice = fruitProcessor(4, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 4);
console.log(orangeJuice);

const num = Number('23');
console.log(num);

//* Function Declaration vs Function Expression

const age1 = calcAge1(1998);
// Function declaration
function calcAge1(birthYear) {
    return 2024 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}
const age2 = calcAge2(1990);

// Arrow function (one liner func)
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(2005)

console.log(age1, age2, age3);

//* Function Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;

    return juice;
}

const appleJuice = fruitProcessor(4, 0);
const mixedJuice = fruitProcessor(2, 2);
console.log(appleJuice);
console.log(mixedJuice);

// Coding Challenge 1 HW

//* Introduction to Arrays

const friend1 = "Rahul";
const friend2 = "Vishal";
const friend3 = "Raj";

const friends = ["Rahul", "Vishal", "Raj", "Harsh", "Mohit"];
console.log(friends);

const years = new Array(2000, 1998, 1995, 1980);

// [element0, element1, element2]

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Vansh";
console.log(friends);

// friends = ["hello", "bye"]

const firstName = "Harshit";
const harshit = [firstName, 'Sharma', 2024 - 1999, 'Developer', friends];

console.log(harshit);
console.log(harshit[4][0]);

// Exercise
const calAge = function (birthYear) {
    return 2024 - birthYear;
}

const birthYears = [1990, 1967, 2010, 2018];

const age1 = calAge(birthYears[0]);
const age2 = calAge(birthYears[1]);
const age3 = calAge(birthYears[2]);
const age4 = calAge(birthYears[3]);

console.log(age1, age2);

const ages = [calAge(birthYears[0]), calAge(birthYears[1]), calAge(birthYears[2]), calAge(birthYears[3])];
console.log(ages);

//* Basic Array Operations (Methods)

const friendsNew = ["Rahul", "Vishal", "Raj"];
console.log(friendsNew);

// Add elements
// last index
friendsNew.push("Harsh");
console.log(friendsNew);

// first index
friendsNew.unshift("Rohit");
console.log(friendsNew);

// Remove elements
// last index
friendsNew.pop();
console.log(friendsNew);

// first index
friendsNew.shift();
console.log(friendsNew);

console.log(friendsNew.indexOf("Raj"));
console.log(friendsNew.indexOf("Ajay"));

console.log(friendsNew.includes("Rahul"));
console.log(friendsNew.includes("rahul"));
console.log(friendsNew.includes("xyz"));


//* Coding Challenge 5

// Back to the two teams, the TEAM-A and the TEAM-B! There is a new discipline, which works differently. Each team competes 3 times, and then the average score of the 3 scores is calculated. A team only wins if the it has at least double the average score of the other team. Otherwise no team wins!

//* Your tasks:
//* 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
//* 2. Use this function to calculate the average for both teams
//* 3. Create a function 'checkWinner' that takes the average score of each team as a parameter ('avgTeamA' and 'avgTeamB') and then logs the winner to the console, together with the victory points. Example: "AvgTeamB wins( 30 vd 13)"
//* 4. use the 'checkWinner' function to determine teh winner for oth DATA 1 and Data 2

// DATA 1: Team-A score 44, 23, 71. Team-B score 65, 54, 49
// DATA 2: Team-A score 85, 54, 41. Team-B score 23, 34, 27

const calcAverage = (sc1, sc2, sc3) => (sc1 + sc2 + sc3) / 3;

const checkWinner = function (avgTeamA, avgTeamB) {
    if (avgTeamA >= 2 * avgTeamB) {
        console.log(`TeamA wins (${avgTeamA} vs ${avgTeamB})`);
    } else if (avgTeamB >= 2 * avgTeamA) {
        console.log(`TeamB wins (${avgTeamB} vs ${avgTeamA})`);
    } else {
        console.log("No team wins the game!");
    }
}

const avgA = calcAverage(44, 23, 71);
const avgB = calcAverage(65, 54, 49);
console.log(avgA, avgB);
checkWinner(avgA, avgB)

const avgA2 = calcAverage(85, 54, 41);
const avgB2 = calcAverage(23, 34, 27);
console.log(avgA2, avgB2);
checkWinner(avgA2, avgB2);


//* Coding Challenge 6

//* Rahul os still building his tip calculator, using the same rule before. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

//* 1. Write a function 'calcTip' that takes any bill values as an input and returns the corresponding tip.
//* 2. And now let's use arrays! So create an array 'bills' , containing the text data bills below
//* 3. Create an array 'tips' containing the tip value for each bill, calculate from the function you created before.
//* 4. Create an array 'total' containing the total value, Bill + tips




// Test Data: 125, 555, and 44

const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills);
console.log(tips);
console.log(total);


//* Objects in JavaScript

const rahulArray = [
    'Rahul',
    'Sharma',
    2024 - 1997,
    'Developer',
    ['Mohit', 'Vishal', 'Harsh']
];

const rahulObject = {
    firstName: "Rahul",
    lastName: "Sharma",
    age: 2024 - 1997,
    job: "Teacher",
    friends: ['Mohit', 'Vishal', 'Harsh']
};

console.log(rahulObject);

//* Dot vs Bracket Notation

console.log(rahulObject.lastName);
console.log(rahulObject["lastName"]);

const nameKey = 'Name';
console.log(rahulObject['first' + nameKey]); // 'firstName'
console.log(rahulObject['last' + nameKey]); // 'lastName'

const interestedIn = prompt('What do you want to know about Rahul? Choose between firstName, lastName, age, job, and friends')

if (rahulObject[interestedIn]) {
    console.log(rahulObject[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

// Object Methods(function)
const rahulObject = {
    firstName: "Rahul",
    lastName: "Sharma",
    birthYear: 1997,
    job: "Teacher",
    friends: ['Mohit', 'Vishal', 'Harsh'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2024 - birthYear;
    // },

    // calcAge: function () {
    //     // console.log(this);
    //     return 2024 - this.birthYear;
    // },

    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};

console.log(rahulObject.calcAge());
console.log(rahulObject.age);
console.log(rahulObject.age);

// "Rahul is a 27-years old teacher, and he has a driver's license"
console.log(rahulObject.getSummary());

//* Coding Challenge #6

//* Let's go back to Rahul and Vishal comparing their BMIs! this time. let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height).

//* 1. For each of them, create an object with properties for their full name, mass and height (Rahul Sharma and Vishal Gupta)
//* 2. Create a 'calcBMI' method on each objects to calculate the BMI (the same method on both objects).
//* 3. Log to the console who has the higher BMI, together with the full name and respective BMI. Example: "Rahul Sharma's BIM (28.3) is higher than Vishal Gupta's BMI (23.9)!"

//* Test Data: Rahul weight 78 kg and 1.69 m tall Vishal weight 92 kg and 1.95 m tall

const rahulObj = {
    fullName: "Rahul Sharma",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
}
const vishalObj = {
    fullName: "Vishal Gupta",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
}

rahulObj.calcBMI();
vishalObj.calcBMI();

if (rahulObj.bmi > vishalObj.bmi)
    console.log(`${rahulObj.fullName}'s BMI (${rahulObj.bmi}) is higher than ${vishalObj.fullName}'s BMI (${vishalObj.bmi})!`);
else if (vishalObj.bmi > rahulObj.bmi)
    console.log(`${vishalObj.fullName}'s BMI (${vishalObj.bmi}) is higher than ${rahulObj.fullName}'s BMI (${rahulObj.bmi})!`);
else console.log(`Both have the same BMI!`);


// Iteration The for loop

// Manually written code
// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// Automate (for loop)
// for loops keeps running while condition is true
// 1. Deceleration(one time only)
// 2. condition
// 3. Updating

for (let i = 1; i <= 10; i++) {
    console.log("Lifting weights repetition " + i);
}

// let i = 1; true; block; i++
// i = 2; true; block; i++
// i = 3; true; block; i++
// ...
// i = 9; true; block; i++
// i = 10; true; block; i++
// i = 11; false; exit -for-loop

for (let x = 2; x <= 20; x = x + 2) {
    console.log(x);
}

for (let x = 1; x <= 10; x++) {
    console.log(x * 2);
}

// n * i = n*i
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// ...
// 5 * 10 = 50

let n = Number(prompt("Enter a number"));

for (let i = 1; i < 11; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}

// reverse for loop

for (let x = 10; x >= 1; x--) {
    console.log(x);
}

const rahulArray = [
    'Rahul',
    'Sharma',
    2024 - 1997,
    'Developer',
    ['Mohit', 'Vishal', 'Harsh'],
    true,
];

const duplicateArr = [];
const types = [];

// looping array

for (let i = 0; i <= rahulArray.length - 1; i++) {
    console.log(rahulArray[i]);
    duplicateArr[i] = rahulArray[i];
    // types[i] = typeof rahulArray[i];
    types.push(typeof rahulArray[i]);
};

console.log(duplicateArr);
console.log(types);

const years = [1991, 1976, 2000, 2005, 2008];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages[i] = 2024 - years[i];
}
console.log(ages);

for (let i = 0; false; i++) {
  console.log("Infinite loop");
}

//* Break And Continue
const rahulArray = [
  "Rahul",
  "Sharma",
  2024 - 1997,
  "Developer",
  ["Mohit", "Vishal", "Harsh"],
  true,
];

console.log("--------Print Only String-------");
for (let i = 0; i < rahulArray.length; i++) {
  if (typeof rahulArray[i] != "string") continue;

  console.log(rahulArray[i]);
}

console.log("--------Stop with number-------");
for (let i = 0; i < rahulArray.length; i++) {
  if (typeof rahulArray[i] == "number") break;

  console.log(rahulArray[i]);
}

//* nested for loop

for (let exercise = 1; exercise <= 5; exercise++) {
    console.log(`------------ Starting exercise ${exercise}`);
    
    for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: repetition ${rep}`);
  }
}


//* While Loop

let rep = 1;

while (rep <= 10) {
    console.log(`Repetition ${rep}`);
    rep++;
}





*/

let dice = Math.trunc(Math.random() * 6 + 1);

console.log(dice);

// Math.random()                     => 0.00000000001, 0.99999999999
// Math.random() * 6                 => 0.00000000006, 5.99999999994
// Math.random() * 6 + 1             => 1.00000000006, 6.99999999994
// Math.trunc(Math.random() * 6 + 1) => 1, 6

while (dice != 6) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 6 + 1);

  if (dice == 6) console.log("You got 6");
}
