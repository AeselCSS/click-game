"use strict";

// ====== GLOBAL VARIABLES ======
const containerUfo = document.querySelector("#container_ufo");
// const containerUfoMove = document.querySelector("#container_ufo_movement");
const containerFighterJet = document.querySelector("#container_fighter_jet");
const containerFighterJet2 = document.querySelector("#container_fighter_jet_2");
const containerFighterJet3 = document.querySelector("#container_fighter_jet_3");
const containerWeatherBalloon = document.querySelector("#container_weather_balloon");
const containerAirplane = document.querySelector("#container_airplane");
const containerHotAirBalloon = document.querySelector("#container_hot_air_balloon");
const containerAaGun = document.querySelector("#container_aa_gun");

const containerUfoExplosion = document.querySelector("#container_ufo_explosion");
const containerFighterJetExplosion = document.querySelector("#container_fighter_jet_explosion");
const containerFighterJet2Explosion = document.querySelector("#container_fighter_jet_2_explosion");
const containerFighterJet3Explosion = document.querySelector("#container_fighter_jet_3_explosion");
const containerWeatherBalloonExplosion = document.querySelector("#container_weather_balloon_explosion");
const containerAirplaneExplosion = document.querySelector("#container_airplane_explosion");
const containerHotAirBalloonExplosion = document.querySelector("#container_hot_air_balloon_explosion");

// ====== GAME ELEMENTS ======
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

function showGameElements() {
  containerUfo.classList.remove("hidden");
  containerFighterJet.classList.remove("hidden");
  containerFighterJet2.classList.remove("hidden");
  containerFighterJet3.classList.remove("hidden");
  containerWeatherBalloon.classList.remove("hidden");
  containerAirplane.classList.remove("hidden");
  containerHotAirBalloon.classList.remove("hidden");
  containerAaGun.classList.remove("hidden");
}

// ====== MOVEMENT ======
function startMovement() {
  containerUfo.classList.add("ufo_move");
  containerFighterJet.classList.add("fighter_jet_move");
  containerFighterJet2.classList.add("fighter_jet_move_2");
  containerFighterJet3.classList.add("fighter_jet_move_3");
  containerWeatherBalloon.classList.add("weather_balloon_move");
  containerAirplane.classList.add("airplane_move");
  containerHotAirBalloon.classList.add("hot_air_balloon_move");
}

function stopMovement() {
  containerUfo.classList.remove("ufo_move");
  containerFighterJet.classList.remove("fighter_jet_move");
  containerFighterJet2.classList.remove("fighter_jet_move_2");
  containerFighterJet3.classList.remove("fighter_jet_move_3");
  containerWeatherBalloon.classList.remove("weather_balloon_move");
  containerAirplane.classList.remove("airplane_move");
  containerHotAirBalloon.classList.remove("hot_air_balloon_move");
}
// ====== GAME ELEMENT EVENTS ======
function startEvents() {
  containerUfo.addEventListener("mousedown", ufoClick);
  containerUfo.addEventListener("animationend", (event) => {
    if (event.animationName === "ufo") {
      ufoLanding();
    }
  });
  containerFighterJet.addEventListener("mousedown", fighterJetClick);
  containerFighterJet2.addEventListener("mousedown", fighterJet2Click);
  containerFighterJet3.addEventListener("mousedown", fighterJet3Click);
  containerWeatherBalloon.addEventListener("mousedown", weatherBalloonClick);
  containerAirplane.addEventListener("mousedown", airplaneClick);
  containerHotAirBalloon.addEventListener("mousedown", hotAirBalloonClick);
}

function stopEvents() {
  containerUfo.removeEventListener("mousedown", ufoClick);
  containerUfo.removeEventListener("animationend", ufoLanding);
  containerFighterJet.removeEventListener("mousedown", fighterJetClick);
  containerFighterJet2.removeEventListener("mousedown", fighterJet2Click);
  containerFighterJet3.removeEventListener("mousedown", fighterJet3Click);
  containerWeatherBalloon.removeEventListener("mousedown", weatherBalloonClick);
  containerAirplane.removeEventListener("mousedown", airplaneClick);
  containerHotAirBalloon.removeEventListener("mousedown", hotAirBalloonClick);
}

// ===== CLICK EVENTS =====
function ufoClick() {
  console.log("Clicked on a UFO!");
    containerUfo.classList.add("paused");
    containerUfo.removeEventListener("mousedown", ufoClick);
    aaGunFire();
    ufoExplosion();
}

