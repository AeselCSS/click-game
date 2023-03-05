"use strict";
// ===== ELEMENT SPECIFIC GAME ELEMENTS =====
// ===== UFO =====
function startUfo() {
  const ufo = document.querySelector("#ctr_ufo");
  // assign start position, delay, duration and animation direction
  ufo.classList.add("position_top1", "delay4", "duration4", "top_to_bottom1");
  // add spawn "warning" sound when element enters screen
  delayedUfoSpawnSound();
  // assign event listeners
  ufo.addEventListener("mousedown", ufoClicked);
  ufo.addEventListener("animationend", (event) => {
    if (event.animationName !== "explosion" && event.animationName !== "disappear") {
      ufoLanded();
    } else if (event.animationName === "disappear") {
      clearDelayedUfoSpawnSound();
      elementReset(ufo);
    }
  });
}

function stopUfo() {
  const ufo = document.querySelector("#ctr_ufo");
  clearDelayedUfoSpawnSound();
  elementStop(ufo);
}

function ufoLanded() {
  console.log("UFO HAS LANDED! - GAME OVER");
  decreaseRank(3);
}

function ufoClicked() {
  console.log("UFO CLICKED");
  howitzerFire();
  playClickElementSound("enemy");
  this.removeEventListener("mousedown", ufoClicked);
  elementPaused.call(this);
}

// ===== ENEMY JET =====
function startEnemyJet() {
  const enemyJet = document.querySelector("#ctr_jet");
  // assign start position, delay, duration and animation direction
  enemyJet.classList.add("position1", "delay1", "duration3", "left_to_right1");
  // assign event listeners
  enemyJet.addEventListener("mousedown", enemyJetClicked);
  enemyJet.addEventListener("animationend", (event) => {
    if (event.animationName !== "explosion" && event.animationName !== "disappear") {
      elementNotClicked(enemyJet);
    } else if (event.animationName === "disappear") {
      elementReset(enemyJet);
    }
  });
}

function enemyJetClicked() {
  console.log("ENEMY JET CLICKED");
  howitzerFire();
  playClickElementSound("enemy");
  this.removeEventListener("mousedown", enemyJetClicked);
  updateScore(3);
  elementPaused.call(this);
}

function stopEnemyJet() {
  const enemyJet = document.querySelector("#ctr_jet");
  elementStop(enemyJet);
}

// ===== ENEMY JET 2 =====
function startEnemyJet2() {
  const enemyJet2 = document.querySelector("#ctr_jet2");
  // assign start position, delay, duration and animation direction
  enemyJet2.classList.add("position2", "delay2", "duration2", "right_to_left1");
  // assign event listeners
  enemyJet2.addEventListener("mousedown", enemyJet2Clicked);
  enemyJet2.addEventListener("animationend", (event) => {
    if (event.animationName !== "explosion" && event.animationName !== "disappear") {
      elementNotClicked(enemyJet2);
    } else if (event.animationName === "disappear") {
      elementReset(enemyJet2);
    }
  });
}

function enemyJet2Clicked() {
  console.log("ENEMY JET 2 CLICKED");
  howitzerFire();
  playClickElementSound("enemy");
  this.removeEventListener("mousedown", enemyJet2Clicked);
  updateScore(3);
  elementPaused.call(this);
}

function stopEnemyJet2() {
  const enemyJet2 = document.querySelector("#ctr_jet2");
  elementStop(enemyJet2);
}

// ===== ENEMY JET 3 =====
function startEnemyJet3() {
  const enemyJet3 = document.querySelector("#ctr_jet3");
  // assign start position, delay, duration and animation direction
  enemyJet3.classList.add("position3", "delay3", "duration3", "left_to_right2");
  // assign event listeners
  enemyJet3.addEventListener("mousedown", enemyJet3Clicked);
  enemyJet3.addEventListener("animationend", (event) => {
    if (event.animationName !== "explosion" && event.animationName !== "disappear") {
      elementNotClicked(enemyJet3);
    } else if (event.animationName === "disappear") {
      elementReset(enemyJet3);
    }
  });
}

