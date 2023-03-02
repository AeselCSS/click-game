"use strict";
window.addEventListener("load", showStartScreen);

let isGameRunning = false;

// ===== START GAME =====
function startGame() {
  isGameRunning = true;
  resetRank();
  resetScore();
  startScore();
  startTime();
  showGameElements();
  showUiElements();
  startGameElements();
  stopNonGameScreenSounds();
  playBackgroundMusic();
  console.log("game started - rank: " + rank + " score: " + score);
}

// ===== STOP GAME =====
function stopGame() {
  isGameRunning = false;
  clearDelayedUfoSpawnSound();
  stopGameElements();
  stopTime();
  hideGameElements();
  hideUiElements();
  stopGameSounds();
  console.log("game stopped - rank: " + rank + " score: " + score);
  evaluateWinLooseConditions();
}

// ===== SHOW/HIDE GAME ELEMENTS =====
function showGameElements() {
  document.querySelector("#game_elements").classList.remove("hidden");
}
function hideGameElements() {
  document.querySelector("#game_elements").classList.add("hidden");
}

// ===== SHOW/HIDE UI ELEMENTS =====
function showUiElements() {
  document.querySelector("#game_ui").classList.remove("hidden");
}
function hideUiElements() {
  document.querySelector("#game_ui").classList.add("hidden");
}

// ===== START/STOP GAME ELEMENT MOVEMENT & EVENTLISTENERS =====
function startGameElements() {
  startUfo();
  startEnemyJet();
  startEnemyJet2();
  startEnemyJet3();
  startEnemySpyBalloon();
  startCivilianAirplane();
  startCivilianBalloon();
}
function stopGameElements() {
  stopUfo();
  stopEnemyJet();
  stopEnemyJet2();
  stopEnemyJet3();
  stopEnemySpyBalloon();
  stopCivilianAirplane();
  stopCivilianBalloon();
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

