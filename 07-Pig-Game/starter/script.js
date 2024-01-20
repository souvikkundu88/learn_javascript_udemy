'use strict';

// selecting elements
const player0EL = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');
// const score = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

let score, currentScore, activePlayer, playing;

const init = function() {
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    diceEl.classList.add('hidden');
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    player0EL.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0EL.classList.add('player--active');
    player1El.classList.remove('player--active');
    activePlayer = 0;
    playing = true;
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// reset game, new game
btnNew.addEventListener('click', init);


// rolling dice functionality
('click', function() {
  if(playing) {
    // 1. generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    

    // 2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. check for a rolled 1: if true , switch to next player
    if (dice !== 1) {
      // add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function() {
    if(playing) {
        // add current score to active player's score
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
      
        // check if player's score is >= 100
        if (score[activePlayer] >= 100) {
          // finish the game
          playing = false;
          diceEl.classList.add('hidden');
          document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
          document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
          // switch to the next player
          switchPlayer();
        }
    }
});
