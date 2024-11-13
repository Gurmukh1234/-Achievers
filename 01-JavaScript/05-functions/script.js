"use strict";

/*
// Default Parameters
const bookings = [];

const createBooking = function (
  trainNum,
  numPassengers = 1,
  price = 400 * numPassengers
) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 400;

  const booking = {
    trainNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("1001");
createBooking("1001", 2, 800);
createBooking("1001", 4, 1600);
createBooking("1001", 6);

console.log(bookings);

// How Passing Arguments Works: Values vs. Reference
const train = "DL1204";
const rahul = {
  name: "Rahul Sharma",
  age: 25,
};

const checkIn = function (trainNum, passenger) {
  trainNum = "DL9999";
  passenger.name = "Mr. " + passenger.name;
};

checkIn(train, rahul);
console.log(train);
console.log(rahul);

//* First-class function vs Higher-order function

//* First-class function
// - JavaScript treats functions as first-class citizen
// - This means the functions are simply value
// - Functions are just another "type" of objects

// Store functions in variable properties:
const sum = 100;
const add = (a, b) => a + b;

const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

// Pass functions as arguments to OTHER functions:
const greet = () => console.log("Hey Rahul");
document.querySelector("h1").addEventListener("click", greet);

//* Return functions from functions
//* counter.inc.bind(someOtherObject);

//* Higher-order function
// - A function that receives another function as an argument, that returns  a new function or both

// Functions that receives another  function
document.querySelector("h1").addEventListener("click", greet);

// function that return new function
function count() {
  let counter = 0;
  return function () {
    counter++;
  };
}

/////////////////////////////
// Functions accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher order function
const transform = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transform("JavaScript is the best!", oneWord);
*/

// call and apply method
const person = {
  name: "Rahul",
  age: 25,
  friends: [],

  makeFriends(friendName, age) {
    console.log(`${this.name} made a new friend named ${friendName}`);
    this.friends.push({
      name: friendName,
      age,
    });
  },
};

person.makeFriends("Harsh", 26);
person.makeFriends("Vishal", 22);

// console.log(person);

const person2 = {
  name: "Mohit",
  age: 28,
  friends: [],
};

const makeFriends = person.makeFriends;

// Does Not Work
// makeFriends("Naman", 23);

// Call method
makeFriends.call(person2, "Naman", 23);
// console.log(person2);

makeFriends.call(person, "Naman", 23);
// console.log(person);

const person3 = {
  name: "Kartik",
  age: 30,
  friends: [],
};

makeFriends.call(person3, "Test", 20, 21, 23);

// Apply method
const friend = ["Test2", 20];
makeFriends.apply(person3, friend);

// console.log(person3);

const makeFriendPeron2 = makeFriends.bind(person2);

makeFriendPeron2("harsh", 23);
makeFriendPeron2("vishal", 24);

console.log(person);
console.log(person2);
console.log(person3);