function fighterJetClick() {
    containerFighterJet.classList.add("paused");
    containerFighterJet.removeEventListener("mousedown", fighterJetClick);
    aaGunFire();
    fighterJetExplosion();
    updateScore(3);
}

function fighterJet2Click() {
    containerFighterJet2.classList.add("paused");
    containerFighterJet2.removeEventListener("mousedown", fighterJet2Click);
    aaGunFire();
    fighterJet2Explosion();
    updateScore(3);
}

function fighterJet3Click() {
    containerFighterJet3.classList.add("paused");
    containerFighterJet3.removeEventListener("mousedown", fighterJet3Click);
    aaGunFire();
    fighterJet3Explosion();
    updateScore(3);
}

function weatherBalloonClick() {
    containerWeatherBalloon.classList.add("paused");
    containerWeatherBalloon.removeEventListener("mousedown", weatherBalloonClick);
    aaGunFire();
    weatherBalloonExplosion();
    updateScore(5);
}

function airplaneClick() {
    containerAirplane.classList.add("paused");
    containerAirplane.removeEventListener("mousedown", airplaneClick);
    aaGunFire();
    airplaneExplosion();
    decreaseRank(1);
}

function hotAirBalloonClick() {
    containerHotAirBalloon.classList.add("paused");
    containerHotAirBalloon.removeEventListener("mousedown", hotAirBalloonClick);
    aaGunFire();
    hotAirBalloonExplosion();
    decreaseRank(1);
}

// ====== EXPLOSION ANIMATION AFTER CLICK EVENTS ======
function ufoExplosion() {
  console.log("UFO exploded!");
  containerUfoExplosion.classList.remove("hidden");
  containerUfoExplosion.classList.add("explosion");
  containerUfoExplosion.addEventListener("animationend", ufoZoomOut);
  containerUfoExplosion.addEventListener("animationend", ufoClickReset);
}
function fighterJetExplosion() {
  containerFighterJetExplosion.classList.remove("hidden");
  containerFighterJetExplosion.classList.add("explosion");
  containerFighterJetExplosion.addEventListener("animationend",fighterJetZoomOut);
  containerFighterJetExplosion.addEventListener("animationend",fighterJetClickReset);
}
function fighterJet2Explosion() {
  containerFighterJet2Explosion.classList.remove("hidden");
  containerFighterJet2Explosion.classList.add("explosion");
  containerFighterJet2Explosion.addEventListener("animationend",fighterJet2ZoomOut);
  containerFighterJet2Explosion.addEventListener("animationend",fighterJet2ClickReset);
}
function fighterJet3Explosion() {
  containerFighterJet3Explosion.classList.remove("hidden");
  containerFighterJet3Explosion.classList.add("explosion");
  containerFighterJet3Explosion.addEventListener("animationend",fighterJet3ZoomOut);
  containerFighterJet3Explosion.addEventListener("animationend",fighterJet3ClickReset);
}
function weatherBalloonExplosion() {
  containerWeatherBalloonExplosion.classList.remove("hidden");
  containerWeatherBalloonExplosion.classList.add("explosion");
  containerWeatherBalloonExplosion.addEventListener("animationend",weatherBalloonZoomOut);
  containerWeatherBalloonExplosion.addEventListener("animationend",weatherBalloonClickReset);
}
function airplaneExplosion() {
  containerAirplaneExplosion.classList.remove("hidden");
  containerAirplaneExplosion.classList.add("explosion");
  containerAirplaneExplosion.addEventListener("animationend", airplaneZoomOut);
  containerAirplaneExplosion.addEventListener("animationend",airplaneClickReset);
}
function hotAirBalloonExplosion() {
  containerHotAirBalloonExplosion.classList.remove("hidden");
  containerHotAirBalloonExplosion.classList.add("explosion");
  containerHotAirBalloonExplosion.addEventListener("animationend",hotAirBalloonZoomOut);
  containerHotAirBalloonExplosion.addEventListener("animationend",hotAirBalloonClickReset);
}

// ====== ZOOM OUT ANIMATION AFTER EXPLOSIONS ======
function ufoZoomOut() {
  console.log("UFO zoomed out!");
  containerUfo.classList.add("zoom_out");
}

function fighterJetZoomOut() {
  containerFighterJet.classList.add("zoom_out");
}

function fighterJet2ZoomOut() {
  containerFighterJet2.classList.add("zoom_out");
}

function fighterJet3ZoomOut() {
  containerFighterJet3.classList.add("zoom_out");
}

