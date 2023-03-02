"use strict";
// ===== ELEMENT SPECIFIC GAME ELEMENTS =====
// ===== UFO =====
function startUfo() {
  let ufo = document.querySelector("#ctr_ufo");
  ufo.classList.add("position_top1");
  ufo.classList.add("delay4");
  ufo.classList.add("duration4");
  ufo.classList.add("top_to_bottom1");
  delayedUfoSpawnSound();
  ufo.addEventListener("mousedown", ufoClicked);
  ufo.addEventListener("animationend", (event) => {
    if (event.animationName !== "explosion" && event.animationName !== "disappear") {
      ufoLanded();
    }
  });
  ufo.addEventListener("animationend", (event) => {
    if (event.animationName === "disappear") {
      clearDelayedUfoSpawnSound();
      elementReset(ufo);
    }
  });
}

function stopUfo() {
  let ufo = document.querySelector("#ctr_ufo");
  clearDelayedUfoSpawnSound();
  elementStop(ufo);
}

function ufoLanded() {
  console.log("UFO HAS LANDED! - GAME OVER");
  decreaseRank(3);
}

function ufoClicked() {
  console.log("UFO CLICKED");
  elementClick();
  playClickElementSound("enemy");
  this.removeEventListener("mousedown", ufoClicked);
  elementPaused.call(this);
}

// ===== ENEMY JET =====
function startEnemyJet() {
  let enemyJet = document.querySelector("#ctr_jet");
  enemyJet.classList.add("position1");
  enemyJet.classList.add("delay1");
  enemyJet.classList.add("duration3");
  enemyJet.classList.add("left_to_right1");
  enemyJet.addEventListener("mousedown", enemyJetClicked);
  enemyJet.addEventListener("animationend", (event) => {
    // console.log(event.animationName);
    if (event.animationName !== "explosion" && event.animationName !== "disappear") {
      elementNotClicked(enemyJet);
    }
  });
  enemyJet.addEventListener("animationend", (event) => {
    if (event.animationName === "disappear") {
      elementReset(enemyJet);
    }
  });
}

function enemyJetClicked() {
  console.log("ENEMY JET CLICKED");
  elementClick();
  playClickElementSound("enemy");
  this.removeEventListener("mousedown", enemyJetClicked);
  updateScore(3);
  elementPaused.call(this);
}

function stopEnemyJet() {
  let enemyJet = document.querySelector("#ctr_jet");
  elementStop(enemyJet);
}

// ===== ENEMY JET 2 =====
function startEnemyJet2() {
  let enemyJet2 = document.querySelector("#ctr_jet2");
  enemyJet2.classList.add("position2");
  enemyJet2.classList.add("delay2");
  enemyJet2.classList.add("duration2");
  enemyJet2.classList.add("right_to_left1");
  enemyJet2.addEventListener("mousedown", enemyJet2Clicked);
  enemyJet2.addEventListener("animationend", (event) => {
    //   console.log(event.animationName);
    if (event.animationName !== "explosion" && event.animationName !== "disappear") {
      elementNotClicked(enemyJet2);
    }
  });
  enemyJet2.addEventListener("animationend", (event) => {
    if (event.animationName === "disappear") {
      elementReset(enemyJet2);
    }
  });
}

function enemyJet2Clicked() {
  console.log("ENEMY JET 2 CLICKED");
  elementClick();
  playClickElementSound("enemy");
  this.removeEventListener("mousedown", enemyJet2Clicked);
  updateScore(3);
  elementPaused.call(this);
}

function stopEnemyJet2() {
  let enemyJet2 = document.querySelector("#ctr_jet2");
  elementStop(enemyJet2);
}

// ===== ENEMY JET 3 =====
function startEnemyJet3() {
  let enemyJet3 = document.querySelector("#ctr_jet3");
  enemyJet3.classList.add("position3");
  enemyJet3.classList.add("delay3");
  enemyJet3.classList.add("duration3");
  enemyJet3.classList.add("left_to_right2");
  enemyJet3.addEventListener("mousedown", enemyJet3Clicked);
  enemyJet3.addEventListener("animationend", (event) => {
    //   console.log(event.animationName);
    if (event.animationName !== "explosion" && event.animationName !== "disappear") {
      elementNotClicked(enemyJet3);
    }
  });
  enemyJet3.addEventListener("animationend", (event) => {
    if (event.animationName === "disappear") {
      elementReset(enemyJet3);
    }
  });
}

