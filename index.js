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

  // 1. Find out  which players turn it is
  if (player1Turn) {
    console.log('player 1 rolled ' + randomNumber);
  } else {
    console.log('player 2 rolled ' + randomNumber);
  }
  // 2. log out the value e.g "Player 1 rolled 5"
  // 3. switch the turn back to the other player
  if (player1Turn) {
    player1Turn = false;
  } else {
    player1Turn = true;
  }
});
