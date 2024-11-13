"use strict";

/*
console.log(document.querySelector("h1"));
console.log(document.querySelector("#heading"));
console.log(document.querySelector(".main-heading"));

console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number";

document.querySelector(".score").textContent = 10;
document.querySelector(".number").textContent = 14;

console.log(document.querySelector(".guess"));
document.querySelector(".guess").value = 13;
console.log(document.querySelector(".guess").value);

*/

//* 1. Generate random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector(".number").textContent = "?";
document.querySelector(".score").textContent = score;
document.querySelector(".highscore").textContent = highScore;

const display = function (message) {
  document.querySelector(".message").textContent = message;
};

//* 2. check btn
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (guess === 0) {
    display("⛔ No Number!");
  } else if (guess === secretNumber) {
    display("🥳 Correct Number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      display(guess > secretNumber ? "👆 Too High!" : "👇 Too Low!");
      document.querySelector(".score").textContent = score;
    } else {
      score = 0;
      document.querySelector(".score").textContent = score;
      display("😱 You Lost!");
    }
  }
});

// 3. Again btn
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  display("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";

  document.querySelector("body").style.backgroundColor = "#222";
});
