'use strict';

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");


let scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
let playing = true;

diceEl.classList.add("hidden");


const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}
 

btnRoll.addEventListener(
    "click", () => {
        if (playing) {
            const dice = Math.ceil(Math.random() * 6);

            
            diceEl.classList.remove("hidden");
            diceEl.src = `/images/dice-${dice}.png`;

            if (dice != 1) {
                currentScore += dice;
                document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            }

            else {
                switchPlayer();
            }
        }
    }
)

btnHold.addEventListener(
    "click", () => {
        if (playing){
            scores[activePlayer] += currentScore;
            document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

            if (scores[activePlayer] >= 100) {
                playing = false;
                diceEl.classList.add("hidden");
                document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
                document.querySelector(`.payer--${activePlayer}`).classList.remove("player--active");
            }

            else {
                switchPlayer();
            }
        }
    }
)

btnNew.addEventListener(
    "click", () => {
        scores = [0, 0];
        currentScore = 0;
        activePlayer = 0;
        score0El.textContent = 0;
        score1El.textContent = 0;
        document.querySelector(".current-score").textContent = 0
        diceEl.classList.add("hidden");
    }
)