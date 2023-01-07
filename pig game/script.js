'use strict';
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
score0.textContent = 0;
score1.textContent = 0;

const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');

const score = [0, 0];
let activePlayer = 0;
let currentScore = 0;
const curent0 = document.getElementById('current--0');
const curent1 = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//Rolling dice functionality

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    curent0.textContent = currentScore;
  }
});
