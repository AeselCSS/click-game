"use strict";

// ===== SCOREBOARD =====
// ===== SCORE =====
const targetScore = 100;
let score = 0;

function startScore() {
  document.querySelector("#score_counter").textContent = `${score}/${targetScore}`;
}

function updateScore(points) {
  score += points;
  scoreboardGlow();
  if (score < targetScore) {
    document.querySelector("#score_counter").textContent = `${score}/${targetScore}`;
  } else {
    console.log("stop game - score reached");
    stopGame();
  }
}

function resetScore() {
  score = 0;
}

function scoreboardGlow() {
  let element = document.querySelector("#ctr_scoreboard");
  element.classList.add("glow");
  element.addEventListener("animationend", (event) => {
    let animation = event.animationName;
    clearAnimation(element, animation);
  });
}

function scoreboardGlowRed() {
  let element = document.querySelector("#ctr_scoreboard");
  element.classList.add("glow_red");
  element.addEventListener("animationend", (event) => {
    let animation = event.animationName;
    clearAnimation(element, animation);
  });
}

function clearAnimation(element, animation) {
  console.log("animation: " + animation + " cleared!");
  element.classList.remove(animation);
}

// ===== RANK =====
let rank = 3;

function decreaseRank(decreaseValue) {
  rank -= decreaseValue;
  console.log("rank decreased - current rank: " + rank);
  scoreboardGlowRed();
  setTimeout(updateRank, 1400);
  // updateRank();
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
  } else if (rank === 2) {
    // display metal star
    rankGold.classList.add("hidden");
    rankMetal.classList.remove("hidden");
  } else if (rank === 1) {
    // display wooden star
    rankGold.classList.add("hidden");
    rankMetal.classList.add("hidden");
    rankWood.classList.remove("hidden");
  } else if (rank <= 0) {
    // game over
    console.log("game over - rank depleted");
    stopGame();
  }
}

function resetRank() {
  rank = 3;
  updateRank();
}

// // ===== TIMER =====
function startTime() {
  document.querySelector("#timer_countdown").classList.add("countdown");
  console.log("time started");
  delayedTimeAlarmSound();
  document.querySelector("#timer_countdown").addEventListener("animationend", timeEnd);
}

function timeEnd() {
  console.log("time ran out");
  stopGame();
}
function stopTime() {
  clearDelayedTimeAlarmSound();
  document.querySelector("#timer_countdown").classList.remove("countdown");
}

// ===== START SCREEN (MAIN MENU) =====
function showStartScreen() {
  document.querySelector("#start_screen").classList.remove("hidden");
  document.querySelector("#start_screen").classList.remove("fade_out");
  document.querySelector("#start_screen").classList.add("fade_in");
  playStartScreenSound();
  document.querySelector("#start_screen").addEventListener("click", startButton);
  hideGameElements();
  hideUiElements();
}

// ===== GAME OVER SCREEN =====
function showGameOverScreen() {
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#game_over").classList.remove("fade_out");
  document.querySelector("#game_over").classList.add("fade_in");
  playGameOverScreenSound();
  document.querySelector("#go_mm_btn").addEventListener("click", mainMenuButton);
  document.querySelector("#go_replay_btn").addEventListener("click", restartButton);
}

// ===== NEXT LEVEL SCREEN =====
function showLevelCompleteScreen() {
  document.querySelector("#level_complete").classList.remove("hidden");
  document.querySelector("#level_complete").classList.remove("fade_out");
  document.querySelector("#level_complete").classList.add("fade_in");
  playLevelCompleteScreenSound();
  document.querySelector("#lc_mm_btn").addEventListener("click", mainMenuButton);
  document.querySelector("#lc_nl_btn").addEventListener("click", nextLevelButton);
}

// ===== START BUTTON =====
function startButton() {
  let startScreen = document.querySelector("#start_screen");
  startScreen.classList.add("fade_out");
  hideScreen(startScreen);
  startGame();
}

// ===== RESTART BUTTON =====
function restartButton() {
  let gameOverScreen = document.querySelector("#game_over");
  gameOverScreen.classList.add("fade_out");
  hideScreen(gameOverScreen);
  startGame();
}

// ===== NEXT LEVEL BUTTON =====
function nextLevelButton() {
  let levelCompleteScreen = document.querySelector("#level_complete");
  levelCompleteScreen.classList.add("fade_out");
  hideScreen(levelCompleteScreen);
  startGame();
}

// ===== MAIN MENU BUTTON =====
function mainMenuButton() {
  let gameOverScreen = document.querySelector("#game_over");
  let levelCompleteScreen = document.querySelector("#level_complete");
  gameOverScreen.classList.add("fade_out");
  hideScreen(gameOverScreen);
  levelCompleteScreen.classList.add("fade_out");
  hideScreen(levelCompleteScreen);
  document.querySelector("#start_screen").classList.remove("hidden");
  showStartScreen();
}

// ===== GAME ENDED MESSAGES =====
function gameEndMessage(result) {
  const levelcomplete = document.querySelector("#level_complete");
  const gameOver = document.querySelector("#game_over");
  const messageWin =
    "Congratulations Soldier! You have reached the mission target. You have been promoted and can progress to the next mission.";
  const messageLooseDemotion = "Bad luck Soldier! You have been demoted too many times. Mission is unsuccesful.";
  const messageLooseScore = "Bad luck Soldier! Your score is too low. Mission is unsuccesful.";

  if (result === "win") {
    levelcomplete.querySelector(".ui_message").textContent = messageWin;
  } else if (result === "looseDemotion") {
    gameOver.querySelector(".ui_message").textContent = messageLooseDemotion;
  } else if (result === "looseScore") {
    gameOver.querySelector(".ui_message").textContent = messageLooseScore;
  } else {
    console.log("error:" + result);
  }
}

function hideScreen(screen) {
  screen.addEventListener("animationend", (event) => {
    if (event.animationName === "fade_out") {
      screen.classList.add("hidden");
      screen.classList.remove("fade_out");
      screen.classList.remove("fade_in");
    }
  });
}
