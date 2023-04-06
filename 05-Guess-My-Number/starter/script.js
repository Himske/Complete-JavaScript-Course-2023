'use strict';

const generateSecretNumber = () => Math.trunc(Math.random() * 20) + 1;

let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess < 1 || guess > 20) {
    displayMessage('Number should be between 1 and 20');
  } else {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess < secretNumber ? '📉 Too Low!' : '📈 Too High!');
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateSecretNumber();

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
