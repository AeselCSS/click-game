"use strict";

// flow: start -> initGameElements ->
// click -> pause -> explode -> disappear -> reset -> reSpawn
// || 
// animationEnd -> reset -> reSpawn

// ===== INITIATE GAME ELEMENT MOVEMENT =====
function initGameElements() {
    initUfo();
    initEnemyJet();
    initEnemyJet2();
    initEnemyJet3();
    initEnemySpyBalloon();
    initCivilianAirplane();
    initCivilianBalloon();
}

function initUfo () {
  let ufo = document.querySelector("#ctr_ufo");
  ufo.classList.add("position_top1");
  ufo.classList.add("delay1");
  ufo.classList.add("duration4");
  ufo.classList.add("top_to_bottom1");
  ufo.addEventListener("mousedown", ufoClicked);
  ufo.addEventListener("animationend", (event) => {
    if (event.animationName !== "explosion" &&
        event.animationName !== "disappear") {
      ufoLanded();
    }
  });
    ufo.addEventListener("animationend", (event) => {
        if (event.animationName === "disappear") {
            elementReset(ufo);
        }
  });
}

function initEnemyJet () {
    let enemyJet = document.querySelector("#ctr_jet");
    enemyJet.classList.add("position1");
    enemyJet.classList.add("delay1");
    enemyJet.classList.add("duration1");
    enemyJet.classList.add("left_to_right1");
    // enemyJet.addEventListener("mousedown", enemyJetClicked);
}

function initEnemyJet2 () {
    let enemyJet2 = document.querySelector("#ctr_jet2");
    enemyJet2.classList.add("position2");
    enemyJet2.classList.add("delay2");
    enemyJet2.classList.add("duration2");
    enemyJet2.classList.add("right_to_left1");
    // enemyJet2.addEventListener("mousedown", enemyJet2Clicked);
}

function initEnemyJet3 () {
    let enemyJet3 = document.querySelector("#ctr_jet3");
    enemyJet3.classList.add("position3");
    enemyJet3.classList.add("delay3");
    enemyJet3.classList.add("duration3");
    enemyJet3.classList.add("left_to_right2");
    // enemyJet3.addEventListener("mousedown", enemyJet3Clicked);
}

function initEnemySpyBalloon () {
    let enemySpyBalloon = document.querySelector("#ctr_spy_balloon");
    enemySpyBalloon.classList.add("position1");
    enemySpyBalloon.classList.add("delay1");
    enemySpyBalloon.classList.add("duration3");
    enemySpyBalloon.classList.add("right_to_left3");
    // enemySpyBalloon.addEventListener("mousedown", enemySpyBalloonClicked);
}

function initCivilianAirplane () {
    let civilianAirplane = document.querySelector("#ctr_airplane");
    civilianAirplane.classList.add("position2");
    civilianAirplane.classList.add("delay2");
    civilianAirplane.classList.add("duration4");
    civilianAirplane.classList.add("left_to_right3");
    // civilianAirplane.addEventListener("mousedown", civilianAirplaneClicked);
}

function initCivilianBalloon () {
    let civilianBalloon = document.querySelector("#ctr_air_balloon");
    civilianBalloon.classList.add("position3");
    civilianBalloon.classList.add("delay3");
    civilianBalloon.classList.add("duration6");
    civilianBalloon.classList.add("right_to_left2");
    // civilianBalloon.addEventListener("mousedown", civilianBalloonClicked);
}

// ===== UFO =====
    function ufoLanded() {
        console.log("UFO HAS LANDED! - GAME OVER");
        // TODO: add game logic for game over
    }

    function ufoClicked() {
    console.log("UFO CLICKED");
        elementClick();
        this.removeEventListener("mousedown", ufoClicked);
        elementPaused.call(this);
    }
// ===== ENEMY JET =====
    function enemyJetClicked() {
        console.log("ENEMY JET CLICKED");
        elementClick();
        this.removeEventListener("mousedown", enemyJetClicked);
        elementPaused.call(this);
    }

