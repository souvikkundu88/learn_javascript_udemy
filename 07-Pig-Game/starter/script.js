'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = documnet.querySelector('.btn--new');
const btnRoll = documnet.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// rolling dice functionality
btnRoll.addEventListener('click', function() {
    // 1. generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. display dice


    // 3. check for a rolled 1: if true , switch to next player

})