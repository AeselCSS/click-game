"use strict";
// global variables
const timeCountdown = document.querySelector("#container_timer_bar_countdown");

let score = 0;
const targetScore = 100;
let rank = 3;

// initiate scoreboard
function scoreInit () {
    // initiate scoreboard
    document.querySelector("#score_counter").innerHTML = `${score}/${targetScore}`;
}

// update scoreboard
function updateScore (points) {
    score += points;
    console.log(score);
    document.querySelector("#score_counter").innerHTML = `${score}/${targetScore}`;
}

// update rank
function decreaseRank (decreaseValue) {
    rank -= decreaseValue;
    console.log("rank decreased");
    console.log(rank);
    updateRank();
}

function updateRank () {
    const rankGold = document.querySelector("#sprite_rank_gold");
    const rankMetal = document.querySelector("#sprite_rank_metal");
    const rankWood = document.querySelector("#sprite_rank_wood");

    if (rank === 3) {
        // display gold star
        console.log("rank 3");
    } else if (rank === 2) {
        // display metal star
        rankGold.classList.add("hidden");
        rankMetal.classList.remove("hidden");
        console.log("rank 2");
    } else if (rank === 1) {
        // display wooden star
        rankGold.classList.add("hidden");
        rankMetal.classList.add("hidden");
        rankWood.classList.remove("hidden");
        console.log("rank 1");
    } else if (rank <= 0) {
        // game over
        console.log("game over");
    }
}

// initiate timer
function timeInit () {
  // initiate timer
    timeCountdown.classList.add("timer_bar_countdown");
    console.log("timer started");
    timeCountdown.addEventListener("animationend", timeEnd);
}
// time is up
function timeEnd () {
console.log("time ran out");
stopGame();
evaluateWinLooseConditions();
}