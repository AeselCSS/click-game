"use strict";
// ===== GLOBAL VARIABLES =====
const timeCountdown = document.querySelector("#container_timer_bar_countdown");
const timeBarContainer = document.querySelector("#container_timer_bar");
const showScoreboard = document.querySelector("#show_scoreboard");
const scoreCounter = document.querySelector("#score_counter");

const startScreen = document.querySelector("#start_screen");
const startScreenBtn = document.querySelector("#start_button");

const gameOverScreen = document.querySelector("#game_over");
const gameOverScreenReplayBtn = document.querySelector("#game_over_button_play_again");
const gameOverScreenMainMenuBtn = document.querySelector("#game_over_button_main_menu");

const levelCompleteScreen = document.querySelector("#level_complete");
const levelCompleteScreenNextLvlBtn = document.querySelector("#level_complete_button_next_level");
const levelCompleteScreenMainMenuBtn = document.querySelector("#level_complete_button_main_menu");

const startScreenMessageText = document.querySelector("#start_screen_message");
const nextLevelMessageText = document.querySelector("#level_complete_message");
const gameOverMessageText = document.querySelector("#game_over_message");

const targetScore = 100;
let score;
let rank;

// ===== SHOW/HIDE UI ELEMENTS =====
function showUiElements() {
  timeBarContainer.classList.remove("hidden");
  showScoreboard.classList.remove("hidden");
}

function hideUiElements() {
  timeBarContainer.classList.add("hidden");
  showScoreboard.classList.add("hidden");
}

// ===== SCOREBOARD =====
function startScore() {
  scoreCounter.textContent = `${score}/${targetScore}`;
}

function updateScore(points) {
    score += points;
  if (score < targetScore) {
      console.log(score);
      scoreCounter.textContent = `${score}/${targetScore}`;
  } else {
    stopGame();
    evaluateWinLooseConditions();
  }
}

function resetScore() {
    score = 0;
}

// ===== RANK =====

function decreaseRank(decreaseValue) {
  rank -= decreaseValue;
  console.log("rank decreased");
  console.log(rank);
  updateRank();
}

function updateRank() {
  const rankGold = document.querySelector("#sprite_rank_gold");
  const rankMetal = document.querySelector("#sprite_rank_metal");
  const rankWood = document.querySelector("#sprite_rank_wood");

  if (rank === 3) {
    // display gold star
    rankGold.classList.remove("hidden");
    rankMetal.classList.add("hidden");
    rankWood.classList.add("hidden");
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
    stopGame();
    evaluateWinLooseConditions();
  }
}

function resetRank () {
  rank = 3;
  updateRank();
}

// ===== TIMER =====
function startTime() {
  timeCountdown.classList.add("timer_bar_countdown");
  console.log("time started");
  timeCountdown.addEventListener("animationend", timeEnd);
}

// might be redundant since it will be hidden when hideUiElements function are called
function stopTimer() {
  timeCountdown.classList.remove("timer_bar_countdown");
}

function timeEnd() {
  console.log("time ran out");
  stopGame();
  evaluateWinLooseConditions();
}

// ===== START SCREEN (MAIN MENU) =====
function showStartScreen() {
  startScreen.classList.remove("hidden");
  startScreenBtn.addEventListener("click", startButton);
  hideGameElements();
  hideUiElements();
//   startGameMessage();
}

// ===== GAME OVER SCREEN =====
function showGameOverScreen() {
  stopGame();
  gameOverScreen.classList.remove("hidden");
  gameOverScreenMainMenuBtn.addEventListener("click", mainMenuButton);
  gameOverScreenReplayBtn.addEventListener("click", restartButton);
}

// ===== NEXT LEVEL SCREEN =====
function showNextLevelScreen() {
  stopGame();
  levelCompleteScreen.classList.remove("hidden");
  levelCompleteScreenMainMenuBtn.addEventListener("click", mainMenuButton);
  levelCompleteScreenNextLvlBtn.addEventListener("click", nextLevelButton); 
}

// ===== START BUTTON =====
function startButton() {
  startScreen.classList.add("hidden");
  startGame();
}

// ===== RESTART BUTTON =====
function restartButton() {
    gameOverScreen.classList.add("hidden");
    startGame();
}

// ===== NEXT LEVEL BUTTON =====
function nextLevelButton() {
    levelCompleteScreen.classList.add("hidden");
    startGame();
}

// ===== MAIN MENU BUTTON =====
function mainMenuButton() {
    gameOverScreen.classList.add("hidden");
    levelCompleteScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    showStartScreen();
    // startGameMessage();
}

// // ===== START GAME MESSAGE =====
// function startGameMessage() {
//   startScreenMessageText.textContent =
//     `Welcome Soldier!
//     Your mission is to destroy the enemies invading our airspace.
//     Shoot the enemy fighter jets and weather balloons spying on us.
//     DO NOT let the aliens land. 
//     DO NOT shoot the civilian aircrafts and hot air balloons.

//     You have 60 seconds to complete your mission. 
//     Good luck!`;
// }

// ===== NEXT LEVEL MESSAGE =====
function nextLevelMessage() {
  nextLevelMessageText.textContent =
    "Congratulations Soldier! You have reached the mission target. You have been promoted and can progress to the next mission.";
}

// ===== GAME OVER MESSAGES =====
function gameOverMessageRankDecrease() {
  gameOverMessageText.textContent =
    "Bad luck Soldier! You have been demoted too many times. Mission is unsuccesful.";
}

function gameOverMessageScoreTooLow() {
  gameOverMessageText.textContent =
    "Bad luck Soldier! Your score is too low. Mission is unsuccesful.";
}
