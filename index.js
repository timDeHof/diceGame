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

  // 1. Display the dice number instead of logging it out
  // 2. Use the 'active' class to display which players turn it is
  // Hint: use the .classList.remove() method to remove and classList.add() method to add
  // 3. Update the "message" DOM node so that it states who's turn it is
  // Find out  which players turn it is & log out the value e.g "Player 1 rolled 5"
  if (player1Turn) {
    player1DiceEl.textContent = randomNumber;
    player1DiceEl.classList.remove('active');
    player2DiceEl.classList.add('active');
    messageEl.textContent = 'Player 2 Turn';
  } else {
    player2DiceEl.textContent = randomNumber;
    player2DiceEl.classList.remove('active');
    player1DiceEl.classList.add('active');
    messageEl.textContent = 'Player 1 Turn';
  }

  // switch the turn back to the other player
  if (player1Turn) {
    player1Turn = false;
  } else {
    player1Turn = true;
  }
});