// ===== ENEMY JET 2 =====
    function enemyJet2Clicked() {
        console.log("ENEMY JET 2 CLICKED");
        elementClick();
        this.removeEventListener("mousedown", enemyJet2Clicked);
        elementPaused.call(this);
    }

// ===== ENEMY JET 3 =====
    function enemyJet3Clicked() {
        console.log("ENEMY JET 3 CLICKED");
        elementClick();
        this.removeEventListener("mousedown", enemyJet3Clicked);
        elementPaused.call(this);
    }

// ===== ENEMY SPY BALLOON =====
    function enemySpyBalloonClicked() {
        console.log("ENEMY SPY BALLOON CLICKED");
        elementClick();
        this.removeEventListener("mousedown", enemySpyBalloonClicked);
        elementPaused.call(this);
    }

// ===== CIVILIAN AIRPLANE =====
    function civilianAirplaneClicked() {
        console.log("CIVILIAN AIRPLANE CLICKED");
        elementClick();
        this.removeEventListener("mousedown", civilianAirplaneClicked);
        elementPaused.call(this);
    }

// ===== CIVILIAN BALLOON =====
    function civilianBalloonClicked() {
        console.log("CIVILIAN BALLOON CLICKED");
        elementClick();
        this.removeEventListener("mousedown", civilianBalloonClicked);
        elementPaused.call(this);
    }

// ===== GAME ELEMENT GENERIC FUNCTIONS =====

function elementClick() {
    let howitzer = document.querySelector("#ctr_howitzer");
    howitzer.querySelector("img").classList.add("howitzer_fire");
    howitzer.querySelector("img").addEventListener("animationend", () => {
        howitzer.querySelector("img").classList.remove("howitzer_fire");
    });
}

function elementPaused() {
    let element = this;
    element.classList.add("paused")
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
    
    // elementReset.call(this);
}

function elementReset(element) {
    // let element = this;
    console.log(element);
    console.log("reached elementReset");
    // reset element container
    element.classList.remove("paused");
    element.classList.remove("position1", "position2", "position3", "position4", "position_top1", "position_top2", "position_top3");
    element.classList.remove("delay1", "delay2", "delay3", "delay4");
    element.classList.remove("duration1", "duration2", "duration3", "duration4", "duration5", "duration6");
    element.classList.remove("left_to_right1", "left_to_right2", "left_to_right3", "left_to_right4", "right_to_left1", "right_to_left2", "right_to_left3", "right_to_left4", "top_to_bottom1", "top_to_bottom2", "top_to_bottom3");
    // reset element sprite
    element.querySelector(".sprite_element").classList.remove("disappear");
    // reset explosion sprite
    element.querySelector(".sprite_explosion").classList.add("hidden");
    element.querySelector(".sprite_explosion").classList.remove("explosion");
    // call elementRespawn
    // elementRespawn.call(this);
    elementRespawn(element);
}

function elementRespawn(element) {
//   let element = this;
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
//   add position, speed, delay and movement classes at "random"
  if (element === document.querySelector("#ctr_ufo")) {
    //   randomMovementUfo.call(this);
    randomMovementUfo(element);
  } else {
    //   randomMovementElements.call(this);
    randomMovementElements(element);
  }
}

function randomMovementElements(element) {
    // let element = this;
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
    // let element = this;
    let position = Math.floor(Math.random() * 3) + 1;
    element.classList.add("position_top" + position);

    let delay = Math.floor(Math.random() * 4) + 1;
    element.classList.add("delay" + delay);

    let duration = Math.floor(Math.random() * 6) + 1;
    element.classList.add("duration" + duration);

    let movement = Math.floor(Math.random() * 3) + 1;
    element.classList.add("top_to_bottom" + movement);

    console.log("new ufo created:");
    console.log("position_top: " + position + ", delay: " + delay + ", duration: " + duration + ", movement: top_to_bottom" + movement);
}

