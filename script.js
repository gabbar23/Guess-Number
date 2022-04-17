'use strict';
let secretNumber = Math.trunc(Math.random() * 21);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number((document.querySelector('.guess').value));
        if (!guess) {
            document.querySelector('.message').textContent = "0 Value Entered";

            //win
        } else if (guess === secretNumber) {
            if (score > highscore) {
                document.querySelector('.highscore').textContent = score;
            }
            document.querySelector('.message').textContent = "You Won ";
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = "#60b347"



        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = "Too High";
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = "You Lost";
            }
        } else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = "Too Low";
                score--;
                document.querySelector('.score').textContent = score;

            } else {
                score--;
                document.querySelector('.message').textContent = "You Lost";
            }
        }
    });

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 21);
    document.querySelector('.guess').value = null;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = "#222222"
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.number').textContent = "?";



})