function enemyJet3Clicked() {
  console.log("ENEMY JET 3 CLICKED");
  howitzerFire();
  playClickElementSound("enemy");
  this.removeEventListener("mousedown", enemyJet3Clicked);
  updateScore(3);
  elementPaused.call(this);
}

function stopEnemyJet3() {
  const enemyJet3 = document.querySelector("#ctr_jet3");
  elementStop(enemyJet3);
}

// ===== ENEMY SPY BALLOON =====
function startEnemySpyBalloon() {
  const enemySpyBalloon = document.querySelector("#ctr_spy_balloon");
  // assign start position, delay, duration and animation direction
  enemySpyBalloon.classList.add("position1", "delay1", "duration3", "left_to_right3");
  // assign event listeners
  enemySpyBalloon.addEventListener("mousedown", enemySpyBalloonClicked);
  enemySpyBalloon.addEventListener("animationend", (event) => {
    if (event.animationName !== "explosion" && event.animationName !== "disappear") {
      elementNotClicked(enemySpyBalloon);
    } else if (event.animationName === "disappear") {
      elementReset(enemySpyBalloon);
    }
  });
}

function enemySpyBalloonClicked() {
  console.log("ENEMY SPY BALLOON CLICKED");
  howitzerFire();
  playClickElementSound("enemy");
  this.removeEventListener("mousedown", enemySpyBalloonClicked);
  updateScore(5);
  elementPaused.call(this);
}

function stopEnemySpyBalloon() {
  const enemySpyBalloon = document.querySelector("#ctr_spy_balloon");
  elementStop(enemySpyBalloon);
}

// ===== CIVILIAN AIRPLANE =====
function startCivilianAirplane() {
  const civilianAirplane = document.querySelector("#ctr_airplane");
  // assign start position, delay, duration and animation direction
  civilianAirplane.classList.add("position2", "delay2", "duration4", "left_to_right3");
  // assign event listeners
  civilianAirplane.addEventListener("mousedown", civilianAirplaneClicked);
  civilianAirplane.addEventListener("animationend", (event) => {
    if (event.animationName !== "explosion" && event.animationName !== "disappear") {
      elementNotClicked(civilianAirplane);
    } else if (event.animationName === "disappear") {
      elementReset(civilianAirplane);
    }
  });
}

function civilianAirplaneClicked() {
  console.log("CIVILIAN AIRPLANE CLICKED");
  howitzerFire();
  playClickElementSound("civilian");
  this.removeEventListener("mousedown", civilianAirplaneClicked);
  decreaseRank(1);
  elementPaused.call(this);
}

function stopCivilianAirplane() {
  const civilianAirplane = document.querySelector("#ctr_airplane");
  elementStop(civilianAirplane);
}

// ===== CIVILIAN BALLOON =====
function startCivilianBalloon() {
  const civilianBalloon = document.querySelector("#ctr_air_balloon");
  // assign start position, delay, duration and animation direction
  civilianBalloon.classList.add("position3", "delay3", "duration6", "right_to_left2");
  // assign event listeners
  civilianBalloon.addEventListener("mousedown", civilianBalloonClicked);
  civilianBalloon.addEventListener("animationend", (event) => {
    if (event.animationName !== "explosion" && event.animationName !== "disappear") {
      elementNotClicked(civilianBalloon);
    } else if (event.animationName === "disappear") {
      elementReset(civilianBalloon);
    }
  });
}

function civilianBalloonClicked() {
  console.log("CIVILIAN BALLOON CLICKED");
  howitzerFire();
  playClickElementSound("civilian");
  this.removeEventListener("mousedown", civilianBalloonClicked);
  decreaseRank(1);
  elementPaused.call(this);
}

function stopCivilianBalloon() {
  const civilianBalloon = document.querySelector("#ctr_air_balloon");
  elementStop(civilianBalloon);
}

// ===== GAME ELEMENT GENERIC FUNCTIONS =====
function howitzerFire() {
  const howitzer = document.querySelector("#ctr_howitzer");
  howitzer.querySelector("img").classList.add("howitzer_fire");
  howitzer.querySelector("img").addEventListener("animationend", () => {
    howitzer.querySelector("img").classList.remove("howitzer_fire");
  });
}

