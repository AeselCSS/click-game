const containerUfo = document.querySelector("#container_ufo");
const containerFighterJet = document.querySelector("#container_fighter_jet");
const containerFighterJet2 = document.querySelector("#container_fighter_jet_2");
const containerFighterJet3 = document.querySelector("#container_fighter_jet_3");
const containerWeatherBalloon = document.querySelector("#container_weather_balloon");
const containerAirplane = document.querySelector("#container_airplane");
const containerHotAirBalloon = document.querySelector("#container_hot_air_balloon");
const containerAaGun = document.querySelector("#container_aa_gun");

window.addEventListener("load", moveInit);

function moveInit() {
  //initiate all moving objects on game start
  containerUfo.classList.add("ufo_move");
  containerFighterJet.classList.add("fighter_jet_move");
  containerFighterJet2.classList.add("fighter_jet_move_2");
  containerFighterJet3.classList.add("fighter_jet_move_3");
  containerWeatherBalloon.classList.add("weather_balloon_move");
  containerAirplane.classList.add("airplane_move");
  containerHotAirBalloon.classList.add("hot_air_balloon_move");

  eventInit();
}

function eventInit() {
  containerUfo.addEventListener("mousedown", ufoClick);
  containerFighterJet.addEventListener("mousedown", fighterJetClick);
  containerFighterJet2.addEventListener("mousedown", fighterJet2Click);
  containerFighterJet3.addEventListener("mousedown", fighterJet3Click);
  containerWeatherBalloon.addEventListener("mousedown", weatherBalloonClick);
  containerAirplane.addEventListener("mousedown", airplaneClick);
  containerHotAirBalloon.addEventListener("mousedown", hotAirBalloonClick);
}

// function for the AA gun firing animation

function aaGunFire() {
  containerAaGun.classList.add("aa_gun_fire");
  containerAaGun.addEventListener("animationend", aaGunFireReset);
}

// functions for click events for each moving element

function ufoClick() {
    containerUfo.classList.add("paused");
    aaGunFire();
    ufoExplosion(); // from assets/js/game_explosions.js
    
}

function fighterJetClick() {
    containerFighterJet.classList.add("paused");
    aaGunFire();
    fighterJetExplosion(); // from assets/js/game_explosions.js
    
}

function fighterJet2Click() {
    containerFighterJet2.classList.add("paused");
    aaGunFire();
    fighterJet2Explosion(); // from assets/js/game_explosions.js
    
}

function fighterJet3Click() {
    containerFighterJet3.classList.add("paused");
    aaGunFire();
    fighterJet3Explosion(); // from assets/js/game_explosions.js
    
}

function weatherBalloonClick() {
    containerWeatherBalloon.classList.add("paused");
    aaGunFire();
    weatherBalloonExplosion(); // from assets/js/game_explosions.js
    
}

function airplaneClick() {
    containerAirplane.classList.add("paused");
    aaGunFire();
    airplaneExplosion(); // from assets/js/game_explosions.js
    
}

function hotAirBalloonClick() {
    containerHotAirBalloon.classList.add("paused");
    aaGunFire();
    hotAirBalloonExplosion(); // from assets/js/game_explosions.js
    
}

// functions for resetting animations

function aaGunFireReset() {
  containerAaGun.classList.remove("aa_gun_fire");
  containerAaGun.offsetLeft;
}

function ufoClickReset() {
    containerUfo.classList.remove("ufo_move");
    containerUfo.classList.remove("paused");
    containerUfo.classList.remove("zoom_out");
    containerUfo.offsetLeft;
    containerUfo.classList.add("ufo_move");
    }

function fighterJetClickReset() {
    containerFighterJet.classList.remove("fighter_jet_move");
    containerFighterJet.classList.remove("paused");
    containerFighterJet.classList.remove("zoom_out");
    containerFighterJet.offsetLeft;
    containerFighterJet.classList.add("fighter_jet_move");
    }

function fighterJet2ClickReset() {
    containerFighterJet2.classList.remove("fighter_jet_move_2");
    containerFighterJet2.classList.remove("paused");
    containerFighterJet2.classList.remove("zoom_out");
    containerFighterJet2.offsetLeft;
    containerFighterJet2.classList.add("fighter_jet_move_2");
    }

function fighterJet3ClickReset() {
    containerFighterJet3.classList.remove("fighter_jet_move_3");
    containerFighterJet3.classList.remove("paused");
    containerFighterJet3.classList.remove("zoom_out");
    containerFighterJet3.offsetLeft;
    containerFighterJet3.classList.add("fighter_jet_move_3");
    }

function weatherBalloonClickReset() {
    containerWeatherBalloon.classList.remove("weather_balloon_move");
    containerWeatherBalloon.classList.remove("paused");
    containerWeatherBalloon.classList.remove("zoom_out");
    containerWeatherBalloon.offsetLeft;
    containerWeatherBalloon.classList.add("weather_balloon_move");
    }

function airplaneClickReset() {
    containerAirplane.classList.remove("airplane_move");
    containerAirplane.classList.remove("paused");
    containerAirplane.classList.remove("zoom_out");
    containerAirplane.offsetLeft;
    containerAirplane.classList.add("airplane_move");
    }

function hotAirBalloonClickReset() {
    containerHotAirBalloon.classList.remove("hot_air_balloon_move");
    containerHotAirBalloon.classList.remove("paused");
    containerHotAirBalloon.classList.remove("zoom_out");
    containerHotAirBalloon.offsetLeft;
    containerHotAirBalloon.classList.add("hot_air_balloon_move");
    }