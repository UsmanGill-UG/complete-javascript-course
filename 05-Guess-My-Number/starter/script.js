'use strict';


const randomNumber = Math.trunc(Math.random() * 20) + 1;

const checkButton = document.querySelector('.check');
checkButton.addEventListener('click', () => {
    const guessedNumber = Number(document.querySelector('.guess').value)

    if (!guessedNumber) {
        document.querySelector('.message').textContent = 'No number!'
    }

    if (guessedNumber === randomNumber) {
        document.querySelector('.message').textContent = 'Correct Number!'
    } else if (guessedNumber > randomNumber) {
        document.querySelector('.message').textContent = 'Too high!'
    } else if (guessedNumber < randomNumber) {
        document.querySelector('.message').textContent = 'Too low!'
    }
})