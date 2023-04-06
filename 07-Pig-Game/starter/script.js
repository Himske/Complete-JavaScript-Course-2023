'use strict';

// Selecting elements
const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollDiceEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

// Declare global variables
let playing, currentScore, activePlayer;
let winningScore = 100;

const init = () => {
  playing = true;
  currentScore = 0;
  diceEl.classList.add('hidden');

  const players = document.querySelectorAll('.player');
  for (const player of players) {
    player.classList.remove('player--winner', 'player--active');
    player.querySelector('.score').textContent = 0;
    player.querySelector('.current-score').textContent = 0;
  }
  activePlayer = document.querySelector('.player--0');
  activePlayer.classList.add('player--active');
};

const switchPlayer = () => {
  currentScore = 0;
  activePlayer.querySelector('.current-score').textContent = currentScore;
  const players = document.querySelectorAll('.player');
  for (const player of players) {
    player.classList.toggle('player--active');
    if (player.classList.contains('player--active')) {
      activePlayer = player;
    }
  }
};

const rollDice = () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      activePlayer.querySelector('.current-score').textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
};

const hold = () => {
  if (playing) {
    const total = Number(activePlayer.querySelector('.score').textContent) + currentScore;
    activePlayer.querySelector('.score').textContent = total;

    // Check for winner
    if (total >= winningScore) {
      playing = false;
      activePlayer.classList.add('player--winner');
      activePlayer.classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
};

// Set up the game
init();
btnRollDiceEl.addEventListener('click', rollDice);
btnHoldEl.addEventListener('click', hold);
btnNewEl.addEventListener('click', init);
