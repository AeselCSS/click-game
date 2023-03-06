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
  pulsePoints();
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

function pulsePoints() {
  const element = document.querySelector("#score_counter");
  element.classList.add("pulse");
  element.addEventListener("animationend", (event) => {
    const animation = event.animationName;
    clearAnimation(element, animation);
  });
}

function screenGlowRed() {
  const element = document.querySelector("#game_glow_frame");
  element.classList.add("glow_red");
  element.addEventListener("animationend", (event) => {
    const animation = event.animationName;
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
  // setTimeout(updateRank, 1400);
  updateRank();
  if (isGameRunning) {
    screenGlowRed();
  }
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
  document.querySelector("#time_bullet_sprite").classList.add("time_bullet");
  console.log("time started");
  delayedTimeAlarmSound();
  document.querySelector("#time_bullet_sprite").addEventListener("animationend", timeEnd);
}

function timeEnd() {
  console.log("time ran out");
  stopGame();
}
function stopTime() {
  clearDelayedTimeAlarmSound();
  document.querySelector("#time_bullet_sprite").classList.remove("time_bullet");
}

// ===== START SCREEN (MAIN MENU) =====
function showStartScreen() {
  const startScreen = document.querySelector("#start_screen");
  const startBtn = document.querySelector("#start_btn");
  startScreen.classList.remove("hidden");
  startScreen.classList.remove("fade_out");
  startScreen.classList.add("fade_in");
  playStartScreenSound();
  startBtn.addEventListener("mouseover", () => {
    btnPulseOn(startBtn);
    });
  startBtn.addEventListener("click", startButton);
  startBtn.addEventListener("mouseout", () => {
    btnPulseOff(startBtn);
  });
  hideGameElements();
  hideUiElements();
}

// ===== GAME OVER SCREEN =====
function showGameOverScreen() {
  const gameOverScreen = document.querySelector("#game_over");
  const goReplayBtn = document.querySelector("#go_replay_btn");
  const goMmBtn = document.querySelector("#go_mm_btn");
  gameOverScreen.classList.remove("hidden");
  gameOverScreen.classList.remove("fade_out");
  gameOverScreen.classList.add("fade_in");
  playGameOverScreenSound();
  goMmBtn.addEventListener("mouseover", () => {
    btnPulseOn(goMmBtn);
  });
  goReplayBtn.addEventListener("mouseover", () => {
    btnPulseOn(goReplayBtn);
  });
  goMmBtn.addEventListener("click", mainMenuButton);
  goReplayBtn.addEventListener("click", restartButton);
  goMmBtn.addEventListener("mouseout", () => {
    btnPulseOff(goMmBtn);
  });
  goReplayBtn.addEventListener("mouseout", () => {
    btnPulseOff(goReplayBtn);
  });
}

// ===== NEXT LEVEL SCREEN =====
function showLevelCompleteScreen() {
  const levelCompleteScreen = document.querySelector("#level_complete");
  const lcMmBtn = document.querySelector("#lc_mm_btn");
  const lcNlBtn = document.querySelector("#lc_nl_btn");
  levelCompleteScreen.classList.remove("hidden");
  levelCompleteScreen.classList.remove("fade_out");
  levelCompleteScreen.classList.add("fade_in");
  playLevelCompleteScreenSound();
  lcMmBtn.addEventListener("mouseover", () => {
    btnPulseOn(lcMmBtn);
  });
  lcNlBtn.addEventListener("mouseover", () => {
    btnPulseOn(lcNlBtn);
  });
  lcMmBtn.addEventListener("click", mainMenuButton);
  lcNlBtn.addEventListener("click", nextLevelButton);
  lcMmBtn.addEventListener("mouseout", () => {
    btnPulseOff(lcMmBtn);
  });
  lcNlBtn.addEventListener("mouseout", () => {
    btnPulseOff(lcNlBtn);
  });
}

// ===== START BUTTON =====
function startButton() {
  const startScreen = document.querySelector("#start_screen");
  startScreen.classList.add("fade_out");
  hideScreen(startScreen);
  startGame();
  document.querySelector("#start_btn").removeEventListener("click", startButton);
}

// ===== RESTART BUTTON =====
function restartButton() {
  const gameOverScreen = document.querySelector("#game_over");
  gameOverScreen.classList.add("fade_out");
  hideScreen(gameOverScreen);
  startGame();
  document.querySelector("#go_replay_btn").removeEventListener("click", restartButton);
}

// ===== NEXT LEVEL BUTTON =====
function nextLevelButton() {
  const levelCompleteScreen = document.querySelector("#level_complete");
  levelCompleteScreen.classList.add("fade_out");
  hideScreen(levelCompleteScreen);
  startGame();
  document.querySelector("#lc_nl_btn").removeEventListener("click", nextLevelButton);
}

// ===== MAIN MENU BUTTON =====
function mainMenuButton() {
  const gameOverScreen = document.querySelector("#game_over");
  const levelCompleteScreen = document.querySelector("#level_complete");
  gameOverScreen.classList.add("fade_out");
  hideScreen(gameOverScreen);
  levelCompleteScreen.classList.add("fade_out");
  hideScreen(levelCompleteScreen);
  document.querySelector("#start_screen").classList.remove("hidden");
  document.querySelector("#go_mm_btn").removeEventListener("click", mainMenuButton);
  document.querySelector("#lc_mm_btn").removeEventListener("click", mainMenuButton);
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

function btnPulseOn (btnId) {
  btnId.classList.add("pulse_btn");
}

function btnPulseOff (btnId) {
  btnId.classList.remove("pulse_btn");
}
