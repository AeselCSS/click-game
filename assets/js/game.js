"use strict";

window.addEventListener("load", startScreen);

// START SCREEN
function startScreen() {
  document.querySelector("#start_screen").classList.remove("hidden");
}

// START BUTTON
function startButton() {
  document.querySelector("#start_screen").classList.add("hidden");
  startGame();
}

// START GAME
function startGame() {
  scoreInit();
  timeInit();
  startMovement();
  startEvents();
}

//initiate all moving elements
function startMovement() {
  containerUfo.classList.add("ufo_move");
  containerFighterJet.classList.add("fighter_jet_move");
  containerFighterJet2.classList.add("fighter_jet_move_2");
  containerFighterJet3.classList.add("fighter_jet_move_3");
  containerWeatherBalloon.classList.add("weather_balloon_move");
  containerAirplane.classList.add("airplane_move");
  containerHotAirBalloon.classList.add("hot_air_balloon_move");
}

// add eventlisterners to all moving elements
function startEvents() {
  containerUfo.addEventListener("mousedown", ufoClick);
  containerUfo.addEventListener("animationend", ufoLanding);
  containerFighterJet.addEventListener("mousedown", fighterJetClick);
  containerFighterJet2.addEventListener("mousedown", fighterJet2Click);
  containerFighterJet3.addEventListener("mousedown", fighterJet3Click);
  containerWeatherBalloon.addEventListener("mousedown", weatherBalloonClick);
  containerAirplane.addEventListener("mousedown", airplaneClick);
  containerHotAirBalloon.addEventListener("mousedown", hotAirBalloonClick);
}
