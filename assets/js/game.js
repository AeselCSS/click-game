"use strict";

window.addEventListener("load", showStartScreen);

// ===== START GAME =====
function startGame() {
  resetRank();
  resetScore();
  startScore();
//   startTime();
  startGameElements();
  showGameElements();
  showUiElements();
  console.log("game started - rank: " + rank + " score: " + score);
}

// ===== STOP GAME =====
function stopGame() {
  stopGameElements();
//   stopTime();
  hideGameElements();
  hideUiElements();
  console.log("game stopped - rank: " + rank + " score: " + score);
}


// ===== EVALUATE WIN/LOOSE CONDITIONS =====
function evaluateWinLooseConditions() {
    if (score >= 100 && rank >= 1) {
        gameEndMessage("win");
        showLevelCompleteScreen();
    } else if (score < 100 && rank >= 1) {
        gameEndMessage("looseScore");
        showGameOverScreen();
    } else {
        gameEndMessage("looseDemotion");
        showGameOverScreen();
    }
}

