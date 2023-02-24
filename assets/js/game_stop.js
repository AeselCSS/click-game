"use strict";

// global variables
// move to ui
const timeBarContainer = document.querySelector("#container_timer_bar");
const timerCountdown = document.querySelector("#container_timer_bar_countdown");
const showScoreboard = document.querySelector("#show_scoreboard");

const gameOverScreen = document.querySelector("#game_over");
const levelCompleteScreen = document.querySelector("#level_complete");

const nextLevelMessageText = document.querySelector("#level_complete_message");
const gameOverMessageText = document.querySelector("#game_over_message");

// STOP GAME
// move to game
function stopGame() {
  stopClickEvents();
  stopMovement();
  stopTimer();
  hideGameElements();
  hideUiElements();
}
// move to ui and rename
// stop click events
function stopClickEvents() {
  containerUfo.removeEventListener("mousedown", ufoClick);
  containerFighterJet.removeEventListener("mousedown", fighterJetClick);
  containerFighterJet2.removeEventListener("mousedown", fighterJet2Click);
  containerFighterJet3.removeEventListener("mousedown", fighterJet3Click);
  containerWeatherBalloon.removeEventListener("mousedown", weatherBalloonClick);
  containerAirplane.removeEventListener("mousedown", airplaneClick);
  containerHotAirBalloon.removeEventListener("mousedown", hotAirBalloonClick);
}

// move to ui
// stop all moving elements
function stopMovement() {
  containerUfo.classList.remove("ufo_move");
  containerFighterJet.classList.remove("fighter_jet_move");
  containerFighterJet2.classList.remove("fighter_jet_move_2");
  containerFighterJet3.classList.remove("fighter_jet_move_3");
  containerWeatherBalloon.classList.remove("weather_balloon_move");
  containerAirplane.classList.remove("airplane_move");
  containerHotAirBalloon.classList.remove("hot_air_balloon_move");
}

// move to ui
// stop timer
// might be redundant since it will be hidden when hideUiElements function are called
function stopTimer() { 
  timerCountdown.classList.remove("timer_bar_countdown"); 
}
// move to ui
// hide game elements
function hideGameElements() {
  containerUfo.classList.add("hidden");
  containerFighterJet.classList.add("hidden");
  containerFighterJet2.classList.add("hidden");
  containerFighterJet3.classList.add("hidden");
  containerWeatherBalloon.classList.add("hidden");
  containerAirplane.classList.add("hidden");
  containerHotAirBalloon.classList.add("hidden");
  containerAaGun.classList.add("hidden");
}

// hide ui elements
// move to ui
function hideUiElements() {
  timeBarContainer.classList.add("hidden");
  showScoreboard.classList.add("hidden");
}

// show game over screen
// move to game
function showGameOverScreen() {
    stopGame();
    gameOverScreen.classList.remove("hidden");
}

// show next level screen
function showNextLevelScreen() {
    stopGame();
    levelCompleteScreen.classList.remove("hidden");
}

// evaluate win condition
// move to game
function evaluateWinLooseConditions() {
    if (score >= 100 && rank >= 1) {
        showNextLevelScreen();
        nextLevelMessage();
    } else if (score < 100 && rank >= 1) {
        showGameOverScreen();
        gameOverMessageScoreTooLow();
    } else {
        showGameOverScreen();
        gameOverMessageRankDecrease();
    }
}
// move below to ui
// next level message
function nextLevelMessage() {
    nextLevelMessageText.textContent =
      "Congratulations Soldier! You have reached the mission target. You have been promoted and can progress to the next mission.";
}

// game over message rank decreased too much
function gameOverMessageRankDecrease() {
    gameOverMessageText.textContent = "Bad luck Soldier! You have been demoted too many times. Mission is unsuccesful.";
}

// game over message score too low
function gameOverMessageScoreTooLow() {
    gameOverMessageText.textContent = "Bad luck Soldier! Your score is too low. Mission is unsuccesful.";
}

// add onClick events for buttons
function addOnClickEvents() {
  document.querySelector("#start_button").addEventListener("click", startButton);
  document
    .querySelector("#game_over_button_play_again")
    .addEventListener("click", restartButton);
  document.querySelector("#next_level_button").addEventListener("click", nextLevelButton);
}