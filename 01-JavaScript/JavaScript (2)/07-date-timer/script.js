"use strict";

//* Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance-value");
const labelSumIn = document.querySelector(".summary-value-in");
const labelSumOut = document.querySelector(".summary-value-out");
const labelSumInterest = document.querySelector(".summary-value-interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login-btn");
const btnTransfer = document.querySelector(".form-btn-transfer");
const btnLoan = document.querySelector(".form-btn-loan");
const btnClose = document.querySelector(".form-btn-close");
const btnSort = document.querySelector(".btn-sort");

const inputLoginUsername = document.querySelector(".login-input-user");
const inputLoginPin = document.querySelector(".login-input-pin");
const inputTransferTo = document.querySelector(".form-input-to");
const inputTransferAmount = document.querySelector(".form-input-amount");
const inputLoanAmount = document.querySelector(".form-input-loan-amount");
const inputCloseUsername = document.querySelector(".form-input-user");
const inputClosePin = document.querySelector(".form-input-pin");

//* DATA

const account1 = {
  owner: "John Doe",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Harsh Mishra",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];
// const account1 = {
//   owner: "Rahul Kumar", // rk
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300, 100],
//   interestRate: 7,
//   pin: 1111,
// };

// const account2 = {
//   owner: "Vicky Singh", // vs
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 6,
//   pin: 2222,
// };

// const account3 = {
//   owner: "Mohit Sharma", // ms
//   movements: [200, -200, 340, -20, 50, 400, -460],
//   interestRate: 6.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: "Raj Verma", // rv
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 8,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

//////////////////////////////////
// App logic

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdraw";
    const html = `
<div class="movements-row">
    <div class="movements-type movements-type-${type}">${i + 1} ${type}</div>
    <div class="movements-date">3 days ago</div>
    <div class="movements-value">${Math.abs(mov)}₹</div>
</div>`;

    //console.log(html);
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}₹`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .reduce((acc, int) => acc + int, 0);

  labelSumIn.textContent = `${incomes}₹`;
  labelSumOut.textContent = `${Math.abs(out)}₹`;
  labelSumInterest.textContent = `${Math.abs(interest)}₹`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

// Event handlers
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;

    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginUsername.blur();
    inputLoginPin.blur();

    updateUI(currentAccount);
  } else {
    labelWelcome.textContent = "Credentials not valid";
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log("All correct");

    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    // delete account
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
});

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300, 100];

//Math & Rounding
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 10, 14, 12, 19, 20, 5, 7));
console.log(Math.max(5, 10, 14, 12, 19, "20", 5, 7));

console.log(Math.min(5, 10, 14, 12, 19, 20, 5, 7));

//Rounding Integers

console.log(Math.floor(4.7));
console.log(Math.ceil(4.7));
console.log(Math.round(4.7));
console.log(Math.trunc(4.7));
console.log((4.7).toFixed(2));
console.log((4.7).toFixed(0));

//Creating Dates

const today = new Date();
console.log(today);

const yestoday = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 1
);
console.log(yestoday);

console.log(newDate(account1.movementsDates[0]));
console.log(newDate(2011, 10, 19, 15, 23, 45));
console.log(newDate(2011, 10, 19));
console.log(newDate(0));
console.log(newDate(3 * 24 * 60 * 60 * 1000));
const future = newDate(2034, 10, 21, 14, 23, 45);

console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());

console.log(future.getDay());

console.log(future.getHours());

console.log(future.getMinutes());

console.log(future.getSeconds());

console.log(future.getTime());

console.log(future.toISOString());
console.log(new Date(2047715625000));

/*
//Random Number


//////////////////////////////////
// Simple array methods
let arr = ["a", "b", "c", "d", "e"];

//////////////////////////////////
// Slice
console.log("===SLICE===");

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//////////////////////////////////
// Splice
console.log("===SPLICE===");
// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr.splice(1, 2));
console.log(arr);

//////////////////////////////////
// Reverse
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];

console.log(arr2.reverse());
console.log(arr2);

//////////////////////////////////
// Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//////////////////////////////////
// Join
console.log(letters.join(", "));

//* The new at Method
arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

//////////////////////////////////
//* Looping Arrays: forEach

// for (let mov of movements)
for (let [i, mov] of movements.entries()) {
  if (mov > 0) console.log(`Movement ${i + 1}: you deposited ${mov}`);
  else console.log(`Movement ${i + 1}: you withdrew ${mov}`);
}

console.log("===FOREACH===");

movements.forEach(function(element, index, arr) {
  if (element > 0)
    console.log(`Movement ${index + 1}: you deposited ${element}`);
  else console.log(`Movement ${index + 1}: you withdrew ${element}`);
});

// A function that accepts up to three arguments. forEach call the callbackfn function one time for each element in the array.

//////////////////////////////////
// The map Method

const nums = [3, 1, 4, 3, 2];
const newNums = nums.map(function (el, i, arr) {
  return el * 2;
});

console.log(newNums);

const usdToInr = 84.14;
const movementsInr = movements.map((mov) => mov * usdToInr);

console.log(movements);
console.log(movementsInr);

const movementsDescription = movements.map(
  (mov, i) => `${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`
);

console.log(movementsDescription);

//////////////////////////////////
// The filter Method

const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});

const withdrawals = movements.filter((mov) => mov < 0);

console.log(deposits);
console.log(withdrawals);

//////////////////////////////////
// The reduce Method
console.log(movements);

let sum = 0;

for (let i = 0; i <= movements.length - 1; i++) {
  sum = sum + movements[i];
}

let sum2 = 0;

for (let mov of movements) {
  sum2 += mov;
}

let sum3 = movements.reduce(function (acc, el, i, arr) {
  // console.log(`Iteration ${i}: ${acc}`);
  return acc + el;
}, 0);

console.log(sum, sum2, sum3);

let max = movements.reduce(function (acc, mov) {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);

//////////////////////////////////
// The Magic of Chaining methods

const usdToInr = 80;
console.log(movements);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
const depositsInInr = deposits.map(function (mov) {
  return mov * usdToInr;
});
const sumOfDepositsInInr = depositsInInr.reduce(function (acc, mov) {
  return acc + mov;
}, 0);

console.log(deposits);
console.log(depositsInInr);
console.log(sumOfDepositsInInr);

const totalDepositsINR = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * usdToInr)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsINR);

const demo = [{ name: "HARSH" }, { name: "RAHUL" }];
demo.forEach(function (personObj) {
  personObj.newKey = personObj.name.toLowerCase();
});
console.log(demo);

const obj = {
  age: 24,
};
obj.test = "Hello";
console.log(obj);

//////////////////////////////////
// The find method

const firstWithdrawalIndex = movements.findIndex(function (el, i, arr) {
  return el < 0;
});

const firstWithdrawal = movements.find(function (el, i, arr) {
  return el < 0;
});

console.log(movements.includes(-400));

console.log(firstWithdrawalIndex, firstWithdrawal);

const account = accounts.find((acc) => acc.owner == "Raj Verma");
console.log(account);

*/