function enemyJet3Clicked() {
  console.log("ENEMY JET 3 CLICKED");
  elementClick();
  playClickElementSound("enemy");
  this.removeEventListener("mousedown", enemyJet3Clicked);
  updateScore(3);
  elementPaused.call(this);
}

function stopEnemyJet3() {
  let enemyJet3 = document.querySelector("#ctr_jet3");
  elementStop(enemyJet3);
}

// ===== ENEMY SPY BALLOON =====
function startEnemySpyBalloon() {
  let enemySpyBalloon = document.querySelector("#ctr_spy_balloon");
  enemySpyBalloon.classList.add("position1");
  enemySpyBalloon.classList.add("delay1");
  enemySpyBalloon.classList.add("duration3");
  enemySpyBalloon.classList.add("right_to_left3");
  enemySpyBalloon.addEventListener("mousedown", enemySpyBalloonClicked);
  enemySpyBalloon.addEventListener("animationend", (event) => {
    //   console.log(event.animationName);
    if (event.animationName !== "explosion" && event.animationName !== "disappear") {
      elementNotClicked(enemySpyBalloon);
    }
  });
  enemySpyBalloon.addEventListener("animationend", (event) => {
    if (event.animationName === "disappear") {
      elementReset(enemySpyBalloon);
    }
  });
}

function enemySpyBalloonClicked() {
  console.log("ENEMY SPY BALLOON CLICKED");
  elementClick();
  playClickElementSound("enemy");
  this.removeEventListener("mousedown", enemySpyBalloonClicked);
  updateScore(5);
  elementPaused.call(this);
}

function stopEnemySpyBalloon() {
  let enemySpyBalloon = document.querySelector("#ctr_spy_balloon");
  elementStop(enemySpyBalloon);
}

// ===== CIVILIAN AIRPLANE =====
function startCivilianAirplane() {
  let civilianAirplane = document.querySelector("#ctr_airplane");
  civilianAirplane.classList.add("position2");
  civilianAirplane.classList.add("delay2");
  civilianAirplane.classList.add("duration4");
  civilianAirplane.classList.add("left_to_right3");
  civilianAirplane.addEventListener("mousedown", civilianAirplaneClicked);
  civilianAirplane.addEventListener("animationend", (event) => {
    //   console.log(event.animationName);
    if (event.animationName !== "explosion" && event.animationName !== "disappear") {
      elementNotClicked(civilianAirplane);
    }
  });
  civilianAirplane.addEventListener("animationend", (event) => {
    if (event.animationName === "disappear") {
      elementReset(civilianAirplane);
    }
  });
}

function civilianAirplaneClicked() {
  console.log("CIVILIAN AIRPLANE CLICKED");
  elementClick();
  playClickElementSound("civilian");
  this.removeEventListener("mousedown", civilianAirplaneClicked);
  decreaseRank(1);
  elementPaused.call(this);
}

function stopCivilianAirplane() {
  let civilianAirplane = document.querySelector("#ctr_airplane");
  elementStop(civilianAirplane);
}

// ===== CIVILIAN BALLOON =====
function startCivilianBalloon() {
  let civilianBalloon = document.querySelector("#ctr_air_balloon");
  civilianBalloon.classList.add("position3");
  civilianBalloon.classList.add("delay3");
  civilianBalloon.classList.add("duration6");
  civilianBalloon.classList.add("right_to_left2");
  civilianBalloon.addEventListener("mousedown", civilianBalloonClicked);
  civilianBalloon.addEventListener("animationend", (event) => {
    //   console.log(event.animationName);
    if (event.animationName !== "explosion" && event.animationName !== "disappear") {
      elementNotClicked(civilianBalloon);
    }
  });
  civilianBalloon.addEventListener("animationend", (event) => {
    if (event.animationName === "disappear") {
      elementReset(civilianBalloon);
    }
  });
}

