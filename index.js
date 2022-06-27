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

function showDisplayButton() {
  rollBtnEl.style.display = 'none';
  resetBtnEl.style.display = 'block';
}
/* Hook up a click event listener to the Roll Dice Button. Log out a random number between 1 and 6. Hint: use Math.floor() and Math.random() */
rollBtnEl.addEventListener('click', function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);

  // 1. Update the scores for each player
  // 2. Display the scores in their scoreboards
  if (player1Turn) {
    player1DiceEl.textContent = randomNumber;
    player1Score += parseInt(randomNumber);
    player1ScoreEl.textContent = player1Score;
    player1DiceEl.classList.remove('active');
    player2DiceEl.classList.add('active');
    messageEl.textContent = 'Player 2 Turn';
  } else {
    player2DiceEl.textContent = randomNumber;
    player2Score += parseInt(randomNumber);
    player2ScoreEl.textContent = player2Score;
    player2DiceEl.classList.remove('active');
    player1DiceEl.classList.add('active');
    messageEl.textContent = 'Player 1 Turn';
  }
  // 1. Check if player has won. If so, change the message to "Player X has won!"
  // 2. hide the roll Dice Button and show the Reset Button. hint: use display none/block
  if (player1Score >= 20) {
    messageEl.textContent = 'Player 1 has won! 🥳';
    showDisplayButton();
  } else if (player2Score >= 20) {
    messageEl.textContent = 'Player 2 has won! 🎉';
    showDisplayButton();
  }
  // switch the turn back to the other player
  if (player1Turn) {
    player1Turn = false;
  } else {
    player1Turn = true;
  }
});
