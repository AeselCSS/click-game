// functions for exploding moving elements when clicked on

// container variables
const containerUfoExplosion = document.querySelector("#container_ufo_explosion");
const containerFighterJetExplosion = document.querySelector("#container_fighter_jet_explosion");
const containerFighterJet2Explosion = document.querySelector("#container_fighter_jet_2_explosion");
const containerFighterJet3Explosion = document.querySelector("#container_fighter_jet_3_explosion");
const containerWeatherBalloonExplosion = document.querySelector("#container_weather_balloon_explosion");
const containerAirplaneExplosion = document.querySelector("#container_airplane_explosion");
const containerHotAirBalloonExplosion = document.querySelector("#container_hot_air_balloon_explosion");

function ufoExplosion () {
  containerUfoExplosion.classList.remove("explosion");
  containerUfoExplosion.offsetLeft;
  containerUfoExplosion.classList.add("explosion");
  containerUfoExplosion.addEventListener("animationend", ufoZoomOut);
  containerUfoExplosion.addEventListener("animationend", ufoClickReset);
}
function fighterJetExplosion () {
  containerFighterJetExplosion.classList.remove("explosion");
  containerFighterJetExplosion.offsetLeft;
  containerFighterJetExplosion.classList.add("explosion");
  containerFighterJetExplosion.addEventListener("animationend", fighterJetZoomOut);
  containerFighterJetExplosion.addEventListener("animationend", fighterJetClickReset);
}
function fighterJet2Explosion () {
  containerFighterJet2Explosion.classList.remove("explosion");
  containerFighterJet2Explosion.offsetLeft;
  containerFighterJet2Explosion.classList.add("explosion");
  containerFighterJet2Explosion.addEventListener("animationend", fighterJet2ZoomOut);
  containerFighterJet2Explosion.addEventListener("animationend", fighterJet2ClickReset);
}
function fighterJet3Explosion () {
  containerFighterJet3Explosion.classList.remove("explosion");
  containerFighterJet3Explosion.offsetLeft;
  containerFighterJet3Explosion.classList.add("explosion");
  containerFighterJet3Explosion.addEventListener("animationend", fighterJet3ZoomOut);
  containerFighterJet3Explosion.addEventListener("animationend", fighterJet3ClickReset);
}
function weatherBalloonExplosion () {
  containerWeatherBalloonExplosion.classList.remove("explosion");
  containerWeatherBalloonExplosion.offsetLeft;
  containerWeatherBalloonExplosion.classList.add("explosion");
  containerWeatherBalloonExplosion.addEventListener("animationend", weatherBalloonZoomOut);
  containerWeatherBalloonExplosion.addEventListener("animationend", weatherBalloonClickReset);
}
function airplaneExplosion () {
  containerAirplaneExplosion.classList.remove("explosion");
  containerAirplaneExplosion.offsetLeft;
  containerAirplaneExplosion.classList.add("explosion");
  containerAirplaneExplosion.addEventListener("animationend", airplaneZoomOut);
  containerAirplaneExplosion.addEventListener("animationend", airplaneClickReset);
}
function hotAirBalloonExplosion () {
  containerHotAirBalloonExplosion.classList.remove("explosion");
  containerHotAirBalloonExplosion.offsetLeft;
  containerHotAirBalloonExplosion.classList.add("explosion");
  containerHotAirBalloonExplosion.addEventListener("animationend", hotAirBalloonZoomOut);
  containerHotAirBalloonExplosion.addEventListener("animationend", hotAirBalloonClickReset);
  
}

// funtions for hiding the moving element after it has been clicked
function ufoZoomOut() {
  document.querySelector("#container_ufo").classList.add("zoom_out");
}

function fighterJetZoomOut() {
  document.querySelector("#container_fighter_jet").classList.add("zoom_out");
}

function fighterJet2ZoomOut() {
  document.querySelector("#container_fighter_jet_2").classList.add("zoom_out");
}

function fighterJet3ZoomOut() {
  document.querySelector("#container_fighter_jet_3").classList.add("zoom_out");
}

function weatherBalloonZoomOut() {
  document.querySelector("#container_weather_balloon").classList.add("zoom_out");
}

function airplaneZoomOut() {
  document.querySelector("#container_airplane").classList.add("zoom_out");
}

function hotAirBalloonZoomOut() {
  document.querySelector("#container_hot_air_balloon").classList.add("zoom_out");
}