function elementNotClicked(element) {
  elementReset(element);
}

function elementPaused() {
  const element = this;
  element.classList.add("paused");
  elementExplosion.call(this);
}

function elementExplosion() {
  const element = this;
  element.querySelector(".sprite_explosion").classList.remove("hidden");
  element.querySelector(".sprite_explosion").classList.add("explosion");
  elementDisappear.call(this);
}

function elementDisappear() {
  const element = this;
  element.querySelector(".sprite_element").classList.add("disappear");
}

function elementReset(element) {
  elementStop(element);
  if (isGameRunning) {
    elementRespawn(element);
  }
}

function elementStop(element) {
  element.querySelector(".sprite_element").classList.remove("disappear");
  element.querySelector(".sprite_explosion").classList.add("hidden");
  element.querySelector(".sprite_explosion").classList.remove("explosion");
  if (element === document.querySelector("#ctr_ufo")) {
    element.classList.remove("position_top1", "position_top2", "position_top3");
    element.classList.remove("delay4");
    element.classList.remove("duration4", "duration5", "duration6");
    element.classList.remove("top_to_bottom1", "top_to_bottom2", "top_to_bottom3");
  } else {
    element.classList.remove("position1", "position2", "position3", "position4");
    element.classList.remove("delay1", "delay2", "delay3", "delay4");
    element.classList.remove("duration1", "duration2", "duration3", "duration4", "duration5", "duration6");
    element.classList.remove("left_to_right1", "left_to_right2", "left_to_right3", "left_to_right4");
    element.classList.remove("right_to_left1", "right_to_left2", "right_to_left3", "right_to_left4");
  }
  element.classList.remove("paused");
  element.offsetLeft;
}

function elementRespawn(element) {
  switch (element) {
    case document.querySelector("#ctr_ufo"):
      element.addEventListener("mousedown", ufoClicked);
      break;
    case document.querySelector("#ctr_jet"):
      element.addEventListener("mousedown", enemyJetClicked);
      break;
    case document.querySelector("#ctr_jet2"):
      element.addEventListener("mousedown", enemyJet2Clicked);
      break;
    case document.querySelector("#ctr_jet3"):
      element.addEventListener("mousedown", enemyJet3Clicked);
      break;
    case document.querySelector("#ctr_spy_balloon"):
      element.addEventListener("mousedown", enemySpyBalloonClicked);
      break;
    case document.querySelector("#ctr_airplane"):
      element.addEventListener("mousedown", civilianAirplaneClicked);
      break;
    case document.querySelector("#ctr_air_balloon"):
      element.addEventListener("mousedown", civilianBalloonClicked);
      break;
  }
  // add position, speed, delay and movement classes at "random"
  if (element === document.querySelector("#ctr_ufo")) {
    randomMovementUfo(element);
    delayedUfoSpawnSound();
  } else {
    randomMovementElements(element);
  }
}

function randomMovementElements(element) {
  const position = Math.floor(Math.random() * 4) + 1;
  element.classList.add("position" + position);

  const delay = Math.floor(Math.random() * 4) + 1;
  element.classList.add("delay" + delay);

  const duration = Math.floor(Math.random() * 3) + 1;
  element.classList.add("duration" + duration);

  const leftOrRight = Math.floor(Math.random() * 2) + 1;
  const movement = Math.floor(Math.random() * 4) + 1;
  if (leftOrRight === 1) {
    element.classList.add("left_to_right" + movement);
  } else {
    element.classList.add("right_to_left" + movement);
  }
}

function randomMovementUfo(element) {
  const position = Math.floor(Math.random() * 3) + 1;
  element.classList.add("position_top" + position);

  const delay = 4;
  element.classList.add("delay" + delay);

  const duration = Math.floor(Math.random() * 3) + 4;
  element.classList.add("duration" + duration);

  const movement = Math.floor(Math.random() * 3) + 1;
  element.classList.add("top_to_bottom" + movement);
}
