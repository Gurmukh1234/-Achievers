"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Subway",
  location: "123 Main St",
  categories: ["Italian", "Indian", "Vegetarian", "Organic"],
  starterMenu: ["Fries", "Soup", "Salad"],
  mainMenu: ["Pizza", "Pasta", "Burger"],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ time = "22:00", address, starterIndex = 1, mainIndex = 1 }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is you pasta with ${ing1}, ${ing2} and ${ing3}.`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
///////////////////////////////////
//* Destructuring Arrays
const arr = [10, 20, 30];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// skip an element
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// let temp = main;
// main = secondary;
// secondary = temp;

[secondary, main] = [main, secondary];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// num, num, arr
// num, num, [num, num]

const [i, j, [k, l]] = nested;
console.log(i, j, k, l);

// Default values
const [p = 1, q = 1, r = 1] = [100, 200];
console.log(p, q, r);

///////////////////////////////////
//* Destructuring Objects

// Use destructuring objects as function parameter
restaurant.orderDelivery({
  time: "22:30",
  address: "Delhi",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Noida",
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// custom variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variable
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

///////////////////////////////////
//* The Spread Operators (...)
const arr = [7, 8, 9];
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...arr);
console.log(7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Garlic bread"];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// iterables: arrays, strings, maps, sets, not objects
const str = "Vishal";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);

// Real example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = { ...restaurant, name: "KFC", foundedIn: 1998 }; // name: "", address: ""
console.log(newRestaurant);

///////////////////////////////////
//* Rest Pattern and Parameters
// 1) destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]]; // [1, 2, 3, 4]

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

const [firstItem, secondItem, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(firstItem, secondItem, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat);
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(add(100, 250));
console.log(add(100, 250, 300));
console.log(add(100, 250, 300, 1000));

const nums = [100, 250, 300, 1000];
console.log(add(...nums));

restaurant.orderPizza("mushrooms");
restaurant.orderPizza("mushrooms", "onion", "olives");

///////////////////////////////////
//* Short Circuiting (&& and ||)
//* falsy value: 0, "", null, undefined, NaN
//* Use ANY data type, return ANY data type, short-circuiting

//* (||) first truthy value, if no truthy value then last falsely value
console.log("---- OR ----");
console.log(3 || "Rahul");
console.log("" || "Rahul");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuests = 0; // false
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

//* (&&) first falsy value, if no falsy value then last truthy value
console.log("---- AND ----");
console.log(0 && "Rahul");
console.log(7 && "Rahul");

console.log("Hello" && 23 && null && "Harsh");

// practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPasta && restaurant.orderPizza("mushrooms", "spinach");

///////////////////////////////////
//* The Nullish Operator (??)
// falsy value: undefined, null, NaN
// truthy value: 0, ""
const guest3 = restaurant.numGuests ?? 10;
console.log(guest3);

*/

/*

///////////////////////////////////
//* Coding Questions

Codding Challenge

We're building a football betting app!
Suppose we get data from a web service about a certain game ('game' variable). In this challenge we're gonna work with that data.

Your tasks:
1. Create one player array for each team (variables 'players1' and 'players2') /

2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players /

3. Create an array 'allPlayers' containing all players of both teams (22 players) /

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic' /

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2') /

6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in) /

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored

-----------
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.

const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2.

const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5.
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored.`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// 7.
team1 < team2 && console.log("Team 1 is more likely to win");
team2 < team1 && console.log("Team 2 is more likely to win");

///////////////////////////////////
//* The for-of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log("--- for loop ---");

for (let i = 0; i < menu.length; i++) {
  console.log(`${i + 1}: ${menu[i]}`);
}

console.log("--- for of loop ---");
for (let el of menu) {
  console.log(el);
}

console.log("--- for of loop entries ---");
for (let [i, el] of menu.entries()) {
  // console.log(`${el[0] + 1}: ${el[1]}`);
  console.log(`${i + 1}: ${el}`);
}

// ["a", "b", "c"].entries() => [[0, "a"], [1, "b"], [2, "c"]]

///////////////////////////////////
//* Optional Chaining

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`on ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does no exist");

//* Loop Objects: object keys, values, and entries

//* Property NAMES
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//* Property VALUES
const values = Object.values(restaurant.openingHours);
console.log(values);

//* Entire object
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (let [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}.`);
}

///////////////////////////////////
//* Sets (es6)
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Burger",
  "Sushi",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet);

console.log(new Set("Naman"));

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Roti"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Sushi");
// ordersSet.clear();
console.log(ordersSet);

for (let el of ordersSet) console.log(el);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];

console.log(staffUnique);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

///////////////////////////////////
//* Maps

const rest = new Map();
rest.set("name", "Subway");
rest.set(1, "Noida");
console.log(rest.set(2, "Delhi"));

rest
  .set("categories", ["Italian", "Indian", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 20;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");

console.log(rest);
console.log(rest.get(arr));
console.log(rest.size);

*/

/*
///////////////////////////////////
// Working with Strings

const str1 = "Hello, World!";
const str2 = "This is a JavaScript String";

console.log(str1[0]);
console.log(str1[1]);
console.log(str1[2]);
console.log("Mohit"[0]);

console.log(str1.length);

//* INDEX
console.log(str1.indexOf("W"));
console.log(str1.indexOf("l"));
console.log(str1.lastIndexOf("l"));
console.log(str2.indexOf("JavaScript"));

//* SLICE
console.log(str1.slice(7));
console.log(str2.slice(10, 20));

console.log(str2.slice(0, str2.indexOf(" ")));
console.log(str2.slice(str2.lastIndexOf(" ") + 1));

console.log(str1.slice(-3));
console.log(str1.slice(1, -3));

const str3 = "XYZ Air India";

console.log(str3.toLowerCase());
console.log(str3.toUpperCase());

// Fix capitalization in name
const name = "mOhIt";
const nameLower = name.toLowerCase();
const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
console.log(nameCorrect);

// Comparing emails
const email = "hello@rahul.io";
const loginEmail = "   Hello@Rahul.Io   \n";
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceUSD = "288,97$";
const priceINR = priceUSD.replace("$", "₹").replace(",", ".");
console.log(priceINR);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Hello"));
console.log(plane.startsWith("Airb"));

*/

// Split and join

console.log("a+very+nice+string".split("+"));
console.log("Rahul Sharma".split(" "));

const [firstName, lastName] = "Rahul Sharma".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");

console.log(newName);

const message = "Go to gate 23!";

console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Rahul".padStart(20, "+"));

for (let i = 1; i <= 100; i++) {
  console.log(`${i}`.padStart(3, "+"));
}
