"use strict";
console.log("Functions");

//Default Parameters

// let bookings = [];

// let createBooking = function (
//   trainNum,
//   numPassangers = 1,
//   price = 400 * numPassangers
// ) {
//   let booking = {
//     trainNum,
//     numPassangers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("1001");
// createBooking("1001", 2);
// createBooking("1001", 4, 1600);

// //Passing arguments : Values vs References

// let train = "Dl123";
// let rahul = {
//   name: "Rahul Sharma",
//   age: 25,
// };

// let checkIn = function (trainNum, passenger) {
//   trainNum = "Dl3456";
//   passenger.name = "Mr " + passenger.name;
// };

// checkIn(train, rahul);

// console.log("Train: ", train);
// console.log("Rahul: ", rahul);

// First class functions :
//JS treat funcs as first class functions, this means that funcs are siply values
// let sum = 100;
// let add = (a, b) => a + b;

// let counter = {
//   value: 23,
//   inc: function () {
//     this.value++;
//   },
// };

//passing funcs as args in another funcs

// let greet = () => console.log("Hello Rahul");
// document.querySelector("h1").addEventListener("click", greet);

// //Return funcs from funcs
// counter.inc.bind(someOtherObject);

// // Higher Order Functions- that receives another funcs as args or that returns new funcs or both

// // funcs that  return new funcs

// function count(){
//   let counter = 0;
//   return function(){
//     return counter++;
//   }
// }

// //funcs accepting callback functions
// let oneWord=function(str){
//   return str.replace(/ /g, "").toLowerCase();
// }

// let upperFirstWord=function(str){
//   let [first,...others] = str.split(" ");
//   return [first.toUpperCase(),...others].join(" ");
// }

// //higher order functions
// let transform=function(str,fn){
// console.log(`Original str: ${str}`)
// console.log( `Transform str: ${fn(str)}`)
// console.log(`transform by: ${str.name}`)
// }

// transform("hello world", oneWord);

//call and apply method

let person = {
  name: "John Doe",
  age: 30,
  friends: [],
  makeFriends(friendName, age) {
    console.log(`${this.name}made a new friend named ${friendName}`);
    this.friends.push({ name: friendName, age });
  },
};

person.makeFriends("Harsh", 24);
person.makeFriends("Suresh", 26);
console.log(person);

let person2 = {
  name: "Jane Doe",
  age: 28,
  friends: [],
};

let makeFriends = person.makeFriends;

//call method - accept comma separated values

makeFriends.call(person2, "Mary", 22);
console.log(person2);

//apply method - Accepts array
let person3 = {
  name: " Doe",
  age: 28,
  friends: [],
};

let friend = ["test2", 20];

makeFriends.apply(person3, friend);
console.log(person3);

//bind method
let makeFriendsPerson2 = makeFriends.bind(person2);

makeFriendsPerson2("Mike", 25);
console.log(person2);
