"use strict";

// Selecting elements
const player0El = document.querySelector(".player-0");
const player1El = document.querySelector(".player-1");
const score0El = document.querySelector("#score-0");
const score1El = document.querySelector("#score-1");
const currScore0El = document.querySelector("#current-0");
const currScore1El = document.querySelector("#current-1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".restart");
const btnRoll = document.querySelector(".roll");
const btnHold = document.querySelector(".hold");

// variables
let totalScore, currentScore, activePlayer, isGameRunning;

// initial states
const init = () => {
  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0; // 0 = 1st, 1 = 2nd
  isGameRunning = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currScore0El.textContent = 0;
  currScore1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.add("player-active");
  player1El.classList.remove("player-active");
  player0El.classList.remove("player-winner");
  player1El.classList.remove("player-winner");
};
init();

const switchPlayer = () => {
  currentScore = 0;
  document.querySelector(`#current-${activePlayer}`).textContent = currentScore;

  activePlayer = activePlayer == 0 ? 1 : 0;
  player0El.classList.toggle("player-active");
  player1El.classList.toggle("player-active");
};

// roll btn
btnRoll.addEventListener("click", () => {
  if (isGameRunning) {
    const dice = Math.trunc(Math.random() * 6 + 1);

    diceEl.classList.remove("hidden");
    diceEl.src = `./images/dice-${dice}.svg`;

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current-${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// hold btn
btnHold.addEventListener("click", () => {
  if (isGameRunning) {
    totalScore[activePlayer] += currentScore;
    document.querySelector(`#score-${activePlayer}`).textContent =
      totalScore[activePlayer];

    if (totalScore[activePlayer] >= 100) {
      // finish the game
      isGameRunning = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("player-active");
    } else {
      switchPlayer();
    }
  }
});

// new btn
btnNew.addEventListener("click", init);
