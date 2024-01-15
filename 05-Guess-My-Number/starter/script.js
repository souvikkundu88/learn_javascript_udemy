'use strict';
//console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').textContent = '🍕 Correct Number!');
// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.guess').value = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
//console.log(number);
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = '⛔ No number!'
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🍕 Correct number';
    } else if (guess > secretNumber) {
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = 'higher';
        } else {
            document.querySelector('.message').textContent = 'you lost!';
        }
    }
    else if (guess < secretNumber) {
        if(score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = 'lower';
        } else {
            document.querySelector('.message').textContent = 'you lost!';
        }
    }
});