function civilianBalloonClicked() {
  console.log("CIVILIAN BALLOON CLICKED");
  elementClick();
  playClickElementSound("civilian");
  this.removeEventListener("mousedown", civilianBalloonClicked);
  decreaseRank(1);
  elementPaused.call(this);
}

function stopCivilianBalloon() {
  let civilianBalloon = document.querySelector("#ctr_air_balloon");
  elementStop(civilianBalloon);
}

// ===== GAME ELEMENT GENERIC FUNCTIONS =====
function elementClick() {
  let howitzer = document.querySelector("#ctr_howitzer");
  howitzer.querySelector("img").classList.add("howitzer_fire");
  howitzer.querySelector("img").addEventListener("animationend", () => {
    howitzer.querySelector("img").classList.remove("howitzer_fire");
  });
}

function elementNotClicked(element) {
  elementReset(element);
}

function elementPaused() {
  let element = this;
  element.classList.add("paused");
  elementExplosion.call(this);
}

function elementExplosion() {
  let element = this;
  element.querySelector(".sprite_explosion").classList.remove("hidden");
  element.querySelector(".sprite_explosion").classList.add("explosion");
  elementDisappear.call(this);
}

function elementDisappear() {
  let element = this;
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
  element.classList.remove(
    "position1",
    "position2",
    "position3",
    "position4",
    "position_top1",
    "position_top2",
    "position_top3"
  );
  element.classList.remove("delay1", "delay2", "delay3", "delay4");
  element.classList.remove("duration1", "duration2", "duration3", "duration4", "duration5", "duration6");
  element.classList.remove(
    "left_to_right1",
    "left_to_right2",
    "left_to_right3",
    "left_to_right4",
    "right_to_left1",
    "right_to_left2",
    "right_to_left3",
    "right_to_left4",
    "top_to_bottom1",
    "top_to_bottom2",
    "top_to_bottom3"
  );
  element.classList.remove("paused");
  element.offsetLeft;
}

function elementRespawn(element) {
  // add eventlisterners based on element value
  if (element === document.querySelector("#ctr_ufo")) {
    element.addEventListener("mousedown", ufoClicked);
  } else if (element === document.querySelector("#ctr_jet")) {
    element.addEventListener("mousedown", enemyJetClicked);
  } else if (element === document.querySelector("#ctr_jet2")) {
    element.addEventListener("mousedown", enemyJet2Clicked);
  } else if (element === document.querySelector("#ctr_jet3")) {
    element.addEventListener("mousedown", enemyJet3Clicked);
  } else if (element === document.querySelector("#ctr_spy_balloon")) {
    element.addEventListener("mousedown", enemySpyBalloonClicked);
  } else if (element === document.querySelector("#ctr_airplane")) {
    element.addEventListener("mousedown", civilianAirplaneClicked);
  } else if (element === document.querySelector("#ctr_air_balloon")) {
    element.addEventListener("mousedown", civilianBalloonClicked);
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
  let position = Math.floor(Math.random() * 4) + 1;
  element.classList.add("position" + position);

  let delay = Math.floor(Math.random() * 4) + 1;
  element.classList.add("delay" + delay);

  let duration = Math.floor(Math.random() * 3) + 1;
  element.classList.add("duration" + duration);

  let leftOrRight = Math.floor(Math.random() * 2) + 1;
  let movement = Math.floor(Math.random() * 4) + 1;
  if (leftOrRight === 1) {
    element.classList.add("left_to_right" + movement);
  } else {
    element.classList.add("right_to_left" + movement);
  }
}

function randomMovementUfo(element) {
  let position = Math.floor(Math.random() * 3) + 1;
  element.classList.add("position_top" + position);

  let delay = 4;
  element.classList.add("delay" + delay);

  let duration = Math.floor(Math.random() * 3) + 4;
  element.classList.add("duration" + duration);

  let movement = Math.floor(Math.random() * 3) + 1;
  element.classList.add("top_to_bottom" + movement);
}
