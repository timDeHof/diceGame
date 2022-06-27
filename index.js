// Create variables for the game state
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// Create variables to store references to the necessary DOM nodes
const player1ScoreEl = document.getElementById('player1Scoreboard');
const player2ScoreEl = document.getElementById('player2Scoreboard');
const messageEl = document.getElementById('message');
const player1DiceEl = document.getElementById('player1Dice');
const player2DiceEl = document.getElementById('player2Dice');
const rollBtnEl = document.getElementById('rollBtn');
const resetBtnEl = document.getElementById('resetBtn');

/* Hook up a click event listener to the Roll Dice Button. Log out a random number between 1 and 6. Hint: use Math.floor() and Math.random() */
rollBtnEl.addEventListener('click', function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);
});
