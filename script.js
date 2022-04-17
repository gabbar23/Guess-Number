'use strict';
let secretNumber = Math.trunc((Math.random() * 20) +1 );
let score = 20;
let highscore = 0;
console.log(secretNumber);

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number((document.querySelector('.guess').value));
        if (!guess) {
            displayMessage("0 Value Entered");


        } else if (guess === secretNumber) {
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
            displayMessage("You Won ");
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = "#60b347"

        } else if (guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage("You Lost");
            }
        }


    });

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 21);
    document.querySelector('.guess').value = null;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = "#222222"
    displayMessage("Start guessing...");
    document.querySelector('.number').textContent = "?";



})