function weatherBalloonZoomOut() {
  containerWeatherBalloon.classList.add("zoom_out");
}

function airplaneZoomOut() {
  containerAirplane.classList.add("zoom_out");
}

function hotAirBalloonZoomOut() {
  containerHotAirBalloon.classList.add("zoom_out");
}

// ===== OTHER EVENTS =====
function aaGunFire() {
  containerAaGun.classList.add("aa_gun_fire");
  containerAaGun.addEventListener("animationend", aaGunFireReset);
}

function ufoLanding() {
  console.log("UFO landed!");
  decreaseRank(3); // SET TO 3
}
//===== RESETTIN ELEMENTS AFTER CLICK EVENTS ======
function aaGunFireReset() {
    containerAaGun.classList.remove("aa_gun_fire");
    containerAaGun.offsetLeft;
}

function ufoClickReset() {
  containerUfo.addEventListener("mousedown", ufoClick);
  containerUfo.classList.remove("ufo_move");
  containerUfo.classList.remove("paused");
  containerUfo.classList.remove("zoom_out");
  containerUfoExplosion.classList.remove("explosion");
  containerUfo.offsetLeft;
  containerUfo.classList.add("ufo_move");
  containerUfoExplosion.classList.add("hidden");
}

function fighterJetClickReset() {
  containerFighterJet.addEventListener("mousedown", fighterJetClick);
  containerFighterJet.classList.remove("fighter_jet_move");
  containerFighterJet.classList.remove("paused");
  containerFighterJet.classList.remove("zoom_out");
  containerFighterJetExplosion.classList.remove("explosion");
  containerFighterJet.offsetLeft;
  containerFighterJet.classList.add("fighter_jet_move");
  containerFighterJetExplosion.classList.add("hidden");
}

function fighterJet2ClickReset() {
  containerFighterJet2.addEventListener("mousedown", fighterJet2Click);
  containerFighterJet2.classList.remove("fighter_jet_move_2");
  containerFighterJet2.classList.remove("paused");
  containerFighterJet2.classList.remove("zoom_out");
  containerFighterJet2Explosion.classList.remove("explosion");
  containerFighterJet2.offsetLeft;
  containerFighterJet2.classList.add("fighter_jet_move_2");
  containerFighterJet2Explosion.classList.add("hidden");
}

function fighterJet3ClickReset() {
  containerFighterJet3.addEventListener("mousedown", fighterJet3Click);
  containerFighterJet3.classList.remove("fighter_jet_move_3");
  containerFighterJet3.classList.remove("paused");
  containerFighterJet3.classList.remove("zoom_out");
  containerFighterJet3Explosion.classList.remove("explosion");
  containerFighterJet3.offsetLeft;
  containerFighterJet3.classList.add("fighter_jet_move_3");
  containerFighterJet3Explosion.classList.add("hidden");
}

function weatherBalloonClickReset() {
  containerWeatherBalloon.addEventListener("mousedown", weatherBalloonClick);
  containerWeatherBalloon.classList.remove("weather_balloon_move");
  containerWeatherBalloon.classList.remove("paused");
  containerWeatherBalloon.classList.remove("zoom_out");
  containerWeatherBalloonExplosion.classList.remove("explosion");
  containerWeatherBalloon.offsetLeft;
  containerWeatherBalloon.classList.add("weather_balloon_move");
  containerWeatherBalloonExplosion.classList.add("hidden");
}

function airplaneClickReset() {
  containerAirplane.addEventListener("mousedown", airplaneClick);
  containerAirplane.classList.remove("airplane_move");
  containerAirplane.classList.remove("paused");
  containerAirplane.classList.remove("zoom_out");
  containerAirplaneExplosion.classList.remove("explosion");
  containerAirplane.offsetLeft;
  containerAirplane.classList.add("airplane_move");
  containerAirplaneExplosion.classList.add("hidden");
}

function hotAirBalloonClickReset() {
  containerHotAirBalloon.addEventListener("mousedown", hotAirBalloonClick);
  containerHotAirBalloon.classList.remove("hot_air_balloon_move");
  containerHotAirBalloon.classList.remove("paused");
  containerHotAirBalloon.classList.remove("zoom_out");
  containerHotAirBalloonExplosion.classList.remove("explosion");
  containerHotAirBalloon.offsetLeft;
  containerHotAirBalloon.classList.add("hot_air_balloon_move");
  containerHotAirBalloonExplosion.classList.add("hidden");
}
