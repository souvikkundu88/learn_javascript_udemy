'use strict';
//console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').textContent = '🍕 Correct Number!');
// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.guess').value = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
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
  } else if (guess > secretNumber) { // when guess is high
        if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'higher';
        } else {
        document.querySelector('.message').textContent = 'you lost!';
        document.querySelector('.score').textContent = 0;
        }
   } else if (guess < secretNumber) { // when guess is low
        if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'lower';
        } else {
        document.querySelector('.message').textContent = 'you lost!';
        document.querySelector('.score').textContent = 0;
        }
   }
});
