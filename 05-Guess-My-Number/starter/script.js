'use strict';
//console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').textContent = '🍕 Correct Number!');
// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//console.log(number);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) { // when guess has 0 or no number input
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) { // when guess number matches with random number
    document.querySelector('.message').textContent = '🍕 Correct number';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if(score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
        if (score > 1) {
          document.querySelector('.message').textContent =
              guess > secretNumber ? 'Higher' : 'Lower';
          score--;
          document.querySelector('.score').textContent = score;
        } else {
          document.querySelector('.score').textContent = 0;
          document.querySelector('.message').textContent = 'You lost!'
        }
  }
    // else if (guess > secretNumber) { // when guess is high
    //       if (score > 1) {
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //       document.querySelector('.message').textContent = 'higher';
    //       } else {
    //       document.querySelector('.message').textContent = 'you lost!';
    //       document.querySelector('.score').textContent = 0;
    //       }
    // } else if (guess < secretNumber) { // when guess is low
    //       if (score > 1) {
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //       document.querySelector('.message').textContent = 'lower';
    //       } else {
    //       document.querySelector('.message').textContent = 'you lost!';
    //       document.querySelector('.score').textContent = 0;
    //       }
    // }
});

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '15rem';
});

