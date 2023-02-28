"use strict";

// window.addEventListener("load", showStartScreen);
window.addEventListener("load", start);

function start () {
    console.log("game started");
    initGameElements();
}


// // START GAME
// function startGame() {
//   resetRank();
//   resetScore();
//   startScore();
//   startTime();
//   startMovement();
//   startEvents();
//   showGameElements();
//   showUiElements();
//   console.log("game started - rank: " + rank + " score: " + score);
// }

// // STOP GAME
// function stopGame() {
//   stopEvents();
//   stopMovement();
//   stopTimer();
//   hideGameElements();
//   hideUiElements();
//   console.log("game stopped - rank: " + rank + " score: " + score);
// }


// // EVALUATE WIN/LOOSE CONDITIONS
// function evaluateWinLooseConditions() {
//     if (score >= 100 && rank >= 1) {
//         showNextLevelScreen();
//         nextLevelMessage();
//     } else if (score < 100 && rank >= 1) {
//         showGameOverScreen();
//         gameOverMessageScoreTooLow();
//     } else {
//         showGameOverScreen();
//         gameOverMessageRankDecrease();
//     }
// }

