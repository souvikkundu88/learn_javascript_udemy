'use strict';
//console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').textContent = '🍕 Correct Number!');
// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.guess').value = 23;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = '⛔ No number!'
    }
});

