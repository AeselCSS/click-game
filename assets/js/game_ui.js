"use strict";

// ===== SHOW/HIDE UI ELEMENTS =====
function showUiElements() {
  document.querySelector("#game_ui").classList.remove("hidden");
}

function hideUiElements() {
  document.querySelector("#game_ui").classList.add("hidden");
}

// ===== SCOREBOARD =====
// ===== SCORE =====
const targetScore = 100;
let score = 0;

function startScore() {
  document.querySelector(
    "#score_counter"
  ).textContent = `${score}/${targetScore}`;
}

function updateScore(points) {
  score += points;
  scoreboardGlow();
  if (score < targetScore) {
    console.log(score);
    document.querySelector(
      "#score_counter"
    ).textContent = `${score}/${targetScore}`;
  } else {
    console.log("stop game - score reached");
    stopGame();
    evaluateWinLooseConditions();
  }
}

function resetScore() {
  score = 0;
}

function scoreboardGlow() {
  document.querySelector("#ctr_scoreboard").classList.add("glow");
  setTimeout(() => {
    document.querySelector("#ctr_scoreboard").classList.remove("glow");
  }, 1000);
}

function scoreboardGlowRed() {
  document.querySelector("#ctr_scoreboard").classList.add("glow_red");
  setTimeout(() => {
    document.querySelector("#ctr_scoreboard").classList.remove("glow_red");
  }, 1000);
}

// ===== RANK =====
let rank = 3;

function decreaseRank(decreaseValue) {
  rank -= decreaseValue;
  console.log("rank decreased");
  console.log(rank);
  scoreboardGlowRed();
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
    console.log("game over - rank depleted");
    stopGame();
    evaluateWinLooseConditions();
  }
}

function resetRank() {
  rank = 3;
  updateRank();
}

// // ===== TIMER =====
// function startTime() {
//   timeCountdown.classList.add("timer_bar_countdown");
//   console.log("time started");
//   timeCountdown.addEventListener("animationend", timeEnd);
// }

// // might be redundant since it will be hidden when hideUiElements function are called
// function stopTime() {
//   timeCountdown.classList.remove("timer_bar_countdown");
// }

// function timeEnd() {
//   console.log("time ran out");
//   stopGame();
//   evaluateWinLooseConditions();
// }

// ===== START SCREEN (MAIN MENU) =====
function showStartScreen() {
  document.querySelector("#start_screen").classList.remove("hidden");
  playStartScreenSound();
  document
    .querySelector("#start_screen")
    .addEventListener("click", startButton);
  hideGameElements();
  hideUiElements();
}

// ===== GAME OVER SCREEN =====
function showGameOverScreen() {
  stopGame();
  document.querySelector("#game_over").classList.remove("hidden");
  playGameOverScreenSound();
  document.querySelector("#go_mm_btn").addEventListener("click", mainMenuButton);
  document
  .querySelector("#go_replay_btn")
  .addEventListener("click", restartButton);
}

// ===== NEXT LEVEL SCREEN =====
function showLevelCompleteScreen() {
  stopGame();
  document.querySelector("#level_complete").classList.remove("hidden");
  playLevelCompleteScreenSound();
  document.querySelector("#lc_mm_btn").addEventListener("click", mainMenuButton);
  document
    .querySelector("#lc_mm_btn")
    .addEventListener("click", nextLevelButton);
}

// ===== START BUTTON =====
function startButton() {
  document.querySelector("#start_screen").classList.add("hidden");
  startGame();
}

// ===== RESTART BUTTON =====
function restartButton() {
  document.querySelector("#game_over").classList.add("hidden");
  startGame();
}

// ===== NEXT LEVEL BUTTON =====
function nextLevelButton() {
  document.querySelector("#level_complete").classList.add("hidden");
  startGame();
}

// ===== MAIN MENU BUTTON =====
function mainMenuButton() {
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
  document.querySelector("#start_screen").classList.remove("hidden");
  showStartScreen();
}

// ===== GAME ENDED MESSAGES =====
function gameEndMessage(result) {
  const levelcomplete = document.querySelector("#level_complete");
  const gameOver = document.querySelector("#game_over");
  const messageWin =
    "Congratulations Soldier! You have reached the mission target. You have been promoted and can progress to the next mission.";
  const messageLooseDemotion =
    "Bad luck Soldier! You have been demoted too many times. Mission is unsuccesful.";
  const messageLooseScore =
    "Bad luck Soldier! Your score is too low. Mission is unsuccesful.";

  if ((result === "win")) {
    levelcomplete.querySelector(".ui_message").textContent = messageWin;
  } else if ((result === "looseDemotion")) {
    gameOver.querySelector(".ui_message").textContent = messageLooseDemotion;
  } else if ((result === "looseScore")) {
    gameOver.querySelector(".ui_message").textContent = messageLooseScore;
  } else {
    console.log("error:" + result);
  }
}
