/*

//* Introduction to JS

let fName = "Rahul";
console.log(fName);

10 * 2 * 3 + 4;
console.log(10 * 2 * 3 + 4);

// alert("Hello from VsCode!")

//* Values & Variables

//* Variables
let firstName = "Harsh";

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

//* Variable Rules (important)

// 1. Never start a variable name with number
// let 6years = 6; // ERROR
let year6s = 6;
let years6 = 6;

// 2. You can create variable name with underscore(_) or $ Symbol
let my_name = "Aman";
let _name_ = "Aman";
let my_school_name = "Public School"

let my$name = "Aman";
let $name$ = "Aman";
let my$school$name = "Public School"

// 3. Never use reserved keyword for variables name
// let function = "hello" // ERROR

// 4. Use descriptive variables name
let job1 = "Developer";
let job2 = "Teacher";

let myFirstJob = "Developer";
let myCurrentJob = "Teacher";

console.log(myFirstJob, myCurrentJob);

//* Values (7 Primitive Data types)

// number
let age = 23;
console.log(age);
console.log(typeof age);

// string (with '', "")
let lastName = "Sharma";
console.log(lastName);
console.log(typeof lastName);

// boolean (true or false)
let isAdult = false;
console.log(isAdult);
console.log(typeof isAdult);

// undefined
let job;
console.log(job);
console.log(typeof job);

// null
let jobNull = null;
console.log(jobNull);
console.log(typeof jobNull);

console.log(age, lastName, isAdult, job, jobNull);

//* JavaScript has dynamic typing

let myAge = 23;
console.log(myAge);

//* update a variable
myAge = "Twenty four";
console.log(myAge);

//* let, const and var

let variable1 = "Hello let";
console.log(variable1);
variable1 = "Bye let";
console.log(variable1);
let variable1_1;

const variable2 = "Hello const";
console.log(variable2);
//! variable2 = "Bye const";
//! const variable2_2;

//* (hoisting) -> will cover later
var variable3 = "Hello var";
console.log(variable3);

// When to use let and const

const birthYear = 2001;
let age = 23;

//* Operators in JavaScript
//* 1. Arithmetic Operators (+, -, *, /, **, %)

// exponentiation **
let currentYear = 2024;
let ageRahul = currentYear - 1998;
let ageVishal = currentYear - 2002;
console.log(ageRahul, ageVishal);

console.log(ageRahul * 2, ageVishal / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 => 2 * 2 * 2

const fName = "Raj";
const lName = "Sharma";

//* concatination
console.log(fName + " " + lName);

//* addition
let x = 10;
let y = 10 + 5;
console.log(y);

console.log(10 + 20 + "Hello");

//* mod
console.log(34 % 6);
console.log(9 % 2);
console.log(8 % 2);

//* 2. Assignment Operators (=, +=, -=, *=, /=, %=, **=, ++, --,)

let x = 40;
let y = x;

// x = x + 10;
x += 10; // x = x + 10 => 50
x /= 2; // x = x / 2 => 25
x *= 4; // x = x * 4 => 100
x -= 10;

x++;
x++;
x++;
x++;

y--;
y--;

console.log(x, y);

//* 3. Comparison Operators (>, <, ==, >=, <=)

let currentYear = 2024;
let ageRahul = currentYear - 1998;
let ageVishal = currentYear - 2002;
console.log(ageRahul, ageVishal);

const isRahulAgeGreater = ageRahul > ageVishal;
console.log(isRahulAgeGreater);

const isVishalAgeGreater = ageVishal > ageRahul;
console.log(isVishalAgeGreater);

const age = 18;
const isAdult = age >= 18;
console.log(isAdult);

console.log(currentYear - 1998 > currentYear - 2002);

let marks1 = 80;
console.log(marks1 >= 90);

//* Operator Precedence
console.log("Operator Precedence");

// 18. ()
// 13. **
// 12. *, /, %
// 11. +, -
// 09. <, <=, >, >=
// 02. =, +=, -=, ...

console.log(currentYear - 1998 > currentYear - 2002);

let x, y;

x = y = 25 - 10 - 5;

// 25 - 10 => 15
// 15 - 5 => 10
// y = 10
// x = y

console.log(20 / 2 ** 2);
console.log(20 / (2 * 2));

//* Coding Challenge #1

// Rahul and Vishal are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height).

// 1. Store Rahul's and Vishal's mass and height in variable (massRahul, heightRahul, massVishal, heightVishal).
// 2. Calculate both their BMI's using the formula (BMIRahul, BMIVishal)
// 3. Create a boolean variable 'isRahulHigherBMI' containing information about wether Rahul has a higher BMI than Vishal.

// Test DATA 1: Rahul mass = 78 kg and height = 1.69 m tall, Vishal mass = 92 kg and height = 1.95 m tall
// Test DATA 2: Rahul mass = 85 kg and height = 1.88 m tall, Vishal mass = 85 kg and height = 1.76 m tall

//* Solution 1
let massRahul,
    massVishal,
    heightRahul,
    heightVishal,
    BMIRahul,
    BMIVishal,
    isRahulHigherBMI;

// test data 1
massRahul = 78;
heightRahul = 1.69;
massVishal = 92;
heightVishal = 1.95;

// test data 2
// massRahul = 85;
// heightRahul = 1.88;
// massVishal = 85;
// heightVishal = 1.76;

BMIRahul = massRahul / heightRahul ** 2;
BMIVishal = massVishal / (heightVishal * heightVishal);
console.log(BMIRahul, BMIVishal);

isRahulHigherBMI = BMIRahul > BMIVishal;
console.log("Is Rahul BMI higher? " + isRahulHigherBMI);

//* Strings and Template Literals
const firstName = 'Rahul';
const job = "Developer";
const birthYear = 1995;
const cYear = 2024;

const rahulIntro = "I'm " + firstName + ", a " + (cYear - birthYear) + " year old " + job + "!";
console.log(rahulIntro);

//* Template Literals

const rahulIntro2 = `I'm ${firstName}, a ${cYear - birthYear} year old ${job}!`;
console.log(rahulIntro2);

console.log(`I am regular string`);

console.log("String with \n\multiple \n\lines");
console.log(`String with
multiple
lines`);

//* Talking Decisions if / else Statements

//* if_else
const mohitAge = 19;

// syntax
// if(condition) {if block}

if (mohitAge >= 18) {
    console.log("Mohit can drive a car 🚗")
} else {
    const yearsLeft = 18 - mohitAge;
    console.log(`Mohit is too young to drive. Wait another ${yearsLeft} years.`)
}

const birthYear = 2005;
let century;

if (birthYear > 2000) {
    century = "21st century";
} else {
    century = "20th century";
}
console.log(century);

//* Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote:

// 1. Print a output to the console, saying who has the higher BMI. The message can be either "Rahul's BMI higher than Vishal" or "Vishal's BMI higher than Rahul"
// 2. Use a template literal to include the BMI values in the output.
// Example: "Rahul's BMI (28.7777) is higher than Vishal's BMI (27.66666)!"

//* Solution 2
let massRahul = 78,
    massVishal = 92,
    heightRahul = 1.69,
    heightVishal = 1.95,
    BMIRahul,
    BMIVishal,
    isRahulHigherBMI;

BMIRahul = massRahul / heightRahul ** 2;
BMIVishal = massVishal / (heightVishal * heightVishal);

if (BMIRahul > BMIVishal)
    console.log(`Rahul's BMI (${BMIRahul}) is greater than Vishal's BMI (${BMIVishal})!`);
else
    console.log(`Vishal's BMI (${BMIVishal}) is greater than Rahul's BMI (${BMIRahul})!`);


//* Multiple if_else or ladder if_else

let studentMarks = 84;

// marks >= 90 => grade 'A'
// marks >= 80 => grade 'B'
// marks >= 70 => grade 'C'
// marks < 70 => grade 'F'

if (studentMarks >= 90) {
    console.log("Grade: A");
} else if (studentMarks >= 80) {
    console.log("Grade: B");
} else if (studentMarks >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

//! WRONG WAY
// if (studentMarks >= 70) {
//     console.log("Grade: C");
// } else if (studentMarks >= 80) {
//     console.log("Grade: B");
// } else if (studentMarks >= 90) {
//     console.log("Grade: A");
// } else {
//     console.log("Grade: F");
// }


let number = 2046;

if (number % 2 == 0) {
    console.log("Number is even");
} else {
    console.log("Number is odd");
}

//* Coding Exercise 
//* Nested If_else
//* A store gives discounts based on membership status and the amount spent. Member spending over Rs.100 get a 10% discount. Non-member spending over Rs.150 get a 5% discount, and all other get no discount.

let isMember = 1; // 0: non-member, 1: member
let purchaseAmount = 90;

// membership status
if (isMember == 1) {
    // purchase >= 100
    if (purchaseAmount >= 100) {
        console.log(`Discount: ${purchaseAmount * 0.10}`);
    } else {
        console.log(`Discount: 0`);
    }
} else {
    // purchase >= 150
    if (purchaseAmount >= 150) {
        console.log(`Discount: ${purchaseAmount * 0.05}`);
    } else {
        console.log(`Discount: 0`);
    }
}


//* Type Conversion and Coercion

//* type conversion
const inputYear = '1995';
console.log(typeof inputYear)
console.log(inputYear);

console.log(Number(inputYear));

console.log(Number("Rahul")); // NaN: Not a Number
console.log(Number("Rahul")); // it is a number but it is an invalid number
console.log(typeof NaN);

console.log(String(1234), 1234);

//* Coercion
console.log('I am ' + 23 + ' years old.');
console.log('23' - '10' - 3);
console.log("23" / "2");

let n = '1' + 1; // "11"
n = n - 1; // "11" - 1
console.log(n);


//* 5 Falsy Values: 0, '', undefined. null, NaN

console.log(0, Boolean(0));
console.log("", Boolean(""));
console.log(undefined, Boolean(undefined));
console.log(null, Boolean(null));
console.log(NaN, Boolean(NaN));

let money = 0;

if (money) {
    console.log("Don't spend it all :)");
} else {
    console.log("Earn some money.");
}

let height = 1.79;

if (height) {
    console.log("Height is Defined");
} else {
    console.log("Height is unDefined");
}


//* == vs ===
// both operator used to compare two values but == only compare values and === compare value and data type

const age = "18";

// check value as well as data type
if (age === 18) console.log("You become an adult. (===)")

// only check value
if (age == 18) console.log("You become an adult. (==)")

const num = Number(prompt("Enter your number"));

if (num === 10) {
    console.log("You entered 10");
}

//* Boolean Logic

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log("==AND (&&)==");
console.log(hasDriversLicense && hasGoodVision);

console.log("==OR (||)==");
console.log(hasDriversLicense || hasGoodVision);

console.log("==NOT (!)");
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log("You are able to drive");
// } else {
//     console.log("Someone else should drive");
// }

const isTired = true;

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("You are able to drive");
} else {
    console.log("Someone else should drive");
}

//* Coding Challenge #3

//* There are two teams, teamA and teamB, they compete against each other 3 times. The winner with the hight "AVERAGE SCORE" wins a trophy!

//* 1. Calculate the average score for each team, using the test data below.
//* 2. Compare the team's average scores to determine the winner of the competition, and print to to the console.

//* TEST DATA:
// teamA score 96, 108, 89 and teamB score 88, 91, 110

// 3. Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other and at the same time a score of at least 100 point.

//* TEST DATA
// teamA score 97, 112, 101, teamB 109, 95, 123

const scoreTeamA = (96 + 108 + 89) / 3;
const scoreTeamB = (88 + 91 + 110) / 3;

// console.log(scoreTeamA, scoreTeamB);

// if (scoreTeamA > scoreTeamB) {
//     console.log("Team A is the winner")
// } else if (scoreTeamA < scoreTeamB) {
//     console.log("Team B is the winner");
// } else if (scoreTeamA === scoreTeamB) {
//     console.log("Both win the trophy!");
// }

// const scoreTeamA = (97 + 112 + 101) / 3;
// const scoreTeamB = (109 + 95 + 123) / 3;

console.log(scoreTeamA, scoreTeamB);

if (scoreTeamA > scoreTeamB && scoreTeamA >= 100) {
    console.log("Team A is the winner")
} else if (scoreTeamA < scoreTeamB && scoreTeamB >= 100) {
    console.log("Team B is the winner");
} else if (scoreTeamA === scoreTeamB) {
    console.log("Both win the trophy!");
} else {
    console.log("No one wins the trophy")
}


//* The switch Statement

// time table based on day

const day = 1;

switch (day) {
    case 1:
        console.log("Go to Coaching");
        console.log("Learn JavaScript");
        break;

    case 2:
        console.log("Prepare notes");
        break;

    case 3:
    case 4:
        console.log("Do Practice");
        break;

    case 5:
        console.log("Give exam");
        break;

    case 6:
    case 7:
        console.log("Enjoy Weekend!");
        break;

    default:
        console.log("Not a valid day");
}

console.log("=========If_else========");

if (day == 1) {
    console.log("Go to Coaching");
    console.log("Learn JavaScript");
} else if (day == 2) {
    console.log("Prepare notes");
} else if (day == 3 || day == 4) {
    console.log("Do Practice");
} else if (day == 5) {
    console.log("Give exam");
} else if (day == 6 || day == 7) {
    console.log("Enjoy Weekend!");
} else {
    console.log("Not a valid day");
}


//* Statement vs Expression

// Expression (words)
3 + 4; // 7
1992; // 1992
true && false && !false; // false

// Statement (line made with expression)
if (23 > 10) {
    const str = "23 is bigger";
}

//* Ternary Operator (expression)

const age = 26;

if (age >= 18) {
    console.log("I am adult");
} else {
    console.log("I am not adult");
}

age >= 18 ? console.log("I am adult") : console.log("I am not adult");
// condition ? if true : if false

const drive = age >= 18 ? "I can drive" : "I can not drive";
console.log(drive);

const meAge = 16;
const me = "Rahul";

console.log(`I'm ${meAge} years old ${me}, and I ${meAge >= 18 ? "can" : "can not"} drive a car.`);



*/

//* Coding Challenge #4

// Rahul wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// 1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/ else statement (If it's easier for you, you can start with an if/ else statement, and then try to convert it to a ternary operator!)

// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total is 316.25.

// TEST DATA:
// value 316.25, 275, 40 and 430


// -20%------50-----15%-----300---------20%-----

let bill = 275;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`Your tip is: ${bill >= 50 && bill <= 300 ? '15%' : '20%'}`);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total is ${bill + tip}`);

