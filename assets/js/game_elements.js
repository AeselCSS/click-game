const containerUfo = document.querySelector("#container_ufo");
const containerFighterJet = document.querySelector("#container_fighter_jet");
const containerFighterJet2 = document.querySelector("#container_fighter_jet_2");
const containerFighterJet3 = document.querySelector("#container_fighter_jet_3");
const containerWeatherBalloon = document.querySelector("#container_weather_balloon");
const containerAirplane = document.querySelector("#container_airplane");
const containerHotAirBalloon = document.querySelector("#container_hot_air_balloon");
const containerAaGun = document.querySelector("#container_aa_gun");

window.addEventListener("load", startGame);

function startGame() {
    // scoreInit();
    // timerInit();
    moveInit();
    clickEventsInit();

};

function moveInit() {
  //initiate all moving objects on game start
  containerUfo.classList.add("ufo_move");
  containerFighterJet.classList.add("fighter_jet_move");
  containerFighterJet2.classList.add("fighter_jet_move_2");
  containerFighterJet3.classList.add("fighter_jet_move_3");
  containerWeatherBalloon.classList.add("weather_balloon_move");
  containerAirplane.classList.add("airplane_move");
  containerHotAirBalloon.classList.add("hot_air_balloon_move");

}

function clickEventsInit() {
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
    containerUfo.removeEventListener("mousedown", ufoClick);
    aaGunFire();
    ufoExplosion(); // from assets/js/game_explosions.js
    
}

function fighterJetClick() {
    containerFighterJet.classList.add("paused");
    containerFighterJet.removeEventListener("mousedown", fighterJetClick);
    aaGunFire();
    fighterJetExplosion(); // from assets/js/game_explosions.js
    
}

function fighterJet2Click() {
    containerFighterJet2.classList.add("paused");
    containerFighterJet2.removeEventListener("mousedown", fighterJet2Click);
    aaGunFire();
    fighterJet2Explosion(); // from assets/js/game_explosions.js
    
}

function fighterJet3Click() {
    containerFighterJet3.classList.add("paused");
    containerFighterJet3.removeEventListener("mousedown", fighterJet3Click);
    aaGunFire();
    fighterJet3Explosion(); // from assets/js/game_explosions.js
    
}

function weatherBalloonClick() {
    containerWeatherBalloon.classList.add("paused");
    containerWeatherBalloon.removeEventListener("mousedown", weatherBalloonClick);
    aaGunFire();
    weatherBalloonExplosion(); // from assets/js/game_explosions.js
    
}

function airplaneClick() {
    containerAirplane.classList.add("paused");
    containerAirplane.removeEventListener("mousedown", airplaneClick);
    aaGunFire();
    airplaneExplosion(); // from assets/js/game_explosions.js
    
}

function hotAirBalloonClick() {
    containerHotAirBalloon.classList.add("paused");
    containerHotAirBalloon.removeEventListener("mousedown", hotAirBalloonClick);
    aaGunFire();
    hotAirBalloonExplosion(); // from assets/js/game_explosions.js
    
}

// functions for resetting animations

function aaGunFireReset() {
  containerAaGun.classList.remove("aa_gun_fire");
  containerAaGun.offsetLeft;
}

function ufoClickReset() {
    containerUfo.addEventListener("mousedown", ufoClick);
    containerUfo.classList.remove("ufo_move");
    containerUfo.classList.remove("paused");
    containerUfo.classList.remove("zoom_out");
    containerUfo.offsetLeft;
    containerUfo.classList.add("ufo_move");
    }

function fighterJetClickReset() {
    containerFighterJet.addEventListener("mousedown", fighterJetClick);
    containerFighterJet.classList.remove("fighter_jet_move");
    containerFighterJet.classList.remove("paused");
    containerFighterJet.classList.remove("zoom_out");
    containerFighterJet.offsetLeft;
    containerFighterJet.classList.add("fighter_jet_move");
    }

function fighterJet2ClickReset() {
    containerFighterJet2.addEventListener("mousedown", fighterJet2Click);
    containerFighterJet2.classList.remove("fighter_jet_move_2");
    containerFighterJet2.classList.remove("paused");
    containerFighterJet2.classList.remove("zoom_out");
    containerFighterJet2.offsetLeft;
    containerFighterJet2.classList.add("fighter_jet_move_2");
    }

function fighterJet3ClickReset() {
    containerFighterJet3.addEventListener("mousedown", fighterJet3Click);
    containerFighterJet3.classList.remove("fighter_jet_move_3");
    containerFighterJet3.classList.remove("paused");
    containerFighterJet3.classList.remove("zoom_out");
    containerFighterJet3.offsetLeft;
    containerFighterJet3.classList.add("fighter_jet_move_3");
    }

function weatherBalloonClickReset() {
    containerWeatherBalloon.addEventListener("mousedown", weatherBalloonClick);
    containerWeatherBalloon.classList.remove("weather_balloon_move");
    containerWeatherBalloon.classList.remove("paused");
    containerWeatherBalloon.classList.remove("zoom_out");
    containerWeatherBalloon.offsetLeft;
    containerWeatherBalloon.classList.add("weather_balloon_move");
    }

function airplaneClickReset() {
    containerAirplane.addEventListener("mousedown", airplaneClick);
    containerAirplane.classList.remove("airplane_move");
    containerAirplane.classList.remove("paused");
    containerAirplane.classList.remove("zoom_out");
    containerAirplane.offsetLeft;
    containerAirplane.classList.add("airplane_move");
    }

function hotAirBalloonClickReset() {
    containerHotAirBalloon.addEventListener("mousedown", hotAirBalloonClick);
    containerHotAirBalloon.classList.remove("hot_air_balloon_move");
    containerHotAirBalloon.classList.remove("paused");
    containerHotAirBalloon.classList.remove("zoom_out");
    containerHotAirBalloon.offsetLeft;
    containerHotAirBalloon.classList.add("hot_air_balloon_move");
    }